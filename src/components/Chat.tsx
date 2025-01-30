import React, { useState } from 'react';
import { Send, User } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
    { id: 2, text: "I have a question about the service.", sender: "user" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg h-[600px] flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Chat</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                {message.sender === 'user' ? (
                  <User className="h-4 w-4" />
                ) : (
                  <div className="h-4 w-4 rounded-full bg-green-500" />
                )}
                <span className="text-sm font-medium">
                  {message.sender === 'user' ? 'You' : 'Assistant'}
                </span>
              </div>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="p-4 border-t bg-gray-50">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;