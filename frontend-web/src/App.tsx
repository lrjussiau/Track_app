import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Message {
  message: string;
}

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    axios.get<Message>('http://localhost:3000/api')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching message:', error);
        setMessage('Error fetching message from the server');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to our React + TypeScript Frontend</h1>
        <p>Message from the server: {message}</p>
      </header>
    </div>
  );
}

export default App;