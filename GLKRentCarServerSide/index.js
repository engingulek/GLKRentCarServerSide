const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors")

app.use(bodyParser.json());
app.use(cors()); 


mongoose.connect("mongodb+srv://cartRentAdvert:IvZCKA2vCtYeDXzF@engingulek.ejner.mongodb.net/GLKRentCarDatabase?retryWrites=true&w=majority")


const carRentAdvertList = require("./router/carRentAdvert")

mongoose.connection.once("open",()=>{
    console.log("Connect to DB!")

}).on("error",(error)=>{
    console.log("Failed to connect" + error)
})

app.use("/",carRentAdvertList)
app.listen(3000,()=> { // server fonksiyonu dinlenmeye başladığında bu callback fonksiyonu çalıştırlacak
    console.log("Server is running on port 8080")
    })