const express = require('express')
const app = express()
const fetch = require("node-fetch")
const cors = require('cors')

app.use(cors({
    origin: '*',
}))

// app.get("/", async (req, res) => {
//     const response = fetch
// })

app.listen(3000, ()=> {
    console.log("They watching port 3000")
})