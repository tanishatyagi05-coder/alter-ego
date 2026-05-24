import { motion } from 'framer-motion'

export default function TraitCard({
  title,
  value,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className="bg-white/5 p-4 rounded-2xl border border-white/10"
    >

      <span className="font-semibold">
        {title}:
      </span>{' '}

      {value}

    </motion.div>
  )
}