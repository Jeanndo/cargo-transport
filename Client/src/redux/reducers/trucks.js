import { CREATE_TRUCK, UPDATE_TRUCK,DELETE, FETCH_ALL_TRUCK, FETCH_TRUCK} from '../../constants/actionTypes';

 const truckReducer = (trucks =[], action) => {
  switch (action.type) {
    case FETCH_ALL_TRUCK:
      return action.payload;
    case FETCH_TRUCK:
      return action.payload.truck;
    case CREATE_TRUCK:
      return [...trucks, action.payload];
    case UPDATE_TRUCK:
      return trucks.map((truck) => (truck._id === action.payload._id ? action.payload : truck));
    case DELETE:
      return trucks.filter((truck) => truck._id !== action.payload);
    default:
      return trucks;
  }
};

export default truckReducer;