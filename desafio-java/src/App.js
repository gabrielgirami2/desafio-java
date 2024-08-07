import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const handleSave = () => {
    // Lógica para salvar as mudanças
    console.log('Changes saved:', { name, username });
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit profile</h2>
      <p>Make changes to your profile here. Click save when you're done.</p>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button className="save-button" onClick={handleSave}>
        Save changes
      </button>
    </div>
  );
};

export default App;
