import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, stack, githubUrl, demoUrl } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-primary-500/10 px-3 py-1 text-xs text-primary-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {(githubUrl || demoUrl) && (
        <div className="mt-4 flex items-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Repositório do projeto ${title} no GitHub`}
              className="inline-flex items-center gap-1.5 rounded text-sm text-neutral-400 transition duration-200 hover:text-primary-300 focus-visible:text-primary-300 focus-visible:underline focus-visible:outline-none"
            >
              <FiGithub size={16} />
              GitHub
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Demo do projeto ${title}`}
              className="inline-flex items-center gap-1.5 rounded text-sm text-neutral-400 transition duration-200 hover:text-primary-300 focus-visible:text-primary-300 focus-visible:underline focus-visible:outline-none"
            >
              <FiExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}
