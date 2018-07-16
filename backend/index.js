const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LetterKenny');

const db = mongoose.connection;
db.on('open', ()=>{
    console.log('mongoose connected');
});

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
