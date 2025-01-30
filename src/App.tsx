import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MessageCircle, Mail } from 'lucide-react';
import Chat from './components/Chat';
import Email from './components/Email';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <Link 
                  to="/" 
                  className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat
                </Link>
                <Link 
                  to="/email" 
                  className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/email" element={<Email />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;