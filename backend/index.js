const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LetterKenny');

const db = mongoose.connection;
db.on('open', ()=>{
    console.log('mongoose connected');
});

const Quote = require('./models/Quote');

let data = ['Who Garrett? No, Jarrett.', 'Hi Wade.', 'How are you now?' , 'Boots and the Ginger.', 'Not so bad.', 'Texas size 10-4.', 'Toughest guy in Letterkenny.', 'Let’s go easy over there, Squirrel Dan.', 'Back to Choring.'];
// Add new Quote
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
// console.log(dataEntry(data));
// console.log(data[0]);
dataEntry(data);

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
