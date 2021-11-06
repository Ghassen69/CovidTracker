const mongoose = require('mongoose')
var Float=require('mongoose-float').loadType(mongoose)
const Schema = mongoose.Schema
const localisationSchema = new Schema({
   latitude: {
        type: Float

    },
    longitude: {
        type: Float
    },
    counter: {
        type: Number
    },
    
}, { timestamps: true })

const Locate = mongoose.model('Localisation', localisationSchema)
module.exports = Locate