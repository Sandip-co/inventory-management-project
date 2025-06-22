import React from 'react';

const ViewItems = ({ items, setModalItem, deleteItem }) => (
  <div className="grid-container">
    {items.map(item => (
      <div key={item.id} className="item-card">
        <img src={item.coverImage} alt={item.name} />
        <h3>{item.name}</h3>
        <button onClick={() => setModalItem(item)}>View</button>
        <button onClick={() => deleteItem(item.id)} className="delete-btn">Delete</button>
      </div>
    ))}
  </div>
);

export default ViewItems;
