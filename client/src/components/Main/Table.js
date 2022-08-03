import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getEventsAll from '../../redux/actions/eventsActions';
import './Table.css';

function Table() {
  const dispatch = useDispatch();
  const eventsStore = useSelector((state) => state.events);

  const [sortConfig, setSortConfig] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    dispatch(getEventsAll());
  }, []);

  if (sortConfig !== null) {
    eventsStore.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig?.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const clickHandler = (obj) => {
    if (obj.key === '') {
      return setFilter(null);
    }
    return setFilter(obj);
  };

  const filterEvents = () => {
    if (filter !== null) {
      return eventsStore.filter((el) => +filter.key === el[filter.name]);
    }
    return eventsStore;
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>
              <button type="button" onClick={() => requestSort('id')}>
                ID
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort('date')}>
                ts
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort('level')}>
                level
              </button>
              <select onChange={(e) => clickHandler({ key: e.target.value, name: 'level' })}>
                <option value="">all</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </th>
            <th>
              <button type="button" onClick={() => requestSort('message')}>
                message
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filterEvents()?.map((el) => (
            <tr key={el.id}>
              <td className="td-id">{el.id}</td>
              <td className="td-date">{String(el.date)}</td>
              <td className="td-level">{el.level}</td>
              <td className="td-message">{el.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
