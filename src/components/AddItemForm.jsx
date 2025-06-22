import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [form, setForm] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    additionalImages: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...form,
      additionalImages: form.additionalImages.split(','),
    };
    addItem(newItem);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
      <input placeholder="Type" value={form.type} onChange={(e) => setForm({...form, type: e.target.value})} required />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} required />
      <input placeholder="Cover Image URL" value={form.coverImage} onChange={(e) => setForm({...form, coverImage: e.target.value})} required />
      <input placeholder="Additional Images (comma separated URLs)" value={form.additionalImages} onChange={(e) => setForm({...form, additionalImages: e.target.value})} />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
