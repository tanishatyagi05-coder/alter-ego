import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import questions from '../data/questions'

export default function Questions() {

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [answers, setAnswers] = useState([])

  const navigate = useNavigate()

  const question = questions[currentQuestion]

  const progress =
    ((currentQuestion + 1) / questions.length) * 100

  function handleAnswer(selectedOption) {

    const updatedAnswers = [...answers, selectedOption]

    setAnswers(updatedAnswers)

    console.log(updatedAnswers)

    if (currentQuestion < questions.length - 1) {

      setCurrentQuestion(currentQuestion + 1)

    } else {

      navigate('/results')

    }
  }

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-purple-700 opacity-20 blur-3xl rounded-full"></div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl"
      >

        {/* Progress Bar */}
        <div className="w-full h-2 bg-zinc-800 rounded-full mb-8 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-purple-600 rounded-full"
          />

        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-8 tracking-wide">
          Psychological Evaluation
        </h1>

        {/* Question */}
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          {question.question}
        </p>

        {/* Options */}
        <div className="flex gap-4">

          {question.options.map((option, index) => (

            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswer(option)}
              className="flex-1 bg-purple-600 py-4 rounded-2xl font-semibold hover:bg-purple-700 transition"
            >
              {option}
            </motion.button>

          ))}

        </div>

      </motion.div>
    </div>
  )
}