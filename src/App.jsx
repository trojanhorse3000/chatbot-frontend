import axios from 'axios';
import './App.css'
import { useState } from 'react';

function App() {
  
  const BaseURL = "https://chatbot-backend-greh.onrender.com"

  const [promptText, setPromptText] = useState('');//Use 
  const [responseText, setResponseText] = useState('');//Use :
  function handleChange(event) {
    setPromptText(event.target.value);
  }


  async function handleclick() {
   const response = await axios.post(
  `${BaseURL}/generate`,
  { text: promptText }
);
    setResponseText(response.data.response);
}
  return (
    <div className="container">
      <h1>Chatbot</h1>
      <textarea placeholder="Enter thePrompt" onChange={handleChange} />
      <button onClick={handleclick}>Generate</button>
      <p className="response-box">{responseText}</p>
    </div>
  );
}

export default App