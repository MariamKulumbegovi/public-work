import React, { useState } from 'react';

import { FilterOutlined } from '@ant-design/icons';
export const Dropdownm = () => {
  const [show, setShow] = useState(false);
  console.log();
  return (
    <div>
      <FilterOutlined className="filter" />
      <div className="dropdown-wrapper">
        <select className="filter-select">
          <option>ყველა</option>
          <option>ნებისმიერი</option>
        </select>
        <select className="filter-select">
          <option>შეიცავს</option>
          <option>არ შეიცავს</option>
        </select>
        <input className="filter-select" />
      </div>
    </div>
  );
};
