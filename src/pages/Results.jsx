import { motion } from 'framer-motion'

export default function Results() {
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
          Your responses suggest a morally conflicted but emotionally rational personality.
          You value honesty over comfort and tend to justify difficult decisions logically.
        </p>

        <div className="space-y-4">

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            Psychological Trait: Rational Thinker
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            Moral Alignment: Pragmatic Neutral
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            Internal Conflict Level: High
          </div>

        </div>

      </motion.div>
    </div>
  )
}