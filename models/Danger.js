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

const Danger = mongoose.model('Danger', quoteSchema);

module.exports = Danger;