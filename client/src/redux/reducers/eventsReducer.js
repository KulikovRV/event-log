import { GET_ALL_EVENTS } from '../constants/constants';

const eventsReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_EVENTS:
      return payload;
    default:
      return state;
  }
};

export default eventsReducer;
