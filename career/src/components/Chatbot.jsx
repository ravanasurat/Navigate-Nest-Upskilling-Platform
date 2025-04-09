import React, { useState, useEffect, useRef } from "react";
import { sendMessage } from "../utils/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botReply = await sendMessage(input);
    const botMessage = { sender: "bot", text: botReply };

    setMessages((prev) => [...prev, botMessage]);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900 text-white">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-3 rounded-lg max-w-[90%] ${
              msg.sender === "user"
                ? "ml-auto bg-blue-600 text-white"
                : "mr-auto bg-gray-700 text-gray-200"
            }`}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
          </motion.div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      
      <div className="p-3 border-t border-gray-700 bg-gray-800 flex">
        <input
          type="text"
          className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none text-white"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="ml-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;