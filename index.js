const port = 80
const path = require('path')
const express = require('express')
const app = express()
var cors = require('cors');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const static_path = path.join(__dirname,'./public')
const views_path = path.join(__dirname,'./views')
app.use(express.static(static_path))
app.use(cors());
app.set('view engine', 'pug')
app.set('views', views_path)
app.get('/weather',(req,res)=>{
   if(!req.query.address){
       return res.send({error:'please provide address'})
   }
   geocode(req.query.address,(error,response1)=>{
       if(error){
           return res.send({error})
       }
       forecast(response1.latitude,response1.longitude,response1.location,(error,response2)=>{
           if(error){
               return res.send({error})
           }
           res.send({
               info : response2,
            address : req.query.address,
            location : response1.location
             
           })
       })
   })
})
app.get('/',(requeste,response)=>{
    response.render('index.pug')
})
app.listen(port, () => {
    console.log(`The application is started successfully on port ${port} click http://127.0.0.1 to open`)
})