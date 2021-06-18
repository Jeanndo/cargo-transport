import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import truckRoutes from './routes/Trucks.js';
import userRoutes from './routes/users.js';
import adminRoutes from './routes/adminRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));

app.use(cors());

app.use('/trucks', truckRoutes);
app.use('/user',userRoutes);
app.use('/admin',adminRoutes);
app.use('/employee',employeeRoutes);

app.get('/',(req,res)=>{
    res.send('Hello To Truck-App API');
});

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
})).catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify',false);


