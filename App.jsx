import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ViewItems from './components/ViewItems';
import AddItemForm from './components/AddItemForm';
import ItemModal from './components/ItemModal';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [view, setView] = useState('view');
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:5000/items');
    setItems(response.data);
  };

  const addItem = async (item) => {
    const response = await axios.post('http://localhost:5000/items', item);
    setItems([...items, response.data]);
    setView('view');
    alert('Item successfully added');
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <Navbar setView={setView} />
      {view === 'view' ? (
        <ViewItems items={items} setModalItem={setModalItem} deleteItem={deleteItem} />
      ) : (
        <AddItemForm addItem={addItem} />
      )}
      {modalItem && <ItemModal item={modalItem} onClose={() => setModalItem(null)} />}
    </div>
  );
};

export default App;
