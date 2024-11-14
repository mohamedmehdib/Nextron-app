"use client";

// src/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      // API request to Gemini via Google Cloud's PaLM API
      const response = await axios.post("https://your-google-gemini-endpoint", {
        instances: [{ content: input }],
        parameters: {
          temperature: 0.7,
          maxOutputTokens: 50,
        },
      }, {
        headers: {
          Authorization: `Bearer AIzaSyDIVqja2gpDHiQE63v7kziLgCqnZrpEV2g`,
          "Content-Type": "application/json",
        },
      });

      const botMessage = {
        sender: "bot",
        text: response.data.predictions[0].content,
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages(prevMessages => [...prevMessages, { sender: "bot", text: "Oops, something went wrong!" }]);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ height: "400px", overflowY: "scroll", border: "1px solid #ccc", padding: "10px" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <p><strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "10px", fontSize: "16px" }}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} style={{ padding: "10px", fontSize: "16px" }}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
