require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('./db/connection')
const Users = require('./Models/userSchema')
const cors = require('cors')
const router = require('./routes/router')

const port = process.env.PORT || 4070


app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => console.log(`server is srarted port ${port}`))