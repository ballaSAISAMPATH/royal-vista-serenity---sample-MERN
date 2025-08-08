// src/components/ChatbotWidget.jsx

"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-[99]">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-luxury-gold shadow-xl text-black transition-transform duration-300 transform hover:scale-110"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`bg-gray-900 shadow-xl rounded-lg w-80 h-96 fixed bottom-20 left-4 transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-4 invisible"
        }`}
      >
        <div className="bg-black text-luxury-gold p-4 rounded-t-lg font-bold">
          Chat with us!
        </div>
        <div className="p-4 h-[calc(100%-64px)] overflow-y-auto flex flex-col space-y-4">
          {/* Chat messages */}
          <div className="flex justify-start">
            <div className="bg-luxury-gold/10 text-luxury-cream p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">Welcome to our luxury resort! How can I assist you today? 🛎️</p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-luxury-gold text-black p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">I'd like to book a room. Can you tell me about the suites available? 💎</p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-luxury-gold/10 text-luxury-cream p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">We have several stunning options! Our Royal Suite offers a panoramic sea view. Would you like to know more? ✨</p>
            </div>
          </div>

          {/* Chat input field */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-900 border-t border-luxury-gold/20">
            <input 
              type="text"
              placeholder="Type your message..."
              className="w-full bg-transparent text-luxury-cream border-b-2 border-luxury-gold/50 focus:outline-none focus:border-luxury-gold placeholder-luxury-cream/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWidget;