const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LetterKenny');

const db = mongoose.connection;
db.on('open', ()=>{
    console.log('mongoose connected');
});

const Quote = require('./models/Quote');

let data = ['Pitter Patter.', 'Fart Book.', 'I guess we gots to calls up the internet.', 'Maybe if you’d ever been in a fight, you might not be so keen to be in one.', 'Super Soft birthday party.', 'Pump the brakes.', 'You guys do CrossFit?', 'Wayne look, ….It’s inappropriate McMurry.', 'You’re really gonna pump the brakes on a donkey dressed up as a unicorn?', 'Well here’s a tip, don’t fart in a space suit.', 'Figure it out.', 'Not my pig, not my farm.', 'Oh get off the cross, we need the wood.', 'You know, not to be impolite…', 'Oh, it’s too nice a day to get cross.', 'Go Time!', 'Great fishing in Quebec.', 'Oh…. that is noisy Dan.', 'Oh, that’s near Doctor Assisted Dan.', 'You better settle down over there, else I’m gonna come talk to ya.', 'It’s impolite to kiss and tell.', 'When the cat’s away, the mice will play.'];
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
