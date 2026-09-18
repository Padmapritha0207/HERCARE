import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-2xl'
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#120F16]/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className={`relative w-full ${maxWidth} bg-white rounded-3xl shadow-2xl border border-[#EBE6DF] overflow-hidden transform transition-all z-10 my-4 sm:my-8 max-h-[92vh] flex flex-col`}>
        {/* Header */}
        {(title || subtitle) && (
          <div className="flex items-start justify-between p-5 sm:p-6 border-b border-[#EBE6DF]/70 bg-[#FAF7F4]">
            <div className="text-left pr-4">
              {title && <h3 className="text-lg sm:text-xl font-bold text-[#1C1822]">{title}</h3>}
              {subtitle && <p className="text-xs text-[#756D84] mt-1 leading-relaxed">{subtitle}</p>}
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#756D84] hover:text-[#1C1822] rounded-xl hover:bg-[#FAF4FD] transition-colors cursor-pointer flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto scrollbar-none">
          {children}
        </div>
      </div>
    </div>
  );
};
