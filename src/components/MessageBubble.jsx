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
        y: 30,
        filter: 'blur(10px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      className={`flex ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >

      <div
        className={`
          max-w-2xl px-7 py-5 rounded-3xl border backdrop-blur-xl
          transition-all duration-300 shadow-2xl
          
          ${
            isUser
              ? `
                bg-purple-600/20
                border-purple-500/40
                text-white
              `
              : `
                bg-white/5
                border-white/10
                text-gray-100
              `
          }
        `}
      >

        {/* Sender Label */}
        <p
          className={`
            text-xs tracking-[0.3em] uppercase mb-3 font-semibold
            
            ${
              isUser
                ? 'text-purple-300'
                : 'text-gray-500'
            }
          `}
        >
          {isUser ? 'YOU' : 'ALTER EGO'}
        </p>

        {/* Message */}
        <p className="text-lg md:text-xl leading-relaxed">
          {text}
        </p>

      </div>

    </motion.div>

  )
}