import { motion } from 'framer-motion'
import { FiUser } from 'react-icons/fi'

export function ProfileImagePlaceholder() {
  return (
    <div className="relative flex h-56 w-56 shrink-0 items-center justify-center sm:h-64 sm:w-64 lg:h-72 lg:w-72">
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full bg-primary-500/40 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-primary-500/60 bg-neutral-900/60 shadow-[0_0_50px_-12px] shadow-primary-500/60 backdrop-blur-sm"
      >
        <FiUser size={64} className="text-primary-300/50" aria-hidden="true" />
        <span className="sr-only">Foto de perfil em breve</span>
      </motion.div>
    </div>
  )
}
