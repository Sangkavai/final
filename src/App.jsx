import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontend from './components/form';
import SuccessPage from './components/success';

const App = () => {
  return (
    <Router>
      <div>
        

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Frontend />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
