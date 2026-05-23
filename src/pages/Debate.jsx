export default function Debate() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        YOU vs ALTER EGO
      </h1>

      <div className="space-y-4">
        <div className="bg-zinc-900 p-4 rounded-2xl max-w-xl">
          You: Morality depends on circumstances.
        </div>

        <div className="bg-purple-900 p-4 rounded-2xl max-w-xl ml-auto">
          Alter Ego: That contradicts your earlier belief.
        </div>
      </div>
    </div>
  )
}