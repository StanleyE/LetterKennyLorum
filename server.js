const mongoose = require('mongoose');
//connect to mlab url in config.js
const DB_URL = require('./config').mongoURI
mongoose.connect(DB_URL);
const express = require('express'),
      app = express();
const bodyParser = require('body-parser');
const path = require('path');

//import config from './config';
require('dotenv').config(); // this line reads all the key-value pairs from your .env into process.env


const db = mongoose.connection;
db.on('open', ()=>{
    console.log('Release the Mongoose!');
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Allow for cross platforming
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static('./client/build'));


const PORT = process.env.PORT || 8080;


const Quote = require('./models/Quote');
const Danger = require('./models/Danger');

let data = ['Nice execution. You’re doing terrific.', 'You gonna fight with those shades or play poker stars dot com'];
// Add new Quote Array
function dataEntry(data) {
    const Quote = require('./models/Quote');

    for (let i = 0; i < data.length; i++) {
        let newQ = Quote({
                quote: data[i],
                safe: false
            });
        // console.log(newQ);
        newQ.save()
            .then(saved =>{
                console.log('Save successful'+i);
            })
            .catch(error =>{
                console.log(error);
            });
    }
}

//dataEntry(data);

//Add new quote singular

// let newQ = Danger({
//     quote: 'Tim’s, McDonalds and Beer Store all close on Christmas Day and that’s about your whole fucking world right there.',
//     safe: false
// });

// newQ.save()
//     .then(saved =>{
//         console.log('Save successful');
//     })
//     .catch(error =>{
//         console.log(error);
//     });



app.get('/safe', (req, res)=>{
    let puppers=[];
    Quote.find({})
         .then(results=>{
             if(!results){
                 console.log('Whoops, something went wrong!')
             }
             for (let i = 0; i < results.length; i++) {
                puppers.push(results[i].quote);
             }
             //console.log('results found');
             //console.log(results.length);
            // console.log(results[0].quote);
            res.json(puppers);
         })
         .catch(error=>{
             console.log(error);
         })
})

app.get('/nsfw', (req, res)=>{
    let pheasants = [];
    Danger.find({})
          .then(results=>{
              if(!results){
                  console.log('Nothing here! Give your balls a tug!')
              }
              for (let x = 0; x < results.length; x++){
                  pheasants.push(results[x].quote);
              }
                  //console.log(results[0].quote);
                  res.json(pheasants);
          })
          .catch(error=>{
              console.log(error)
          })
})

app.get('*', (req, res) => {
        res.sendFile('index.html', {root: __dirname + './client/build'})
    })
    

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + './client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// express listener
app.listen(PORT, () => {
    console.log('Party rockin\' on ', PORT);
})