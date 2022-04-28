import React from 'react';
import { Link } from 'react-router-dom';
import FAQICON from '../../images/FAQ.svg';
import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import './Header.css';
export const Header = () => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
        },
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          danger: true,
          label: 'a danger item',
        },
      ]}
    />
  );

  return (
    <header className="header">
      <ul className="header-ul">
        <div className="FAQ-wrapper">
          <li>
            <Link className="FAQ-link" to="#">
              <i
                _ngcontent-ksd-c44=""
                class="pi pi-info-circle px-2"
                style={{ color: 'white' }}
              ></i>
              <img
                style={{ width: '16px', height: '16px' }}
                src={FAQICON}
                width="auto"
                height="auto"
              />
              <Link to="/questions" className="FAQ-text">
                {' '}
                ხშირად დასმული შეკითხვები
              </Link>
            </Link>
          </li>
        </div>
        <div className="menu-wrapper">
          <li>
            <Link className="ul-link" to="#">
              ვაკანსიები
            </Link>
          </li>
          <li>
            <Link className="ul-link" to="#">
              ბენეფიციარები
            </Link>
          </li>
          <li>
            <Link className="ul-link" to="#">
              ტაბელი
            </Link>
          </li>
          <li>
            <Link className="ul-link" to="#">
              ორგანიზაციის სახელი
            </Link>
          </li>
        </div>
      </ul>
    </header>
  );
};
