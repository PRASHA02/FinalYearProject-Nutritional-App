const mongoose = require('mongoose')

require('dotenv').config()

const uri = process.env.MONGOOSE_URI

const connectDB = async() => {
    try{
        const db =await mongoose.connect(uri)
    console.log(`Connected to DB ${db.connection.host}`)
    }catch(err){
        console.log('Something went wrong while connecting DB..')
        process.exit(1)
    }
}

module.exports = connectDB