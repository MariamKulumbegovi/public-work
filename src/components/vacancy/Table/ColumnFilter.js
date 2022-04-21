import { Dropdown } from 'antd';
import React from 'react';

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div>
      <input
        style={{ padding: '3px' }}
        value={filterValue || ''}
        onChange={({ target }) => {
          setFilter(target.value);
        }}
      />
    </div>
  );
};
