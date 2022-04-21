import React, { useState } from 'react';
import plus from '../../images/plus.svg';
import './Vacancy.css';
import { Button, Modal } from 'antd';
import { Table } from './Table/Table';
import { Select, DatePicker } from 'antd';
import { Input, Space, InputNumber } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;
const { TextArea } = Input;

const { Option } = Select;
export const Vacancy = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onChange = value => {
    console.log('changed', value);
  };

  const onSearch = value => console.log(value);

  return (
    <div className="vacancy-page-wrapper">
      <Modal
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1>ვაკანსიის დეტალები</h1>
        <Select defaultValue="" style={{ width: 300 }}>
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </Space>
        </Select>
        <DatePicker placeholder="დაწყების თარიღი" />
        <DatePicker picker="month" placeholder="დასრულების თარიღი" />
        <h2>ვაკანსიის ადგილმდებარეობა</h2>
        <div>
          <Select defaultValue="რეგიონი" style={{ width: 300 }}>
            <Space direction="vertical">
              <Search placeholder="" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
          </Select>
          <Select defaultValue="მუნიციპალიტეტი" style={{ width: 300 }}>
            <Space direction="vertical">
              <Search placeholder="" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
          </Select>
          <Select defaultValue="დასახლებული პუნქტი" style={{ width: 300 }}>
            <Space direction="vertical">
              <Search placeholder="" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
          </Select>
          <Select defaultValue="მისამართი" style={{ width: 300 }}>
            <Space direction="vertical">
              <Search placeholder="" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
          </Select>
          <hr></hr>
          <Select defaultValue="სამუშაო განრიგი" style={{ width: 300 }}>
            <Space direction="vertical">
              <Search placeholder="" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
          </Select>
          <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
          <DatePicker placeholder="შევსების ბოლო ვადა" />
        </div>
        <div>
          <h2>სამუშაო აღწერა</h2>
        </div>
        <TextArea rows={4} />
        <div>მატერიალური რესურსები</div>
        <Input placeholder="დასახელება" />
        <InputNumber min={1} max={10} onChange={onChange} placeholder="რაოდენობა" />
        <TextArea rows={4} placeholder="კომენტარი" />
        <hr></hr>
        <div>
          <h2>საკონაქტო პირი</h2>
        </div>
        <div>
          <Input placeholder="სახელი" />
          <Input placeholder="გვარი" />
          <Input placeholder="ტლეფონის ნომერი" />
          <Input placeholder="მობილურის ნომერი" />
          <Input placeholder="მოქმედი ელ-ფოსტა" />
        </div>
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
