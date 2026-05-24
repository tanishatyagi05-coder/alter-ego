import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

import FloatingOrbs from '../components/FloatingOrbs'
import PageTransition from '../components/PageTransition'

export default function Results() {

  const location = useLocation()

  const navigate = useNavigate()

  const answers = location.state?.answers || []

  function generateProfile() {

    let yesCount = answers.filter(
      (answer) => answer === 'Yes'
    ).length

    if (yesCount >= 4) {

      return {
        description:
          'You value emotional harmony and believe morality should protect people before systems.',

        trait: 'Empathetic Idealist',

        alignment: 'Moral Optimist',

        conflict: 'Moderate',
      }

    } else if (yesCount >= 2) {

      return {
        description:
          'You balance logic and emotion carefully, often questioning both yourself and others.',

        trait: 'Rational Observer',

        alignment: 'Neutral Thinker',

        conflict: 'High',
      }

    } else {

      return {
        description:
          'You prioritize survival, realism, and personal truth over emotional comfort.',

        trait: 'Cold Strategist',

        alignment: 'Pragmatic Realist',

        conflict: 'Low',
      }

    }
  }

  const profile = generateProfile()

  return (

    <PageTransition>

      <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6">

        {/* Background */}
        <FloatingOrbs />

        <div className="absolute inset-0 bg-black/40"></div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl"
        >

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            ALTER EGO PROFILE
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-xl leading-relaxed mb-12 max-w-3xl"
          >
            {profile.description}
          </motion.p>

          {/* Trait Cards */}
          <div className="space-y-6">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <span className="font-bold text-2xl">
                Psychological Trait:
              </span>

              <span className="text-2xl text-gray-300">
                {' '} {profile.trait}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <span className="font-bold text-2xl">
                Moral Alignment:
              </span>

              <span className="text-2xl text-gray-300">
                {' '} {profile.alignment}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <span className="font-bold text-2xl">
                Internal Conflict Level:
              </span>

              <span className="text-2xl text-gray-300">
                {' '} {profile.conflict}
              </span>
            </motion.div>

          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/debate')}
            className="mt-10 w-full bg-white text-black py-5 rounded-2xl font-bold text-xl hover:bg-gray-300 transition-all"
          >
            Meet Your Alter Ego
          </motion.button>

        </motion.div>

      </div>

    </PageTransition>

  )
}