import { useState } from 'react';
import data from './fixtures';
import './Table.css';

function Table() {
  const { events } = data;
  const [sortConfig, setSortConfig] = useState(null);
  const [filter, setFilter] = useState(null);

  if (sortConfig !== null) {
    events.sort((a, b) => {
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
      return events.filter((el) => +filter.key === el[filter.name]);
    }
    return events;
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
              <button type="button" onClick={() => requestSort('ts')}>
                ts
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort('level')}>
                level
              </button>
              <select onChange={(e) => clickHandler({ key: e.target.value, name: 'level' })}>
                <option>{null}</option>
                <option>1</option>
                <option>2</option>
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
          {filterEvents().map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.date}</td>
              <td>{el.level}</td>
              <td>{el.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
