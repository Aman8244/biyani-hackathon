// utils/dbConnect.js
import mongoose from 'mongoose';

async function dbConnect() {
    const mongoDBUri = process.env.mongodb_uri
    await mongoose.connect(mongoDBUri).then(()=>{
        console.log("database connected!:)")
    }).catch(err=>{
        console.log(`Some Problem Occurred:( ${err}`)
    })
}

export default dbConnect;
