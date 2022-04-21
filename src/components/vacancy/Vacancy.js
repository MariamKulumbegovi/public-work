import React, { useState } from 'react';
import plus from '../../images/plus.svg';
import './Vacancy.css';
import { Button, Modal } from 'antd';
import { Table } from './Table/Table';
import { Select, DatePicker } from 'antd';

const { Option } = Select;
export const Vacancy = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="vacancy-page-wrapper">
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select defaultValue="lucy" style={{ width: 120 }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>{' '}
        <DatePicker />
        <DatePicker picker="month" />
      </Modal>
      <div className="actions-wrapper">
        <div className="add-delete-wrapper">
          <button
            className="add-vacancy-btn"
            onClick={() => setIsModalVisible(true)}
          >
            <img src={plus} />
            ვაკანსიის დამატება
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
      <Table />
    </div>
  );
};
