const express = require("express");
const CarRentAdvert = require("../model/CarRentAdvert");




const router = express.Router()

// get car rend advert list
router.get("/carRentAdvertList",(req,res)=>{
    CarRentAdvert.find()
    .then((carAdvertList)=>{
        carAdvertList = carAdvertList

        res.json({
            carAdvertList : carAdvertList,
            success : 1
        })
    })
    .catch((err)=>{
        res.json(err);
    })
})
router.post("/createCartRentAdvert",(req,res)=>{
   const newCarRentAdvert = new CarRentAdvert({
    carModel : req.body.carModel,
    carRentMinuteCost : req.body.carRentMinuteCost,
    carGasolineState : req.body.carGasolineState,
    carAdvertDescription :  req.body.carAdvertDescription,
    carLocaitonMinute : req.body.carLocaitonMinute,
    carLocationLongtude : req.body.carLocationLongtude,
    carLocationLatitude : req.body.carLocationLatitude
   })
   newCarRentAdvert.save()
   res.json({
    success :1,
    message:"success"
})

})

module.exports = router;