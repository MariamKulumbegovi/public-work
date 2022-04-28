import React from 'react';
import './Registration.css';
import { Input, Button } from 'antd';

export const Registration = () => {
  return (
    <div className="auth-container">
      <div className="input-field">
        <h2 className="auth">რეგისტრაცია</h2>
        <div>
          <span className="system">
            სისტემაში შესასვლელად შეიყვანეთRS.ge-ის <br />
            მომხმარებელი და პაროლი
          </span>
          <br />
        </div>
        <div className="registration">
          <div className="path">
            <Button type="primary">RS ავტორიზაცია</Button>
            <h2>ავტორიზაცია</h2>
          </div>
        </div>
      </div>
      <div className="news">
        <h2 className='rg-news'>სიახლეები</h2>
        <h3>სიახლეები არ მოიძებნა</h3>
      </div>
    </div>
  );
};
