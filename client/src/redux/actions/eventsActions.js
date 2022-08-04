import { GET_ALL_EVENTS } from '../constants/constants';
// import data from '../../components/Main/fixtures';

// const { events } = data;
export const getEventsAll = (data) => ({
  type: GET_ALL_EVENTS,
  payload: data,
});

export const getEventsAllThunk = () => async (dispatch) => {
  const response = await fetch('/api/events');
  const data = await response.json();
  if (response.ok) {
    console.log(data);
    dispatch(getEventsAll(data));
  }
};
