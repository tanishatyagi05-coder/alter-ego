import { motion } from 'framer-motion'

export default function MessageBubble({
  sender,
  text,
  delay = 0,
}) {

  const isUser = sender === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className={`flex ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >

      <div
        className={`max-w-xl px-6 py-4 rounded-3xl border ${
          isUser
            ? 'bg-purple-600 border-purple-500'
            : 'bg-white/5 border-white/10'
        }`}
      >

        <p className="text-sm opacity-70 mb-2">
          {isUser ? 'YOU' : 'ALTER EGO'}
        </p>

        <p className="text-lg leading-relaxed">
          {text}
        </p>

      </div>

    </motion.div>
  )
}