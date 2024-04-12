const express = require('express')
const app = express()
const routes = require('./routesv1')


app.use('/api/v1', routes)

app.listen(3000)
