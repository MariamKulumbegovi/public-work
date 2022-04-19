import React from 'react';
import plus from '../../images/plus.svg';
import './Vacancy.css';
import { Button } from 'antd';
export const Vacancy = () => {
  return (
    <div className="vacancy-page-wrapper">
      <div>
        <div>
          <Button className="add-vacancy-btn">
            <img src={plus} />
            <span>ვაკანსიის დამატება</span>
          </Button>
          <Button className="delete-btn" danger type="primary">
            წაშლა
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};
