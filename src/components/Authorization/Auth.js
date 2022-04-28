import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './Auth.css';
import * as path from '../../constants/paths';
import { Registration } from './Password/Registration/Registration';

export const Auth = () => {
  const [registration, setRegistration] = useState(false);

  return (
    <>
      {!registration ? (
        <div className="auth-container">
          <div className="input-field">
            <h2 className="auth">ავტორიზაცია</h2>
            <div>
              <Input placeholder="მომხმარებელი" />
              <br></br>
            </div>
            <div>
              <Input.Password placeholder="პაროლი" />
              {visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              <Link className="password" to={path.FORGOT_PASSWORD}>
                დაგავიწყდათ პაროლი
              </Link>
            </div>

            <div className="registration">
              <div className="path">
                <Button type="primary" onClick={() => setRegistration(true)}>
                  რეგისტრაცია
                </Button>
                <br></br>
                <a className="a2" href="#">
                  სააგენტოს ავტორიზაცია
                </a>
              </div>
              <div>
                <Button type="primary">შესვლა</Button>
              </div>
            </div>
          </div>
          <div className="news">
            <h2>სიახლეები</h2>
            <h3>სიახლეები არ მოიძებნა</h3>
          </div>
        </div>
      ) : (
        <Registration />
      )}
    </>
  );
};
