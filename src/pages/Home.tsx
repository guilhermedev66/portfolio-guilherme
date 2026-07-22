import { motion } from 'framer-motion'
import { FiArrowRight, FiCode } from 'react-icons/fi'
import { ProfileImagePlaceholder } from '@/components/ProfileImagePlaceholder'
import { skills } from '@/data/skills'
import { projects } from '@/data/projects'

export function Home() {
  return (
    <>
      <section
        id="home"
        className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
      >
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-300"
          >
            <FiCode size={16} />
            Desenvolvedor Back-End .NET
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            Olá, eu sou Guilherme Santos da Silva
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-xl text-lg text-neutral-400"
          >
            Construo APIs e sistemas back-end robustos com C# e .NET, focados em
            performance, boas práticas e código limpo.
          </motion.p>

          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 font-medium text-white transition hover:bg-primary-500"
          >
            Ver projetos
            <FiArrowRight />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <ProfileImagePlaceholder />
        </motion.div>
      </section>

      <section id="about" className="border-t border-white/10 bg-neutral-900/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white"
          >
            Sobre mim
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl text-neutral-400"
          >
            Sou desenvolvedor back-end especializado no ecossistema .NET,
            trabalhando com C#, ASP.NET Core e bancos de dados relacionais para
            criar soluções escaláveis e de fácil manutenção.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm text-primary-200"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white"
          >
            Projetos
          </motion.h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 transition hover:border-primary-500/40"
              >
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary-500/10 px-3 py-1 text-xs text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
