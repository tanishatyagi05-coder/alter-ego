import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import TraitCard from '../components/TraitCard'

export default function Results() {

  const location = useLocation()

  const answers = location.state?.answers || []

  function generateProfile() {

    if (
      answers.includes('Honesty') &&
      answers.includes('Yes')
    ) {
      return {
        title: 'Rational Thinker',
        alignment: 'Pragmatic Neutral',
        conflict: 'High',
        description:
          'You prioritize logic over emotional comfort and tend to make difficult decisions rationally.',
      }
    }

    return {
      title: 'Empathetic Idealist',
      alignment: 'Moral Optimist',
      conflict: 'Moderate',
      description:
        'You value emotional harmony and believe morality should protect people before systems.',
    }
  }

  const profile = generateProfile()

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-purple-700 opacity-20 blur-3xl rounded-full"></div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10"
      >

        <h1 className="text-5xl font-bold mb-6">
          ALTER EGO PROFILE
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          {profile.description}
        </p>

        <div className="space-y-4">

          <TraitCard
            title="Psychological Trait"
            value={profile.title}
            delay={0.2}
          />

          <TraitCard
            title="Moral Alignment"
            value={profile.alignment}
            delay={0.4}
          />

          <TraitCard
            title="Internal Conflict Level"
            value={profile.conflict}
            delay={0.6}
          />

        </div>

      </motion.div>
    </div>
  )
}