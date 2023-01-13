/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Context } from './context/Context';

import TopBar from './components/topBar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {
  const { user } = React.useContext(Context);
  return (
    <main>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </main>
  );
}

export default App;
