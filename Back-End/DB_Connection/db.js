const mongoose = require('mongoose');

(async function connectDb(){
    try{
    await mongoose.connect("mongodb://localhost:27017/Mern-Project")
    console.log('connected db successfully')
    }
    catch(err){
        console.log("some issue while connectiong to db",err)

    }
})();