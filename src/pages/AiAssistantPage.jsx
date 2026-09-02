import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Bot, 
  Send, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  Lightbulb, 
  User, 
  RefreshCw,
  Code,
  Zap
} from 'lucide-react';

export const AiAssistantPage = () => {
  const { aiMessages, setAiMessages } = useApp();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const suggestedPrompts = [
    'Explain Fourier Transforms in simple intuitive steps.',
    'Create 5 practice questions for Organic Chemistry II.',
    'How do I calculate derivative shortcuts in Calculus III?',
    'Give me a 3-day study roadmap for Quantum Physics exam.'
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [aiMessages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMessages = [...aiMessages, { sender: 'user', text: query }];
    setAiMessages(newMessages);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI response response delay
    setTimeout(() => {
      let botReply = `Here is an academic breakdown for your question regarding "${query}":\n\n1. **Core Concept Overview**: This topic relies on foundational principles from your Semester 2 coursework.\n2. **Step-by-Step Breakdown**: Focus on the key formulas and standard exercise patterns.\n3. **Recommended Next Steps**: Review Chapter 4 practice problems or start a 25-minute Pomodoro session in Focus Mode.`;
      
      if (query.toLowerCase().includes('calculus') || query.toLowerCase().includes('fourier')) {
        botReply = `### Calculus & Engineering Concept Guide 📐\n\nTo master **${query}**:\n- **Definition**: Transform continuous equations into frequency or derivative representations.\n- **Key Formula**: \\( f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} \\)\n- **Exam Tip**: Dr. Vance often includes derivative chain rule problems on midterms. Make sure to double-check boundary conditions!`;
      } else if (query.toLowerCase().includes('chemistry') || query.toLowerCase().includes('organic')) {
        botReply = `### Organic Chemistry Flashcards 🧪\n\n1. **Q**: What is electrophilic addition?\n   **A**: A reaction where a pi bond is broken and two new sigma bonds are formed.\n2. **Q**: How does solvent polarity affect SN1 vs SN2?\n   **A**: Polar protic solvents favor SN1; polar aprotic solvents favor SN2.`;
      }

      setAiMessages([...newMessages, { sender: 'assistant', text: botReply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col rounded-2xl bg-[#1b1b1d] border border-white/5 overflow-hidden animate-slide-up">
      {/* Top Banner */}
      <div className="p-4 md:p-6 bg-[#201f21] border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#7b5cff]/20 text-[#cabeff] border border-[#7b5cff]/40 flex items-center justify-center font-bold">
            <Bot className="w-6 h-6 text-[#49fbeb]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-extrabold text-white font-['Hanken_Grotesk']">
                AI Academic Assistant
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-[#bdf532]/15 text-[#bdf532] text-[10px] font-bold">
                GPT-4o Academic Model
              </span>
            </div>
            <p className="text-xs text-gray-400 font-['Geist']">
              Context-aware homework helper, flashcard generator & study advisor
            </p>
          </div>
        </div>

        <button
          onClick={() => setAiMessages([{ sender: 'assistant', text: 'Conversation reset. What concept would you like to study next?' }])}
          className="px-3 py-1.5 rounded-xl bg-[#131315] text-gray-400 hover:text-white border border-white/5 text-xs flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Clear Chat
        </button>
      </div>

      {/* Suggested Quick Prompts */}
      <div className="p-3 bg-[#131315]/40 border-b border-white/5 overflow-x-auto flex items-center gap-2">
        <span className="text-[11px] font-bold text-gray-400 font-['Geist'] whitespace-nowrap flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#49fbeb]" /> Quick Prompts:
        </span>
        {suggestedPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-3 py-1 rounded-lg bg-[#201f21] border border-white/10 text-xs text-gray-300 hover:text-[#bdf532] hover:border-[#bdf532]/40 whitespace-nowrap transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {aiMessages.map((msg, idx) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={idx}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  isUser 
                    ? 'bg-[#bdf532] text-[#131315]' 
                    : 'bg-[#7b5cff]/20 text-[#49fbeb] border border-[#7b5cff]/40'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-2xl p-4 rounded-2xl text-xs md:text-sm font-['Inter'] leading-relaxed whitespace-pre-wrap ${
                  isUser
                    ? 'bg-[#bdf532] text-[#131315] font-semibold rounded-tr-none shadow-[0_0_15px_rgba(189,245,50,0.2)]'
                    : 'bg-[#201f21] text-gray-200 border border-white/10 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#7b5cff]/20 text-[#49fbeb] border border-[#7b5cff]/40 flex items-center justify-center">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="px-4 py-3 rounded-2xl bg-[#201f21] text-xs text-gray-400 border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#bdf532] animate-ping" />
              AI Assistant is thinking...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="p-4 bg-[#201f21] border-t border-white/5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI a question about your subjects, equations, or exam topics..."
            className="flex-1 bg-[#131315] border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#bdf532]"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-[#bdf532] text-[#131315] font-extrabold text-xs hover:bg-[#a2d801] transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(189,245,50,0.25)]"
          >
            <span>Send</span>
            <Send className="w-4 h-4 stroke-[2.5]" />
          </button>
        </form>
      </div>
    </div>
  );
};
