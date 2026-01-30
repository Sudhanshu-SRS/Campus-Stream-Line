import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "./ChatBot";

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[99999] bg-[#09637E] text-white p-4 rounded-full shadow-xl hover:scale-105 transition"
      >
        🤖
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="
              fixed bottom-24 right-6
              z-[99999]
              w-[380px] h-[520px]
              max-w-[90vw] max-h-[90vh]
              bg-transparent
            "
          >
            <div className="relative h-full">
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-3 -right-3 z-100000 bg-red-500 text-white w-8 h-8 rounded-full shadow"
              >
                ✕
              </button>

              <ChatBot
                title="Institute AI Assistant 🎓"
                prompt="You are an AI assistant for a college. Help students with admissions, exams, hostel, documents, and placements."
                storageKey="floating_institute_chat"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
