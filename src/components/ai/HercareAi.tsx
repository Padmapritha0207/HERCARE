import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { getAiResponseForQuery, AiResponseData } from '../../data/aiResponses';
import { 
  Bot, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  UserCheck, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  Info,
  Calendar,
  Gift,
  HelpCircle
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  responseObj?: AiResponseData;
  timestamp: string;
}

export const HercareAi: React.FC = () => {
  const { 
    user, 
    preloadedAiPrompt, 
    setPreloadedAiPrompt, 
    setActiveTab, 
    setSelectedBenefit, 
    setSelectedProfessional, 
    benefits, 
    professionals
  } = useApp();

  const [inputQuery, setInputQuery] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: `Hello ${user.name}! I am HERCARE AI, your **care navigator — not your AI doctor**.\n\nI help you structure manager conversations, understand Acme leave policies, organize doctor questions, and connect with licensed specialists. What would you like to prepare today?`,
      timestamp: 'Just now'
    }
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "What should I discuss with my manager before returning to work?",
    "How can I prepare for pumping at work?",
    "What workplace benefits should I check?",
    "Help me create questions for my gynecologist.",
    "I've been feeling overwhelmed, exhausted, and anxious since birth"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (preloadedAiPrompt) {
      handleSendMessage(preloadedAiPrompt);
      setPreloadedAiPrompt('');
    }
  }, [preloadedAiPrompt]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const responseData = getAiResponseForQuery(query);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseData.summary,
        responseObj: responseData,
        timestamp: 'Just now'
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleActionClick = (action?: AiResponseData['suggestedAction']) => {
    if (!action) return;
    if (action.type === 'nav_benefits') {
      if (action.targetId) {
        const b = benefits.find(item => item.id === action.targetId);
        if (b) setSelectedBenefit(b);
      }
      setActiveTab('benefits');
    } else if (action.type === 'nav_care') {
      if (action.targetId) {
        const p = professionals.find(item => item.id === action.targetId);
        if (p) setSelectedProfessional(p);
      }
      setActiveTab('care');
    } else if (action.type === 'nav_bridge') {
      setActiveTab('bridge');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16 text-left">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#301339] via-[#441B50] to-[#200C26] text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5C246C]/60 text-[#E6C8F0] text-[11px] font-bold border border-[#76308A]/50">
              <Bot className="w-3.5 h-3.5 text-[#D09DE0]" />
              <span>NAVIGATOR • NOT AN AI DOCTOR</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              HERCARE AI
            </h1>
            <p className="text-xs sm:text-sm text-[#DDD4EC] max-w-xl leading-relaxed">
              Your care navigator — helping you understand options, navigate company benefits, draft manager scripts, and prepare for professional care consultations.
            </p>
          </div>

          {/* AI Loop Badge */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-xs space-y-1.5 flex-shrink-0">
            <div className="font-bold text-[#D09DE0] uppercase text-[10px] tracking-wider">
              Care Navigator Protocol
            </div>
            <div className="flex items-center gap-1 font-mono text-[11px] text-white">
              <span>Understand</span> → <span>Guide</span> → <span>Recommend</span> → <span>Refer</span> → <span>Prepare</span>
            </div>
          </div>
        </div>
      </div>

      {/* Safety & Non-Diagnostic Notice */}
      <div className="p-3.5 rounded-2xl bg-[#FDF5ED] border border-[#FBEAD7] text-[#7D4C16] text-xs flex items-center gap-3">
        <Info className="w-4 h-4 text-[#B26F25] flex-shrink-0" />
        <span>
          <strong>Clinical Safety Boundary:</strong> HERCARE AI does not diagnose illnesses or replace doctors. Medical and mental health symptoms trigger direct referrals to verified licensed clinicians.
        </span>
      </div>

      {/* Suggested Prompt Pills */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold text-[#756D84] uppercase tracking-wider">
          Suggested Care Navigator Questions
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestedPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p)}
              className="px-3 py-1.5 rounded-xl bg-white border border-[#EBE6DF] text-xs font-medium text-[#413B4D] hover:border-[#B268C6] hover:bg-[#FAF4FD] hover:text-[#441B50] transition-all text-left shadow-xs cursor-pointer"
            >
              💬 {p}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="bg-white rounded-3xl border border-[#EBE6DF] shadow-sm p-4 sm:p-6 min-h-[440px] flex flex-col justify-between">
        <div className="space-y-6 overflow-y-auto max-h-[520px] pr-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className="flex items-center gap-2 mb-1 text-[11px] text-[#756D84]">
                <span>{msg.sender === 'user' ? user.name : 'HERCARE AI Navigator'}</span>
                <span>•</span>
                <span>{msg.timestamp}</span>
              </div>

              {/* Message Bubble / Structured Response Card */}
              {msg.sender === 'user' ? (
                <div className="max-w-xl rounded-2xl p-4 bg-[#301339] text-white text-xs sm:text-sm leading-relaxed rounded-tr-none shadow-xs">
                  {msg.text}
                </div>
              ) : (
                <div className="w-full max-w-2xl rounded-3xl p-5 bg-[#FAF7F4] border border-[#E2D9CE] text-[#2C2635] text-xs sm:text-sm leading-relaxed space-y-4 shadow-xs">
                  {/* Card Header with Protocol Stage */}
                  {msg.responseObj && (
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#EBE6DF]">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#EDE7F6] text-[#441B50] font-bold text-[10px] uppercase tracking-wider">
                        Care Loop: {msg.responseObj.loopStage}
                      </span>
                      {msg.responseObj.isMedicalEscalation ? (
                        <span className="px-2.5 py-0.5 rounded-md bg-[#FAE4E9] text-[#944D5D] font-bold text-[10px] flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> Medical Escalation Referral
                        </span>
                      ) : (
                        <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> 100% Confidential
                        </span>
                      )}
                    </div>
                  )}

                  {/* Summary / Core Content */}
                  <div className="whitespace-pre-wrap text-xs sm:text-sm text-[#2C2635] leading-relaxed">
                    {msg.responseObj ? msg.responseObj.markdownContent : msg.text}
                  </div>

                  {/* STRUCTURED SECTION 1: Actionable Checklist / Next Steps */}
                  {msg.responseObj?.actionableChecklist && (
                    <div className="p-4 bg-white rounded-2xl border border-[#EBE6DF] space-y-2">
                      <div className="font-bold text-[#1C1822] text-xs uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#265942]" />
                        <span>Recommended Action Checklist</span>
                      </div>
                      <div className="space-y-1.5">
                        {msg.responseObj.actionableChecklist.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[#413B4D]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5C246C]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STRUCTURED SECTION 2: Medical Referral Card if triggered */}
                  {msg.responseObj?.medicalReferral && (
                    <div className="p-4 bg-[#FDF4F6] rounded-2xl border border-[#F2C7D1] text-xs space-y-3">
                      <div className="font-bold text-[#61333D] flex items-center gap-2">
                        <HeartHandshake className="w-4 h-4 text-[#944D5D]" />
                        <span>Recommended Licensed Specialist Consultation</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#F2C7D1]">
                        <img
                          src={msg.responseObj.medicalReferral.avatarUrl}
                          alt={msg.responseObj.medicalReferral.professionalName}
                          className="w-11 h-11 rounded-full object-cover border border-[#D09DE0]"
                        />
                        <div>
                          <div className="font-bold text-[#1C1822] text-xs">{msg.responseObj.medicalReferral.professionalName}</div>
                          <div className="text-[11px] text-[#756D84]">{msg.responseObj.medicalReferral.role}</div>
                          <div className="text-[10px] text-[#265942] font-semibold mt-0.5">8 Free Sessions via Acme EAP</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STRUCTURED SECTION 3: 1-Click Action Button */}
                  {msg.responseObj?.suggestedAction && (
                    <div className="pt-2">
                      <button
                        onClick={() => handleActionClick(msg.responseObj?.suggestedAction)}
                        className="px-5 py-2.5 rounded-xl bg-[#441B50] hover:bg-[#301339] text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                      >
                        <span>{msg.responseObj.suggestedAction.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-[#756D84] italic">
              <Bot className="w-4 h-4 text-[#5C246C] animate-pulse" />
              <span>HERCARE AI is structuring navigation guidance...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="pt-4 border-t border-[#EBE6DF] flex items-center gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            placeholder="Ask about manager prep, pumping schedules, Acme benefits, doctor visits..."
            className="flex-1 px-4 py-3 rounded-2xl border border-[#EBE6DF] bg-[#FAF7F4] focus:bg-white focus:border-[#5C246C] focus:outline-none text-xs sm:text-sm text-[#1C1822]"
          />
          <button
            onClick={() => handleSendMessage()}
            className="p-3 rounded-2xl bg-[#301339] hover:bg-[#441B50] text-white shadow-sm transition-colors cursor-pointer"
            aria-label="Send query"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
