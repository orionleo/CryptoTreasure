

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate,Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {Navbar,Exchanges,CryptoDetails,Cryptocurrencies,Homepage,Loader,News } from './components';
import "./App.css"
const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
    <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/exchanges" exact element={<Exchanges />} />
            <Route path="/cryptocurrencies" exact element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" exact element={<CryptoDetails />} />
            <Route path="/news" exact element={<News />} />
            <Route path="/" exact element={<Homepage />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © {new Date().getFullYear()} &nbsp; 
          <Link to="/">
            Digital Treasure Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;