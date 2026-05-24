import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import questions from '../data/questions'

import FloatingOrbs from '../components/FloatingOrbs'
import PageTransition from '../components/PageTransition'

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

      navigate('/results', {
        state: {
          answers: updatedAnswers,
        },
      })

    }
  }

  return (

    <PageTransition>

      <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">

        {/* Floating Background */}
        <FloatingOrbs />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
        >

          {/* Progress Bar */}
          <div className="w-full h-2 bg-zinc-800 rounded-full mb-8 overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            />

          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold mb-8 tracking-wide">
            Psychological Evaluation
          </h1>

          {/* Animated Question */}
          <AnimatePresence mode="wait">

            <motion.p
              key={question.id}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            >
              {question.question}
            </motion.p>

          </AnimatePresence>

          {/* Options */}
          <div className="flex gap-4">

            {question.options.map((option, index) => (

              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(option)}
                className="flex-1 bg-white/5 border border-white/10 py-4 rounded-2xl font-semibold hover:bg-purple-600/20 hover:border-purple-500 transition-all duration-300"
              >
                {option}
              </motion.button>

            ))}

          </div>

        </motion.div>

      </div>

    </PageTransition>

  )
}