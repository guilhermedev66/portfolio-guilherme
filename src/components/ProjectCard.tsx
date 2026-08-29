import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, description, stack, githubUrl, frontendUrl, demoUrl, demoNote, image } =
    project

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 ease-out hover:-translate-y-1 hover:border-chip-line hover:shadow-xl hover:shadow-primary-500/10"
    >
      {image && (
        <img
          src={image}
          alt={`Captura de tela do projeto ${title}`}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-6">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>

        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-chip px-3 py-1 text-xs text-chip-ink"
            >
              {tech}
            </span>
          ))}
        </div>

        {(githubUrl || frontendUrl || demoUrl) && (
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Demo do projeto ${title}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                <FiExternalLink size={16} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={
                  frontendUrl
                    ? `Repositório do back-end do projeto ${title} no GitHub`
                    : `Repositório do projeto ${title} no GitHub`
                }
                className="inline-flex items-center gap-1.5 rounded text-sm text-ink-muted transition duration-200 hover:text-chip-ink focus-visible:text-chip-ink focus-visible:underline focus-visible:outline-none"
              >
                <FiGithub size={16} />
                {frontendUrl ? 'Backend' : 'GitHub'}
              </a>
            )}
            {frontendUrl && (
              <a
                href={frontendUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Repositório do front-end do projeto ${title} no GitHub`}
                className="inline-flex items-center gap-1.5 rounded text-sm text-ink-muted transition duration-200 hover:text-chip-ink focus-visible:text-chip-ink focus-visible:underline focus-visible:outline-none"
              >
                <FiGithub size={16} />
                Frontend
              </a>
            )}
          </div>
        )}

        {demoNote && <p className="mt-3 text-xs text-ink-subtle">{demoNote}</p>}
      </div>
    </motion.div>
  )
}
