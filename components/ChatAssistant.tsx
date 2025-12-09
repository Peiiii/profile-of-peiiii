import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Terminal, Minus, Maximize2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';
import { useLanguage } from '../context/LanguageContext';

const ChatAssistant: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  // Initialize welcome message only once or when language changes if we want to reset (optional)
  // Here we just set it if empty.
  useEffect(() => {
    if (messages.length === 0) {
       setMessages([{
        id: 'init',
        text: t.chat.init,
        sender: ChatSender.AI,
        timestamp: Date.now()
      }]);
    }
  }, [t.chat.init]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: ChatSender.USER,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const history = messages.map(m => ({
        role: m.sender === ChatSender.USER ? 'user' : 'model',
        content: m.text
      }));

      const responseText = await sendMessageToGemini(userMsg.text, history);

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: ChatSender.AI,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat Error", error);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-black border border-primary text-primary hover:bg-primary hover:text-black transition-all p-3 shadow-[4px_4px_0px_0px_rgba(0,255,65,0.3)] hover:translate-y-1 hover:shadow-none font-mono text-xs font-bold flex items-center gap-2 group"
      >
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:bg-black"></span>
        {t.chat.open}
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-md flex flex-col items-end">
      <div className="w-full bg-black border border-dim shadow-2xl overflow-hidden flex flex-col h-[500px]">
        {/* Terminal Header */}
        <div className="bg-surfaceHighlight p-2 flex justify-between items-center border-b border-dim select-none cursor-move">
          <div className="flex items-center gap-2 px-2">
            <Terminal size={14} className="text-primary" />
            <span className="text-xs text-dim font-mono">{t.chat.title}</span>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 text-dim hover:text-white"><Minus size={14} /></button>
            <button className="p-1 hover:bg-white/10 text-dim hover:text-white"><Maximize2 size={12} /></button>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-red-500/20 text-dim hover:text-red-500"><X size={14} /></button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs bg-black/90">
          {messages.map((msg) => (
            <div key={msg.id} className="flex flex-col gap-1">
              <div className={`flex items-center gap-2 ${msg.sender === ChatSender.AI ? 'text-primary' : 'text-secondary'}`}>
                <span>{msg.sender === ChatSender.AI ? 'root@ai-core:~$' : 'guest@web:~$' }</span>
              </div>
              <div className="text-neutral-300 pl-4 whitespace-pre-wrap leading-relaxed">
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex flex-col gap-1">
                <div className="text-primary">root@ai-core:~$</div>
                <div className="text-dim pl-4 animate-pulse">{t.chat.computing}</div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Line */}
        <div className="p-3 bg-black border-t border-dim flex gap-2 items-center">
            <span className="text-secondary font-mono text-xs">{'>'}</span>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                autoFocus
                className="flex-1 bg-transparent border-none focus:ring-0 text-white font-mono text-xs placeholder-dim"
                placeholder={t.chat.placeholder}
            />
            <button onClick={handleSend} disabled={!inputValue.trim()} className="text-dim hover:text-primary">
                <Send size={14} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
