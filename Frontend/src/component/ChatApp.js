import React, { useState, useRef } from 'react';
import '../styles/ChatApp.css';
import { Navbar } from '../layout/Navbar';
import { TopBar } from '../layout/Topbar';

const initialChats = [
  {
    id: 1,
    name: 'vignesh',
    messages: [
      { from: 'vignesh', text: 'hi sir', time: '1 week ago' },
      { from: 'me', text: 'hi da', time: '1 week ago' },
    ],
  },
  {
    id: 2,
    name: 'sreeram',
    messages: [],
  },
];

const ChatApp = () => {
  const [chats, setChats] = useState(initialChats);
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');
  const fileInputRef = useRef(null);

  const selectedChat = chats.find(chat => chat.id === selectedChatId);

  const handleSend = () => {
    if (message.trim()) {
      const updatedChats = chats.map(chat => {
        if (chat.id === selectedChatId) {
          return {
            ...chat,
            messages: [...chat.messages, { from: 'me', text: message, time: 'now' }],
          };
        }
        return chat;
      });
      setChats(updatedChats);
      setMessage('');
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleSend(`[Attachment: ${file.name}]`);
    }
  };

  const filteredChats = chats.filter(chat => chat.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <Navbar />
      <TopBar />
      <div className="chat-container">
        {/* Sidebar */}
        <div className="chat-sidebar">
          <div className="chat-search">
            <h3>Chat</h3>
            <input type="text" placeholder="Search People" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          {filteredChats.map(chat => (
            <div
              key={chat.id}
              className={`chat-user ${chat.id === selectedChatId ? 'active' : ''}`}
              onClick={() => setSelectedChatId(chat.id)}
            >
              <div className="avatar" />
              <div>
                <div className="username">{chat.name}</div>
                <div className="last-msg">{chat.messages.slice(-1)[0]?.text || 'No messages'}</div>
              </div>
              <div className="timestamp">{chat.messages.slice(-1)[0]?.time || ''}</div>
            </div>
          ))}
        </div>

        {/* Chat Window */}
        <div className="chat-window">
          <div className="chat-header">
            <div className="avatar" />
            <div className="chat-user-info">
              <div className="username">{selectedChat?.name}</div>
              <div className="status">Offline</div>
            </div>
          </div>

          <div className="chat-messages">
            {selectedChat?.messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.from === 'me' ? 'right' : 'left'}`}>
                <div className="bubble">{msg.text}</div>
                <div className="time">{msg.time} ✓✓</div>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="attachment-btn" onClick={() => fileInputRef.current.click()}>📎</button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileSelect}
            />
            <button className="send-btn" onClick={handleSend}>➤</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
