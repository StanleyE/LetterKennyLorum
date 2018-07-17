const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LetterKenny');
const express = require('express'),
      app = express();
const bodyParser = require('body-parser');

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

const PORT = process.env.PORT || 8080;


const Quote = require('./models/Quote');

let data = ['It’s impolite to kiss and tell.', 'When the cat’s away, the mice will play.'];
// Add new Quote Array
function dataEntry(data) {
    const Quote = require('./models/Quote');

    for (let i = 0; i < data.length; i++) {
        let newQ = Quote({
                quote: data[i],
                safe: true
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

// let newQ = Quote({
//     quote: '',
//     safe: true
// });

// newQ.save()
//     .then(saved =>{
//         console.log('Save successful');
//     })
//     .catch(error =>{
//         console.log(error);
//     });

app.get('/', (req, res)=>{
    let puppers=[];
    let {q, safe} = req.body;
    // Quote.find({})
    //      .then(results=>{
    //          if(!results){
    //              res.json('Whoops, something went wrong!')
    //          }
    //          puppers.push(results.q);
    //          console.log('results found');
    //          res.json(puppers);
    //      })
    //      .catch(error=>{
    //          console.log(error);
    //      })
    
})

let puppers=[];
Quote.find({})
         .then(results=>{
             if(!results){
                 console.log('Whoops, something went wrong!')
             }
             puppers.push(results);
             console.log('results found');
             console.log(puppers);
         })
         .catch(error=>{
             console.log(error);
         })



// express listener
app.listen(PORT,()=>{
    console.log('Party rockin\' on ', PORT);
})