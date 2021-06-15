const request = require('request')
const forecast = (latitude,longitude,location,callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=6db4fa2a2531a87715b1af36b14d5972&query=${latitude},${longitude}&units=m`
    request({url:url,json:true},(error,response)=>
    {
    if(error){
            callback("Error! Unable to connect to weather service",undefined)
    }
    else if(response.body.error){
            callback('unable to find location',undefined)
    }
    else{
        callback(undefined,'Current tempearture of '+location+' is '+response.body.current.temperature+' degrees out and apparently feels like '+response.body.current.feelslike+' degrees out and weather description is '+response.body.current.weather_descriptions[0])
    }
})
}
module.exports = forecast