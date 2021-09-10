const express = require("express")
const cors = require("cors")
const app = express()
const axios = require("axios")
app.use(cors())
const PORT = 3000
const SetPaths = (strpaths) => {
  let path = ""
  for (let i = 0; i < strpaths.length; i++)
    if (strpaths[i] === "*") {
      path += "/"
    } else path += strpaths[i]
  return path
}

app.get("/:protocol/:url/:domaine/:paths", async (req, res) => {
  let URL = String(
    req.params.protocol +
      "://" +
      req.params.url +
      "." +
      req.params.domaine +
      "/" +
      SetPaths(String(req.params.paths))
  )
  const Response = await axios.get(URL)
  return res.json(Response.data)
})
app.listen(process.env.PORT || PORT, () => {
  console.log(`APP IS RUNNIND : ${PORT}`)
})
