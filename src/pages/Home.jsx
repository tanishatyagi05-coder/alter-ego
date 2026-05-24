import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import FloatingOrbs from "../components/FloatingOrbs";

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6">
        <FloatingOrbs />

        <div className="relative z-10 max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold tracking-wide mb-6"
          >
            ALTER EGO
            </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
          >
            Debate the version of yourself created from your own beliefs.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/questions")}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-300 transition-all"
          >
            Begin Session
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}