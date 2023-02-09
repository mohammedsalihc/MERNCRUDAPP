const mongoose = require('mongoose')
const DB = "mongodb+srv://Mohdsalih:mistaken@cluster0.im5cv1b.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('database connected')).catch((error) => console.log(error.message))