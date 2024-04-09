const mongoose = require("mongoose");

module.exports = mongoose.model("Pet", 
    new mongoose.Schema(
        {
            name: { type: String, required: true },
            age: { type: Number, required: true },
            breed: { type: String, required: true },
            items_required: { type: String, required: true },
        }
    )
)