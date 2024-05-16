const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    eventName:String,
    description:String,
    category:String
})

const EventModel = mongoose.model('events',EventSchema)
module.exports = EventModel