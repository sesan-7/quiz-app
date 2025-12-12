import React, { useState } from "react"
import { QUESTIONS } from "../data/questions"
import QuestionCard from "./QuestionCard"
import ProgressBar from "./ProgressBar"
import ResultPage from "./ResultPage"
import PawLuck from "./PawLuck"  
import { motion, AnimatePresence } from "framer-motion"

export default function QuizLayout() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [completed, setCompleted] = useState(false)
  const [animateDirection, setAnimateDirection] = useState<"up" | "down">("up")

  const question = QUESTIONS[index]

  function onSelect(optionId: string) {
    setAnswers(prev => ({ ...prev, [question.id]: optionId }))
  }

  function next() {
    if (index === QUESTIONS.length - 1) return handleSubmit()
    setIndex(i => i + 1)
  }

  function prev() {
    if (index > 0) setIndex(i => i - 1)
  }

  function handleSubmit() {
    setAnimateDirection("up")
    setCompleted(true)
  }

  function handleRestart() {
    setAnimateDirection("down")
    setIndex(0)
    setAnswers({})
    setCompleted(false)
  }

  const pageVariants = {
    initial: (direction: "down" | "up") => ({
      opacity: 0,
      y: direction === "up" ? 300 : -300,
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "down" ? -300 : 300,
      transition: { duration: 0.4 },
    }),
  }

  return (
    // <div className="w-full min-h-screen flex justify-center items-center from-[#C6E9F7] to-[#E5F8FF] ">
<div className="w-full min-h-screen flex justify-center items-center ">

      <AnimatePresence mode="wait" initial={false}>
        {!completed ? (
          <motion.div
            key="quiz"
            variants={pageVariants}
            custom={animateDirection}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative max-w-5xl w-full bg-white/50 rounded-3xl shadow-lg p-8 bg-gradient-to-br from-[#BECFEE] via-[#71C6E2] via-[#D9F4FA] to-[#BECFEE]"
            role="region"
            aria-labelledby="quiz-title"
          >
            
            {index === 0 && <PawLuck />}

            <div className="max-w-5xl w-full bg-white/50 rounded-xl shadow-2xl p-8 bg-[#F4FDFF]">

            <h1
  id="quiz-title"
  className="mt-6 text-[60px] font-serifDisplay font-normal leading-[90px] tracking-[4px] italic text-center bg-gradient-to-r from-[#15313D] to-[#3CABDA] bg-clip-text text-transparent"
>
  Test Your Knowledge
</h1>


              <p className="mx-auto w-fit text-center text-sm text-black bg-white/90 rounded-xl px-4 py-2 mt-2">
                Answer all questions to see your results
              </p>

              <div className="mt-6">
                <ProgressBar value={index + 1} max={QUESTIONS.length} />
              </div>

              <div className="mt-6">
                <QuestionCard
                  question={question}
                  selected={answers[question.id]}
                  onSelect={onSelect}
                />
              </div>


              <div className="flex justify-end gap-3 mt-6">

                <button
                  onClick={prev}
                  disabled={index === 0}
                  className={`px-3 py-2 rounded-md bg-gray-100 transition-all ${
                    index === 0 ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  ←
                </button>

                <button
                  onClick={next}
                  className="px-4 py-2 text-black rounded-md bg-cyan-100"
                >
                  {index === QUESTIONS.length - 1 ? "Submit" : "→"}
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            variants={pageVariants}
            custom={animateDirection}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-3xl w-full flex justify-center"
          >
            <ResultPage
              questions={QUESTIONS}
              answers={answers}
              onRestart={handleRestart}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
