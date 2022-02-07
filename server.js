const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json([
        {name: 'iraze'},
        {name: 'huggo'}
    ])
})

app.listen('4567')