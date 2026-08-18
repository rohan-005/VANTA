import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-vanta-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-vanta-surface border border-vanta-border shadow-2xl rounded-sm overflow-hidden z-10 my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-vanta-border bg-vanta-dark">
              <div>
                <h3 id="modal-title" className="text-xl font-display font-bold text-vanta-text-primary uppercase tracking-wide">
                  {title}
                </h3>
                {subtitle && (
                  <p className="font-mono text-xs text-vanta-lime uppercase tracking-widest mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 text-vanta-text-muted hover:text-vanta-lime hover:bg-vanta-elevated rounded-sm transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-vanta-lime"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              {children}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-vanta-border bg-vanta-dark flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-vanta-text-primary bg-vanta-elevated border border-vanta-border hover:border-vanta-border-bright rounded-sm transition-colors"
              >
                [ CLOSE SPECIFICATIONS ]
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
