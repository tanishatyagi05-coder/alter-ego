import { motion } from 'framer-motion'

import MessageBubble from '../components/MessageBubble'

export default function Debate() {

  const messages = [
    {
      sender: 'user',
      text:
        'Morality depends on circumstance.',
    },

    {
      sender: 'ai',
      text:
        'Yet earlier you claimed honesty should always come first.',
    },

    {
      sender: 'user',
      text:
        'People contradict themselves constantly.',
    },

    {
      sender: 'ai',
      text:
        'Then perhaps your morality is convenience disguised as principle.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-purple-700 opacity-20 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-4xl mx-auto"
      >

        <h1 className="text-5xl font-bold mb-12 tracking-wide text-center">
          YOU vs ALTER EGO
        </h1>

        <div className="space-y-6">

          {messages.map((message, index) => (

            <MessageBubble
              key={index}
              sender={message.sender}
              text={message.text}
              delay={index * 0.3}
            />

          ))}

        </div>

      </motion.div>
    </div>
  )
}