const mongoose = require('mongoose')



const snippetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    id: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        min: 6,
        max: 2000
    },
    date: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: String,
        required: false,
    },
    html: {
        type: String,
        required: false,        
    },
    css: {
        type: String,
        required: false,        
    },
    javaS: {
        type: String,
        required: false,        
    },
})

module.exports = mongoose.model('Snippet', snippetSchema)