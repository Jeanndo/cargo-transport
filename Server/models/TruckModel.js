import mongoose from 'mongoose';

const truckSchema = mongoose.Schema({

company:String,
product:String,
quantity:String,
source:String,
destination:String,
name:String,
userId:String,
createdAt:{
    type:Date,
    default:new Date()
}

});


const CargoTransport = mongoose.model('CargoTransport',truckSchema);

export default CargoTransport;