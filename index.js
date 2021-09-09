const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')
app.use(cors())
const PORT = 3000

app.get('/', async (req, Res) => {
    const response = await axios(`http://ip-api.com/json/`).then((res) => res.data)
    return res.json(response)
})
app.listen(process.env.PORT || PORT, () => { console.log(`APP IS RUNNIND : ${PORT}`) })