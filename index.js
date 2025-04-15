//https://www.youtube.com/watch?v=_7UQPve99r4
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
    try {
        console.log(2 / 0)
        console.log(0 / 2)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/', (req, res) =>
    res.send("Hello world! with nodeMon")
)