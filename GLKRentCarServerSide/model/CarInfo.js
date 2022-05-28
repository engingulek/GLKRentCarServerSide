const mongoose = require('mongoose')


const newRentAdverCarInfoSchema = new mongoose.Schema({
    carName: {type:String,required:true},
    carModel : {type:String,required:true},
    carImage : {type:String,required:true},
    carPlate :{type:Object,required:true},
    carGearType : {type:String,required:true},
    
})

module.exports =  mongoose.model("CarInfo",newRentAdverCarInfoSchema)