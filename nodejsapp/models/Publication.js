const mongoose = require('mongoose')
const User=require('../models/User')
const Schema = mongoose.Schema
const publicationSchema = new Schema({

    description: {
        type: String
    },
    usermail: {
        type:String
    },
    userid:{
        type:String
    },
    usernamep:{
        type:String
    }
    
}, { timestamps: true })

const publication = mongoose.model('Publication', publicationSchema)
module.exports = publication
