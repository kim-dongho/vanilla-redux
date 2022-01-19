import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/:id' element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
