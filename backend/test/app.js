const express = require('express')


const app = express() 
const port = 3000


app.use(express.json())


app.get("/home", function(req,resp) {
    resp.send("Hello world!")
})

app.listen(port)