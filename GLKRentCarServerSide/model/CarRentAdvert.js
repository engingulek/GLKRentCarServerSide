const mongoose = require('mongoose')
const CartInfo = require('./CartInfo')


const CartRentAdvertSchema = new mongoose.Schema({
    carModel : {type:CartInfo,required:true},
    carRentMinuteCost : {type:Number,required:true},
    carGasolineState : {type:Number,required:true},
    carLocaitonMinute : {type:Number,required:true},
    carLocationLongtude : {type:String,required:true},
    carLocationLatitude : {type:String,required:true}

})

module.exports = mongoose.model("CartRentAdvert",CartRentAdvertSchema)