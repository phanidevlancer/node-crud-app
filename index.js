//https://www.youtube.com/watch?v=_7UQPve99r4
const express = require('express')
const app = express()
const ProductRoute = require('./routes/product.route')

//middleware
app.use(express.json())


//routes
app.use('/api/products',ProductRoute)

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:phani2205@cruddb.qhdtlak.mongodb.net/?retryWrites=true&w=majority&appName=crudDB')
    .then(() => console.log('Connected!'));

app.listen(3000, () => {
    console.log("Hello world")
})

app.get('/', (req, res) =>
    res.send("Hello world! with nodeMon")
)