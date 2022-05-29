const express = require("express");
const CarInfo = require("../model/CarInfo");
const CarRent = require("../model/CarRent");
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

router.post("/carRent",(req,res)=>{
    console.log(req.body)
    const cartRent = new CarRent({
        userId : req.body.userId,
        advert : req.body.advert,
        startTime: req.body.startTime,
        carMinuteCost: req.body.advertMinuteCost
    })

    cartRent.save()
    res.json({
     success :1,
     message:"success"
 })
})

router.post("/createCartRentAdvert",(req,res)=>{
 
   
    const newAdvertCarInfo = new CarInfo({
        carName: req.body.carName,
    carModel : req.body.carModel,
    carImage : req.body.carImage,
    carPlate : req.body.carPlate,
    carGearType : req.body.carGearType
    })



   const newCarRentAdvert = new CarRentAdvert({
    advertUserId:  req.body.advertUserId,
    carInfo : newAdvertCarInfo,
    carRentMinuteCost : req.body.carRentMinuteCost,
    carGasolineState : req.body.carGasolineState,
    carAdvertDescription :  req.body.carAdvertDescription,
    
    carLocationLongtude : req.body.carLocationLongtude,
    carLocationLatitude : req.body.carLocationLatitude,
    advertPassword : req.body. advertPassword

   })
   newCarRentAdvert.save()
   res.json({
    success :1,
    message:"success"
})

})

module.exports = router;