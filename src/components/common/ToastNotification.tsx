import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const ToastNotification: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300 pointer-events-none">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#200C26] text-white shadow-2xl border border-white/15 text-xs font-medium backdrop-blur-md">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
