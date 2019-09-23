import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../elements/Button/Button';

const Biography = ({
  years, handleDelete, handleSort, handleSortBubble, activeYear, onStartYear, onOverYear, onFinishYear
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <div>
            Year 
              {' '}
              <Button title="sort" onButtonClick={handleSort} />
              <Button title="sortBubble" onButtonClick={handleSortBubble} />
            </div>
          </th>
          <th colSpan="2">Information</th>
        </tr>
      </thead>
      <tbody
        onClick={((event) => activeYear(event))}
        role="presentation"
      >
        {
        Object.entries(years)
          .map(([key, item]) => (
            <tr
              key={key}
              draggable
              onDragStart={() => onStartYear(key)}
              onDragOver={() => onOverYear(key)}
              onDragEnd={onFinishYear}
            >
              <td className="yearItem">{item.years}</td>
              <td className="infoItem">{item.info}</td>
              <td className="delete">
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(key);
                  }}
                >
                  &times;
                </button>
              </td>
            </tr>
          ))
      }
      </tbody>
    </table>
  );
};

Biography.propTypes = {
  years: PropTypes.objectOf(PropTypes.shape({
    year: PropTypes.string,
    info: PropTypes.string
  })),
  handleDelete: PropTypes.func,
  handleSort: PropTypes.func,
  handleSortBubble: PropTypes.func,
  activeYear: PropTypes.func,
  onStartYear: PropTypes.func,
  onOverYear: PropTypes.func,
  onFinishYear: PropTypes.func
};

Biography.defaultProps = {
  years: '',
  handleDelete: undefined,
  handleSort: undefined,
  handleSortBubble: undefined,
  activeYear: undefined,
  onStartYear: undefined,
  onOverYear: undefined,
  onFinishYear: undefined
};

export default Biography;
