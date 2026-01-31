import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

export default function Chatbot({
  title = "AI Assistant 🤖",
  prompt = "You are a helpful AI assistant.",
  storageKey = "chatbot_messages",
}) {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [docContext, setDocContext] = useState("");
  const endRef = useRef(null);
  const API_BASE = import.meta.env.VITE_API_URL;

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(messages));
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, storageKey]);

  // 🔊 Text-to-Speech
  const speak = (text) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    window.speechSynthesis.speak(u);
  };

  // 🧾 PDF Extract
  const extractTextFromPDF = async (file) => {
    const buffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map((item) => item.str).join(" ");
    }
    return text;
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          prompt,
          docContext,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply || "No response" },
      ]);

      speak(data.reply);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Backend not responding." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  //clear chat function
  const clearChat = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear the chat?",
    );

    if (!confirmClear) return;

    setMessages([]);
    localStorage.removeItem(storageKey);
  };

  // 🎤 Voice input
  const startVoice = () => {
    const rec = new window.webkitSpeechRecognition();
    rec.lang = "en-US";
    rec.start();
    rec.onresult = (e) => sendMessage(e.results[0][0].transcript);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#09637E] text-white px-4 py-3 flex justify-between items-center">
        <span className="font-semibold">{title}</span>

        <button
          onClick={clearChat}
          className="text-sm bg-white/20 px-3 py-1 rounded-lg hover:bg-white/30 transition"
        >
          Clear
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-100">
        <AnimatePresence>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                m.role === "user"
                  ? "ml-auto bg-[#088395] text-white"
                  : "bg-white text-gray-800 shadow"
              }`}
            >
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && <p className="text-gray-500 text-sm">Typing…</p>}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-white flex gap-2 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 border rounded-xl px-3 py-2"
        />

        <button
          onClick={() => sendMessage(input)}
          className="bg-[#09637E] text-white px-4 rounded-xl"
        >
          Send
        </button>

        <button onClick={startVoice} className="bg-slate-200 px-3 rounded-xl">
          🎤
        </button>

        <input
          type="file"
          accept=".pdf"
          title="Upload PDF"
          onChange={async (e) => {
            const text = await extractTextFromPDF(e.target.files[0]);
            setDocContext(text);
          }}
        />
      </div>
    </div>
  );
}
