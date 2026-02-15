import { useState, useEffect } from 'react';
import './App.css';

const AI_QUOTES = [
  "AI is not about replacing humans, it's about augmenting human potential.",
  "The future belongs to those who can think in systems.",
  "Data is the new oil, but algorithms are the refinery.",
  "Intelligence is pattern recognition at scale.",
  "Every great AI breakthrough starts as a crazy idea.",
  "Latency is a feature, not a bug.",
  "The best model is the one you can deploy.",
  "Complexity is the enemy of understanding.",
  "Train on yesterday's data, predict tomorrow.",
  "In the age of AI, creativity becomes the ultimate differentiator.",
  "Gradient descent: the philosophy of continuous improvement.",
  "Vector spaces are where meaning lives.",
  "The singularity is not a destination, it's a process.",
  "Tokenization is the art of breaking down thought.",
  "Scale changes everything.",
];

function App() {
  const [quote, setQuote] = useState(AI_QUOTES[0]);
  const [timeLeft, setTimeLeft] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  // 生成隨機金句
  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * AI_QUOTES.length);
    setQuote(AI_QUOTES[randomIndex]);
  };

  // 計算到埃及旅行的倒數
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-10-01T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft('旅行開始了！🚀');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(`${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <h1 className={`text-4xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent`}>
          ✨ Vibe Dashboard
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-full font-semibold transition ${
            darkMode
              ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
              : 'bg-slate-900 text-yellow-400 hover:bg-slate-800'
          }`}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
        {/* Quote Section */}
        <div className={`max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-lg border transition ${
          darkMode
            ? 'bg-white/10 border-purple-500/30 hover:bg-white/20'
            : 'bg-white/40 border-purple-300/50 hover:bg-white/50'
        }`}>
          <div className="text-center mb-8">
            <p className={`text-3xl font-bold mb-6 leading-relaxed ${
              darkMode ? 'text-purple-100' : 'text-gray-800'
            }`}>
              "{quote}"
            </p>
            <button
              onClick={generateQuote}
              className={`px-8 py-3 rounded-full font-bold text-lg transition transform hover:scale-105 active:scale-95 ${
                darkMode
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-600/50'
              }`}
            >
              💡 新靈感
            </button>
          </div>
        </div>

        {/* Countdown Section */}
        <div className={`max-w-2xl mx-auto mt-12 p-8 rounded-2xl backdrop-blur-lg border transition ${
          darkMode
            ? 'bg-white/10 border-blue-500/30'
            : 'bg-white/40 border-blue-300/50'
        }`}>
          <div className="text-center">
            <h2 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-blue-200' : 'text-gray-800'
            }`}>
              🏜️ 埃及旅行倒數
            </h2>
            <div className={`text-5xl font-bold font-mono ${
              darkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'
            }`}>
              {timeLeft || '載入中...'}
            </div>
            <p className={`mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              2026 年 10 月 1 日啟航
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`text-center py-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>Built with Vite + React + Tailwind ✨</p>
      </div>
    </div>
  );
}

export default App;
