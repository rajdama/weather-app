let form = document.getElementById('form')
let input = document.getElementById('input')
let myvalue = document.getElementById('myvalue')
abcvalue = ''

form.addEventListener('submit',(e)=>{
e.preventDefault()
abcvalue = ''
let new_location = input.value
let url = `/weather?address=${new_location}`
fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            myvalue.innerHTML = data.error
        }
        else{
            abcvalue += `${data.info}`
            myvalue.innerHTML = abcvalue
        }
    })
})
})