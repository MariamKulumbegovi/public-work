import React from 'react';
import plus from '../../images/plus.svg';
import './Vacancy.css';
import { Button } from 'antd';
export const Vacancy = () => {
  return (
    <div className="vacancy-page-wrapper">
      <div className="actions-wrapper">
        <div className="add-delete-wrapper">
          <button className="add-vacancy-btn">
            <img src={plus} />
            <span>ვაკანსიის დამატება</span>
          </button>
          <button className="delete-btn" type="primary">
            წაშლა
          </button>
        </div>
        <div className="VEP-wrapper">
          <button className="view-btn">ნახვა</button>
          <button className="edit-btn">რედაქტირება</button>
          <button className="publish-btn">გამოქვეყნება</button>
        </div>
      </div>
    </div>
  );
};
