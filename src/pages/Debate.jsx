import { motion } from 'framer-motion'

import MessageBubble from '../components/MessageBubble'
import FloatingOrbs from '../components/FloatingOrbs'
import PageTransition from '../components/PageTransition'

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

    <PageTransition>

      <div className="min-h-screen bg-black text-white px-6 py-16 overflow-hidden relative">

        {/* Floating Background */}
        <FloatingOrbs />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto"
        >

          {/* Header */}
          <div className="text-center mb-16">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[0.4em] text-purple-400 text-sm mb-4"
            >
              Neural Debate Session
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold tracking-wide"
            >
              YOU vs ALTER EGO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mt-6 text-lg"
            >
              Your own beliefs are now being questioned.
            </motion.p>

          </div>

          {/* Debate Container */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl">

            <div className="space-y-8">

              {messages.map((message, index) => (

                <MessageBubble
                  key={index}
                  sender={message.sender}
                  text={message.text}
                  delay={index * 0.4}
                />

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </PageTransition>

  )
}