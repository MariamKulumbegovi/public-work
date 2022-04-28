import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Header } from '../Header/Header';
import { Routes } from '../../Routes';

export const Home = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};
