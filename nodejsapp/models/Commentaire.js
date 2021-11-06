const mongoose = require('mongoose')
const User=require('../models/User')
const Publication=require('../models/Publication')
const Schema = mongoose.Schema
const commentaireSchema = new Schema({

    comment: {
        type: String
    },
    userid: {
        type:Number
    },
    publicationid:{
        type:Number
    }
}, { timestamps: true })

const comment = mongoose.model('Commentaire', commentaireSchema)
module.exports = comment