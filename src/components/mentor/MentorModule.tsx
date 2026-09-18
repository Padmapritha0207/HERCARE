import React, { useState } from 'react';
import { mockMentor } from '../../data/mockData';
import { 
  UserCheck, 
  MessageSquare, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Briefcase,
  Heart,
  ShieldCheck
} from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

export const MentorModule: React.FC = () => {
  const [messages, setMessages] = useState(mockMentor.initialMessages);
  const [inputText, setInputText] = useState('');
  const [isScheduling, setIsScheduling] = useState(false);
  const [sessionBooked, setSessionBooked] = useState(false);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const newMsg = {
      id: `usr-${Date.now()}`,
      sender: 'user' as const,
      text: inputText,
      timestamp: 'Just now'
    };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');

    setTimeout(() => {
      const mentorReply = {
        id: `men-${Date.now()}`,
        sender: 'mentor' as const,
        text: "That is completely understandable, Priya! When I returned after my first baby, I felt that exact same tension. Let's make sure you book a 20-min session with me next week — I'll share my exact calendar template for pump holds and team standups.",
        timestamp: 'Just now'
      };
      setMessages(prev => [...prev, mentorReply]);
    }, 900);
  };

  const handleBookSession = () => {
    setSessionBooked(true);
    triggerConfetti();
    setTimeout(() => {
      setIsScheduling(false);
      setSessionBooked(false);
    }, 2500);
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto pb-16 text-left">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#200C26] via-[#441B50] to-[#5C246C] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="space-y-3 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6C8F0]/20 text-[#E6C8F0] text-xs font-bold border border-[#E6C8F0]/30">
            <UserCheck className="w-4 h-4 text-[#E6C8F0]" />
            <span>Confidential Peer Mentorship</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Your Return-to-Work Mentor
          </h1>
          <p className="text-xs sm:text-base text-[#DDD4EC] leading-relaxed">
            One-to-one human guidance around workplace transitions, routines, childcare separation, and boundaries from an experienced senior leader who has walked this exact path.
          </p>
        </div>
      </div>

      {/* Mentor Profile Card */}
      <div className="bg-white rounded-3xl border border-[#EBE6DF] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src={mockMentor.avatarUrl}
              alt={mockMentor.name}
              className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl object-cover border-2 border-[#E6C8F0] shadow-xs"
            />
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FAF4FD] border border-[#E6C8F0] text-[#5C246C] text-[11px] font-bold">
                {mockMentor.role}
              </span>
              <h2 className="text-lg sm:text-2xl font-bold text-[#1C1822] mt-1">
                {mockMentor.name}
              </h2>
              <p className="text-xs font-semibold text-[#5A5368]">
                {mockMentor.title} • {mockMentor.company}
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs text-[#756D84]">
                <Briefcase className="w-3.5 h-3.5 text-[#5C246C]" />
                <span>{mockMentor.experience}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsScheduling(true)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#301339] hover:bg-[#441B50] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#E6C8F0]" />
              <span>Schedule 1-on-1 Chat</span>
            </button>
          </div>
        </div>

        <p className="text-xs text-[#5A5368] leading-relaxed bg-[#FAF7F4] p-4 rounded-2xl border border-[#EBE6DF]">
          "{mockMentor.bio}"
        </p>

        {/* Topics */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#1C1822] uppercase tracking-wider">
            Discussion Topics You Can Explore Together:
          </div>
          <div className="flex flex-wrap gap-2">
            {mockMentor.topics.map((t, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-[#FAF4FD] border border-[#E6C8F0] text-[#5C246C] text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Simulated 1-on-1 Chat with Mentor */}
      <div className="bg-white rounded-3xl border border-[#EBE6DF] shadow-xs p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#EBE6DF]/70">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#5C246C]" />
            <span className="font-bold text-[#1C1822] text-xs">Direct Confidential Chat with Ananya</span>
          </div>
          <span className="text-[11px] text-[#265942] font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Online Today
          </span>
        </div>

        <div className="space-y-4 max-h-72 overflow-y-auto pr-2 text-xs">
          {messages.map((m) => (
            <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <div className="text-[10px] text-[#756D84] mb-0.5">
                {m.sender === 'user' ? 'You' : 'Ananya'} • {m.timestamp}
              </div>
              <div className={`p-3.5 rounded-2xl max-w-md leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-[#301339] text-white rounded-tr-none shadow-xs'
                  : 'bg-[#FAF4FD] border border-[#E6C8F0] text-[#2C2635] rounded-tl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            placeholder="Ask Ananya about daycare trials, manager 1-on-1s, pumping tips..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-[#EBE6DF] text-xs text-[#1C1822] placeholder-[#756D84] focus:border-[#5C246C] focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="p-2.5 rounded-xl bg-[#441B50] hover:bg-[#301339] text-white shadow-xs transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Schedule Session Modal */}
      {isScheduling && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#120F16]/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-[#EBE6DF] space-y-4 text-left">
            <h3 className="text-lg font-bold text-[#1C1822]">
              Schedule 1-on-1 Gentle Coffee Chat
            </h3>
            <p className="text-xs text-[#5A5368] leading-relaxed">
              30-minute informal peer session to discuss your return transition schedule, boundaries, and manager alignment.
            </p>

            {sessionBooked ? (
              <div className="p-4 bg-[#F1F8F4] rounded-2xl border border-[#DCEEE4] text-center text-xs text-[#183B2B] font-bold space-y-1">
                <CheckCircle2 className="w-6 h-6 text-[#265942] mx-auto" />
                <div>Session Confirmed for Tuesday, 3:00 PM!</div>
                <div className="text-[11px] font-normal text-[#265942]">Calendar invite sent to your confidential email.</div>
              </div>
            ) : (
              <div className="space-y-3 pt-2 text-xs">
                <div className="space-y-1.5">
                  <label className="font-bold text-[#1C1822]">Select Available Slot:</label>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={handleBookSession}
                      className="p-3 text-left rounded-xl border border-[#EBE6DF] hover:border-[#5C246C] hover:bg-[#FAF4FD] transition-colors font-medium text-[#1C1822] flex items-center justify-between cursor-pointer"
                    >
                      <span>Tuesday, Oct 20 • 3:00 PM – 3:30 PM</span>
                      <span className="font-bold text-[#5C246C]">Select</span>
                    </button>
                    <button
                      onClick={handleBookSession}
                      className="p-3 text-left rounded-xl border border-[#EBE6DF] hover:border-[#5C246C] hover:bg-[#FAF4FD] transition-colors font-medium text-[#1C1822] flex items-center justify-between cursor-pointer"
                    >
                      <span>Thursday, Oct 22 • 11:00 AM – 11:30 AM</span>
                      <span className="font-bold text-[#5C246C]">Select</span>
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setIsScheduling(false)}
                    className="px-4 py-2 rounded-xl text-[#756D84] hover:text-[#1C1822] font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

