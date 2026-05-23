import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700 opacity-20 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <motion.h1
          initial={{ letterSpacing: '0.2em', opacity: 0 }}
          animate={{ letterSpacing: '0.05em', opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-7xl md:text-8xl font-bold tracking-widest mb-6"
        >
          ALTER EGO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
          className="text-lg text-gray-300 mb-10"
        >
          Debate your own mind.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/questions')}
          className="px-8 py-4 bg-purple-600 rounded-2xl text-lg font-semibold hover:bg-purple-700 transition"
        >
          Begin Evaluation
        </motion.button>
      </motion.div>
    </div>
  )
}