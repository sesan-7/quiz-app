import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Question } from "../types";

export default function ResultPage({
  questions,
  answers,
  onRestart,
}: {
  questions: Question[];
  answers: Record<string, string>;
  onRestart: () => void;
}) {
  const correct = questions.reduce((acc, q) => {
    const selected = answers[q.id];
    const correctOption = q.options.find((o) => o.correct);
    if (correctOption && selected === correctOption.id) return acc + 1;
    return acc;
  }, 0);

  const percent = Math.round((correct / questions.length) * 100);
  

  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = percent;
    const duration = 1500; 
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setDisplayPercent(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div className="w-full text-center py-16">
      <motion.p
        className="text-sm text-black bg-white px-4 py-1 rounded-lg inline-block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Keep Learning!
      </motion.p>

      <motion.h2
        className="mt-6 text-7xl font-serifDisplay italic text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Your Final score is
      </motion.h2>

  
      <motion.div
        className="text-8xl font-bold text-cyan-700 mt-4"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
      >
        {displayPercent}
        <span className="text-2xl">%</span>
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={onRestart}
          className="px-4 py-2 bg-gradient-to-br from-[#C6E9F7] to-[#E5F8FF] text-black "
        >
          Start Again
        </button>
      </motion.div>
    </div>
  );
}
