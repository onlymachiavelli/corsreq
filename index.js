const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')
app.use(cors())
const PORT = 3000


app.get('/:protocol/:url/:domaine/:path', async (req, res) => {
    let URL = String(req.params.protocol + "://" + req.params.url + "." + req.params.domaine + "/" + req.params.path)
    const Response = await axios.get(URL)
    return res.json(Response.data)
})
app.listen(process.env.PORT || PORT, () => { console.log(`APP IS RUNNIND : ${PORT}`) })