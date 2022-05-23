const mongoose = require('mongoose')


const CartInfoSchema = new mongoose.Schema({
    carModel :{type:String , required:true},
    carImage : {type:String,required:true},
    carName : {type:String,required:true},

})

module.exports = mongoose.model("CarInfo",CartInfoSchema)