import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';
import * as path from '../../constants/paths';
export const MainMenu = () => {
  return (
    <div className="main-menu-wrapper">
      <div className="main-menu-item">
        <h1>
          <Link className="menu-item-link" to={path.VACANCY_PATH}>
            ვაკანსიები
          </Link>
        </h1>
      </div>
      <div className="main-menu-item">
        <h1>
          <Link className="menu-item-link" to="#">
            ბენეფიციარები
          </Link>
        </h1>
      </div>
      <div className="main-menu-item">
        <h1>
          <Link className="menu-item-link" to="#">
            ტაბელი
          </Link>
        </h1>
      </div>
    </div>
  );
};
