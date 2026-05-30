import { useState } from 'react'

export default function ChatInput({ onSend }) {

  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!input.trim()) return

    onSend(input)

    setInput('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex gap-3 border-t border-zinc-800 p-4 bg-black/40 backdrop-blur-md"
    >

      <input
        type="text"
        placeholder="Confess your thoughts..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-red-500 transition"
      />

      <button
        type="submit"
        className="bg-red-600 hover:bg-red-500 transition px-5 py-3 rounded-xl text-white font-medium"
      >
        Send
      </button>

    </form>
  )
}