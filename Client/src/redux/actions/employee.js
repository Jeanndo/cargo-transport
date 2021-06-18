import { CREATE_TRUCK, UPDATE_TRUCK,DELETE, FETCH_ALL_TRUCK, FETCH_TRUCK} from '../../constants/actionTypes';

import * as api from '../../../src/api/EmployeeAPI/index';

export const getTrucks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTrucks();

    dispatch({ type: FETCH_ALL_TRUCK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTruck = (truck) => async (dispatch) => {
  try {
    const { data } = await api.createTruck(truck);

    dispatch({ type: CREATE_TRUCK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTruck = (id, truck) => async (dispatch) => {
  try {
    const { data } = await api.updateTruck(id, truck);

    dispatch({ type: UPDATE_TRUCK, payload: data });
  } catch (error) {
    console.log(error);
  }
};



export const deleteTruck= (id) => async (dispatch) => {
  try {
    await api.deleteTruck(id)

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTruck= (id) => async (dispatch) => {
  try {
   const {data} =  await api.getTruck(id)

    dispatch({ type:FETCH_TRUCK, payload:{truck:data}});
  } catch (error) {
    console.log(error.message);
  }
};
