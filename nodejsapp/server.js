const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyparser = require("body-parser")

const userRoute = require('./routes/User')
const userController = require("./controllers/userController")
const publicationController=require("./controllers/publicationController")


mongoose.connect("mongodb+srv://aymen:aymen@cluster0.ilzru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => {
	console.log(err)
})
db.once('open', () => {
	console.log('Database connection established')
})

const app = express()
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const PORT =3000
app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}  `)
})



app.use('/api/user', userRoute)