import React from 'react';
import Products from './Products';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href='/Products'>Products</a>
        <a className="navbar-brand" href='/ContactUs'>ContactUs</a>
      </nav>
      <Products />
    </div>
  );
}

export default App;
