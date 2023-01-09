/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/topBar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {
  return (
    <main>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Single />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
  );
}

export default App;
