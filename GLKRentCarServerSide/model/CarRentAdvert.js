const mongoose = require('mongoose')



const CarRentAdvertSchema = new mongoose.Schema({
    advertUserId: {type:Object,required:true},
    carModel : {type:Object,required:true},
    carRentMinuteCost : {type:Number,required:true},
    carGasolineState : {type:Number,required:true},
    carAdvertDescription :  {type:String,required:true},
    carLocationLongtude : {type:String,required:true},
    carLocationLatitude : {type:String,required:true},
    advertPassword : {type:String,required:true}

})

module.exports = mongoose.model("CarRentAdvert",CarRentAdvertSchema)