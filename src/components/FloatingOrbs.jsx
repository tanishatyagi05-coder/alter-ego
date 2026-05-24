export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}