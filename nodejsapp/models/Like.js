const mongoose = require('mongoose')
const User=require('../models/User')
const Publication=require('../models/Publication')
const Schema = mongoose.Schema
const likeSchema = new Schema({

    nombreLike: {
        type: Number
    },
    userid: {
        type:Number
    },
    publicationid:{
        type:Number
    }
}, { timestamps: true })

const like = mongoose.model('Like', likeSchema)
module.exports = like