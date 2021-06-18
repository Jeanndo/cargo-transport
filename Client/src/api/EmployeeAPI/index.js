import axios from 'axios';

//const url = 'http://localhost:5000/trucks';

const API = axios.create({baseURL:'http://localhost:5000'})

   API.interceptors.request.use((req)=>{

    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`; 
    }
    
    return req;
    })


export const fetchTrucks = () => API.get('/employee');
export const createTruck = (newTruck) => API.post('/employee', newTruck);
export const updateTruck = (id,updatedTruck)=> API.patch(`/employee/${id}`,updatedTruck);
export const deleteTruck = (id)=>API.delete(`/employee/${id}`);
export const getTruck = (id)=>API.get(`/employee/${id}`);

export const signIn = (formData)=>API.post('/user/signin',formData);
export const signUp = (formData)=>API.post('/user/signup',formData);
export const fetchUsers =()=>API.get('/user');

