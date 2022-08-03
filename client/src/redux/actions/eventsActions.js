import { GET_ALL_EVENTS } from '../constants/constants';
import data from '../../components/Main/fixtures';

const { events } = data;
const getEventsAll = () => ({
  type: GET_ALL_EVENTS,
  payload: events,
});

export default getEventsAll;
