import { GET_ALL_EVENTS } from '../constants/constants';

const eventsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_EVENTS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default eventsReducer;
