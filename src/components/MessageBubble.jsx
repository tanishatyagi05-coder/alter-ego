import { motion } from 'framer-motion'

export default function MessageBubble({
  sender,
  text,
  delay = 0,
}) {

  const isUser = sender === 'user'

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.4,
        delay,
      }}

      className={`flex ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >

      <div
        className={`max-w-[75%] px-5 py-4 rounded-2xl shadow-lg ${
          isUser
            ? 'bg-red-600 text-white'
            : 'bg-zinc-900 border border-zinc-800 text-zinc-200'
        }`}
      >

        <p className="leading-relaxed">
          {text}
        </p>

      </div>

    </motion.div>
  )
}