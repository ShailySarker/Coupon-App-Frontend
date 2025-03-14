import React from 'react';
import Routers from './routes/Routers';
import { BrowserRouter } from 'react-router';

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export default App;