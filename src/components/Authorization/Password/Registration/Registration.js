import React, { useState } from 'react';
import './Registration.css';
import { Input, Button } from 'antd';
import { Auth } from '../../Auth';

export const Registration = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      {!click ? (
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
                <a href="https://eservices.rs.ge/login.aspx?oauth=1">
                  <Button type="primary">RS ავტორიზაცია</Button>
                </a>

                <Button onClick={() => setClick(true)}>ავტორიზაცია</Button>
              </div>
            </div>
          </div>
          <div className="news">
            <h2 className="rg-news">სიახლეები</h2>
            <h3>სიახლეები არ მოიძებნა</h3>
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
};
