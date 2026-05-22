function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050508] text-[#f0f0f5]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,111,224,0.12),transparent_60%)]" />

      {/* Center Divider */}
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#7c6fe0] to-transparent opacity-40" />

      {/* LEFT SIDE — YOU */}
      <div className="absolute left-0 top-0 flex h-full w-1/2 items-center justify-center">
        <div className="text-center opacity-60">

          <div className="relative mx-auto mb-6 h-64 w-44 float-slow rounded-[999px] bg-gradient-to-b from-[#1a1a24] to-[#09090d] opacity-70 blur-[1px]">
            <div className="absolute left-1/2 top-6 h-20 w-20 -translate-x-1/2 rounded-full border border-[#2a2a3a] bg-[#111118]" />
          </div>

          <h2
            className="text-3xl tracking-[0.3em]"
            style={{ fontFamily: "DM Serif Display" }}
          >
            YOU
          </h2>
        </div>
      </div>

      {/* RIGHT SIDE — ALTER EGO */}
      <div className="absolute right-0 top-0 flex h-full w-1/2 items-center justify-center">
        <div className="text-center">

          <div className="relative mx-auto mb-6 h-64 w-44 float-slow rounded-[999px] border border-[#7c6fe0]/30 bg-gradient-to-b from-[#23233a] to-[#0c0c14] shadow-[0_0_80px_rgba(124,111,224,0.18)]">
            <div className="absolute left-1/2 top-6 h-20 w-20 -translate-x-1/2 rounded-full border border-[#7c6fe0]/50 bg-[#181826]" />
          </div>

          <h2
            className="text-3xl tracking-[0.3em] text-[#7c6fe0]"
            style={{ fontFamily: "DM Serif Display" }}
          >
            ALTER EGO
          </h2>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Tiny Logo */}
        <div className="absolute top-6 left-6">
          <h1
            className="text-lg tracking-[0.4em] text-[#7c6fe0]"
            style={{ fontFamily: "DM Serif Display" }}
          >
            ALTER EGO
          </h1>
        </div>

        {/* Heading */}
        <h1
          className="max-w-5xl text-5xl leading-tight md:text-7xl"
          style={{ fontFamily: "DM Serif Display" }}
        >
          Debate the version of you
          <br />
          that remembers everything.
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#8888aa]">
          Answer psychological prompts. Build a model of your beliefs.
          Then face an AI trained to think exactly like you.
        </p>

        {/* Button */}
        <button
          className="mt-12 rounded-full border border-[#7c6fe0] px-8 py-4 text-sm tracking-[0.2em] text-[#7c6fe0] transition-all duration-300 hover:bg-[#7c6fe0] hover:text-black hover:shadow-[0_0_30px_rgba(124,111,224,0.35)]"
        >
          ENTER SESSION
        </button>

        {/* Bottom Text */}
        <p className="absolute bottom-8 text-sm text-[#555570]">
          Psychological profiling takes approximately 3 minutes
        </p>
      </div>
    </div>
  );
}

export default App;