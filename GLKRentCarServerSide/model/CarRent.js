const mongoose = require('mongoose')


const carRentSchema = new mongoose.Schema({
    userId : {type:String,required:true},
    advert : {type:Object,required:true},
    startTime: {type:String,required:true},
    carMinuteCost :{type:Object,required:true}
    
})

module.exports =  mongoose.model("CarRent",carRentSchema)