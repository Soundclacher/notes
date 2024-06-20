import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import AlertState from './context/alert/AlertState';


function App() {
  return (
    <>
      <AlertState>
        <Navbar />
        <div className="container pt-4">
          <Alert />
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/about'} element={<About />} />
          </Routes>
        </div>
      </AlertState>

    </>
  );
}

export default App;
