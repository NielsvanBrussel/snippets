const mongoose = require('mongoose')



const snippetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 2000
    },
    date: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: String,
    },
    html: {
        type: String,        
    },
    css: {
        type: String,        
    },
    javaS: {
        type: String,        
    },
})

module.exports = mongoose.model('Snippet', snippetSchema)