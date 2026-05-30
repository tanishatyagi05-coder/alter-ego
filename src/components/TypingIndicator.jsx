import { motion } from 'framer-motion'

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2 text-zinc-400 text-sm px-4"
    >
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce delay-100"></span>
        <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce delay-200"></span>
      </div>

      <p>ALTER EGO is thinking...</p>
    </motion.div>
  )
}