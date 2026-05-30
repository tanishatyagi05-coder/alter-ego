import { useEffect, useRef, useState } from 'react'

import MessageBubble from '../components/MessageBubble'
import ChatInput from '../components/ChatInput'
import TypingIndicator from '../components/TypingIndicator'

import starterMessages from '../data/starterMessages'

export default function ChatRoom() {

  const [messages, setMessages] = useState(starterMessages)

  const [isTyping, setIsTyping] = useState(false)

  const bottomRef = useRef(null)

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    })

  }, [messages, isTyping])

  const handleSend = (text) => {

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text,
    }

    setMessages((prev) => [...prev, userMessage])

    setIsTyping(true)

    setTimeout(() => {

      const aiReply = {
        id: Date.now() + 1,
        sender: 'ai',
        text: generateFakeReply(text),
      }

      setMessages((prev) => [...prev, aiReply])

      setIsTyping(false)

    }, 1800)
  }

  return (

    <div className="relative h-screen bg-black text-white flex flex-col overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent_60%)]"></div>

      {/* Header */}
      <header className="relative z-10 border-b border-zinc-800 p-5 backdrop-blur-md bg-black/40">

        <h1 className="text-2xl font-bold tracking-wide text-red-500">
          ALTER EGO
        </h1>

        <p className="text-zinc-400 text-sm mt-1">
          Your mind has entered cross examination.
        </p>

      </header>

      {/* Chat Messages */}
      <main className="relative z-10 flex-1 overflow-y-auto px-4 py-6 space-y-5">

        {messages.map((message, index) => (

          <MessageBubble
            key={message.id}
            sender={message.sender}
            text={message.text}
            delay={index * 0.08}
          />

        ))}

        {isTyping && <TypingIndicator />}

        <div ref={bottomRef}></div>

      </main>

      {/* Input */}
      <div className="relative z-10">

        <ChatInput onSend={handleSend} />

      </div>

    </div>
  )
}

function generateFakeReply(userText) {

  const replies = [

    `Interesting. Why do you believe "${userText}" defines you?`,

    'Your answer conflicts with your earlier emotional pattern.',

    'You fear judgment more than failure.',

    'That sounds rehearsed. Try again honestly.',

    'Your subconscious disagrees.',
  ]

  return replies[Math.floor(Math.random() * replies.length)]
}