import React, { useState } from 'react';
const host = process.env.NODE_ENV === 'development' ? "http://localhost:5000" : "https://18.212.177.98:5000"

const App = () => {
  const [name, setName] = useState('World')

  const getName = async() => {
    const data = await fetch(`${host}/api`).then(res => res.json())
    setName(data.name)
  }

  return <div>
    <h1>Hello {name}</h1>
    <button onClick={getName}>Get Name</button>
  </div>;
};

export default App;
