const mongoose = require('mongoose');
Schema = mongoose.Schema;

const quoteSchema = Schema({
    quote : {
        type: String,
        required: true
    },
    safe: {
        type: Boolean,
        required: true
    }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;