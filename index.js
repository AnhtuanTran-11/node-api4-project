require('dotenv').config()
const express = require('express')
const server = express()
const path = require('path')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))

if (process.env.NODE_ENV === "development") {
    const cors = require('cors')
    server.use(cors())
}

server.get('/api/testing', (req, res) => {
    res.json({
        message: "You made it to the endpoint, congrats!"
    })
})

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
})


const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})