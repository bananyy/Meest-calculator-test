const express = require('express')
const app = express()
// const routes = require('./routesv1')

const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV;
const mySetting = process.env.MY_SETTING;

// app.use('/api/v1', routes)

app.get('/api/healthcheck', (req, res) => { 
        res.send({
        status: `online`,
        nodeEnv,
        mySetting
    });
});

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
});
