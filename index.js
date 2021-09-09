const express = require('express')
const app = express()
const axios = require('axios')
const GetAPI = async () => {
    const Response = await axios(`http://ip-api.com/json/`)
        .then((res) => res.data)
    return Response
}

GetAPI().then((res) => {
    console.log(res)
})

app.get('/', (req, Res) => {
    GetAPI().then(res => {
        Res.send(res)
    })
})
app.listen(3000)