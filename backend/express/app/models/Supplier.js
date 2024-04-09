const mongoose = require('mongoose');

module.exports = mongoose.model('Supplier', 
    new mongoose.Schema({
        name: {
            type: String,
        },
        productions : [
            {
                type: mongoose.SchemaTypes.ObjectId,
                quantity: Number,
            }
        ],
        phone_number: {
            type: String,
        },
        address: {
            type: String
        }
    })

)