const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const cors = require('cors')



dotenv.config({path: './config/.env'})


// DB

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("DB connected"))

//routes

const snippetsRoute = require('./routes/snippets')


app.use(express.json())
app.use(cors())
app.use('/api/snippets', snippetsRoute)


const PORT = process.env.PORT || 5000
app.listen(process.env.PORT, console.group(`server is running on port ${PORT}`))