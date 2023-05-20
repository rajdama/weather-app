let form = document.getElementById('form')
let input = document.getElementById('input')
let myvalue = document.getElementById('myvalue')
weatherInfo = ''

form.addEventListener('submit',(e)=>{
e.preventDefault()
weatherInfo = ''
let new_location = input.value
let url = `http://localhost/weather?address=${new_location}`
fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            myvalue.innerHTML = data.error
        }
        else{
            weatherInfo += `${data.info}`
            myvalue.innerHTML = weatherInfo
        }
    })
})
})