import React, { useState, useEffect } from 'react';
import plus from '../../images/plus.svg';
import './Vacancy.css';
import { Button, Modal } from 'antd';
import { Row, Col } from 'antd';
import { Divider } from 'antd';
import useFetch from 'use-http';
import { API_PREFIX } from '../../constants/paths';
import { Select, DatePicker } from 'antd';
import { Input, Space, InputNumber } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;
const { TextArea } = Input;

const { Option } = Select;
export const Vacancy = () => {
  console.log('API_PREFIXAPI_PREFIX', API_PREFIX);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [vacancy, setVacancy] = useState({});
  const options = {
    headers: {
      'access-control-allow-headers': 'authorization',
      'access-control-allow-methods': 'GET',
      'access-control-allow-origin': '*',
      LoginToken: 'Bearer d7202369-93eb-11ec-80f3-005056b4f1d1@null',
    },
  }; // these options accept all native `fetch` options

  const { get, response, loading, error } = useFetch(API_PREFIX, options);

  useEffect(() => {
    initializeVacancies();
  }, []); // componentDidMount

  async function initializeVacancies() {
    const result = await get('/api/Common/VacancyNames');
    setVacancies(result.value);
    console.log('vacancies', result.value);
    // if (response.ok) setTodos(initialTodos);
  }

  async function initializeCoiuntreis() {
    const result = await get('/api/Common/countries');
    setVacancies(result.value);
    console.log('vacancies', result.value);
    // if (response.ok) setTodos(initialTodos);
  }

  const handleOk = () => {
    console.log('vacancy obj', vacancy);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onChange = value => {
    console.log('changed', value);
  };

  const onSearch = value => console.log(value);
  const handleChangeSelect = value => {
    setVacancy({ ...vacancy, vacancyId: value });
  };
  return (
    <div className="vacancy-page-wrapper">
      <Modal
        width={1200}
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h2 className="Vacancy-title">ვაკანსიის დეტალები</h2>
        <Row>
          <Col span={14}>
            <Row>
              <Col span={24}>
                <Select
                  showSearch
                  value={vacancy.vacancyName}
                  onChange={handleChangeSelect}
                  style={{ width: 640, borderRadius: 5, marginTop: 35 }}
                >
                  {vacancies.map(item => (
                    <Option key={item.key} value={item.name}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                {' '}
                <DatePicker
                  placeholder="დაწყების თარიღი"
                  style={{ width: 300, borderRadius: 5, marginTop: 20 }}
                />
              </Col>
              <Col span={12}>
                {' '}
                <DatePicker
                  placeholder="დასრულების თარიღი"
                  style={{ width: 300, borderRadius: 5, marginTop: 20 }}
                />
              </Col>
            </Row>
            <Divider />
            <h2 className="Vacancy-title">ვაკანსიის ადგილმდებარეობა</h2>
            <Row>
              <Col span={12}>
                <Select defaultValue="რეგიონი" style={{ width: 300 }}>
                  <Space direction="vertical">
                    <Search
                      placeholder=""
                      onSearch={onSearch}
                      style={{ width: 200 }}
                    />
                  </Space>
                </Select>
              </Col>
              <Col span={12}>
                <Select defaultValue="მუნიციპალიტეტი" style={{ width: 300 }}>
                  <Space direction="vertical">
                    <Search
                      placeholder=""
                      onSearch={onSearch}
                      style={{ width: 200 }}
                    />
                  </Space>
                </Select>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Select
                  defaultValue="დასახლებული პუნქტი"
                  style={{ width: 300, borderRadius: 5, marginTop: 30 }}
                >
                  <Space direction="vertical">
                    <Search placeholder="" onSearch={onSearch} />
                  </Space>
                </Select>
              </Col>
              <Col span={12}>
                <Select
                  defaultValue="მისამართი"
                  style={{ width: 300, borderRadius: 5, marginTop: 30 }}
                >
                  <Space direction="vertical">
                    <Search placeholder="" onSearch={onSearch} />
                  </Space>
                </Select>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={24}>
                <Select defaultValue="სამუშაო განრიგი" style={{ width: 300 }}>
                  <Space direction="vertical">
                    <Search
                      placeholder=""
                      onSearch={onSearch}
                      style={{ width: 300, borderRadius: 5, marginTop: 20 }}
                    />
                  </Space>
                </Select>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={3}
                  onChange={onChange}
                  style={{ width: 300, borderRadius: 5, marginTop: 20 }}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DatePicker
                  placeholder="შევსების ბოლო ვადა"
                  style={{ width: 300, borderRadius: 5, marginTop: 20 }}
                />
              </Col>
            </Row>
          </Col>
          <Col span={10}>
            <Row>
              <Col span={24}>
                <div>
                  <h2 className="Vacancy-title">სამუშაო აღწერა</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <TextArea rows={4} />
              </Col>
            </Row>
            <h2 className="Vacancy-title">მატერიალური რესურსები</h2>
            <Row>
              <Col span={12}>
                <Input
                  placeholder="დასახელება"
                  style={{ width: 240, borderRadius: 5, marginTop: 40 }}
                />
              </Col>
              <Col span={12}>
                <InputNumber
                  min={1}
                  max={10}
                  onChange={onChange}
                  placeholder="რაოდენობა"
                  style={{
                    width: 230,
                    borderRadius: 5,
                    marginTop: 40,
                    marginLeft: 10,
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <TextArea
                  rows={4}
                  placeholder="კომენტარი"
                  style={{ width: 600, borderRadius: 5, marginTop: 30 }}
                />
              </Col>
            </Row>
            <Divider />
            <div>
              <h2 className="Vacancy-title">საკონაქტო პირი</h2>
            </div>
            <Row>
              <Col span={12}>
                <Input
                  placeholder="სახელი"
                  style={{ borderRadius: 5, marginTop: 20 }}
                />
              </Col>
              <Col span={12}>
                <Input
                  placeholder="გვარი"
                  style={{ borderRadius: 5, marginTop: 20, marginLeft: 10 }}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Input
                  placeholder="ტლეფონის ნომერი"
                  style={{ borderRadius: 5, marginTop: 20 }}
                />
              </Col>
              <Col span={12}>
                <Input
                  placeholder="მობილურის ნომერი"
                  style={{ borderRadius: 5, marginTop: 20, marginLeft: 10 }}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Input
                  placeholder="მოქმედი ელ-ფოსტა"
                  style={{ borderRadius: 5, marginTop: 20 }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
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
    </div>
  );
};
