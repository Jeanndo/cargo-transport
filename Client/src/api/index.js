import axios from 'axios';

//const url = 'http://localhost:5000/trucks';

const API = axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getTruck = (id)=>API.get(`/trucks/${id}`);
export const fetchTrucks = () => API.get('/trucks');
export const createTruck = (newTruck) => API.post('/trucks', newTruck);
export const updateTruck = (id,updatedTruck)=> API.patch(`/trucks/${id}`,updatedTruck);
export const deleteTruck = (id)=>API.delete(`/trucks/${id}`);


export const signIn = (formData)=>API.post('/user/signin',formData);
export const signUp = (formData)=>API.post('/user/signup',formData);
export const fetchUsers =()=>API.get('/user');


