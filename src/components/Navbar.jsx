import React from 'react';

const Navbar = ({ setView }) => (
  <nav className="navbar">
    <h2>Inventory Management</h2>
    <div>
      <button onClick={() => setView('view')}>View Items</button>
      <button onClick={() => setView('add')}>Add Items</button>
    </div>
  </nav>
);

export default Navbar;
