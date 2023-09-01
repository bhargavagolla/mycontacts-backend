const mongoose = require('mongoose')
const uri =  "mongodb+srv://bhargavagolla:nodejs1234@cluster0.wxuttax.mongodb.net/mycontacts-backend?retryWrites=true&w=majority"
const connectDb = async() =>{    
try{
    const connect = await mongoose.connect(uri)
    console.log(
     "Database connected: ",
     connect.connection.host,
     connect.connection.name)
    }catch(err) {
        console.log(err) 
        process.exit(1)   
    }
}

module.exports = connectDb