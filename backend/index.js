const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LetterKenny');

const db = mongoose.connection;
db.on('open', ()=>{
    console.log('mongoose connected');
});

const Quote = require('./models/Quote');

// Add new Quote
// let newQ = Quote({
//     quote: 'Deaad, hey Deaad! Better not forget those all dressed chips.',
//     safe: true
// });

newQ.save()
    .then(saved =>{
        console.log('Save successful');
    })
    .catch(error =>{
        console.log(error);
    });
