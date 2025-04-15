const express = require('express')
const app = express()

app.use(express.json())

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:phani2205@cruddb.qhdtlak.mongodb.net/?retryWrites=true&w=majority&appName=crudDB')
    .then(() => console.log('Connected!'));


app.listen(3000, () => {
    console.log("Hello world")
})

app.post('/api/products', (req, res) => {
    console.log('Body is ', req.body)
    res.send(req.body)
})

app.get('/', (req, res) =>
    res.send("Hello world! with nodeMon")
)