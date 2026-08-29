import { motion } from 'framer-motion'
import { FiArrowRight, FiCode, FiGithub } from 'react-icons/fi'
import { ProfileImagePlaceholder } from '@/components/ProfileImagePlaceholder'
import { ProjectCard } from '@/components/ProjectCard'
import { skillCategories } from '@/data/skills'
import { projects } from '@/data/projects'
import { socialLinks } from '@/data/social'

export function Home() {
  const githubUrl = socialLinks.find((link) => link.label === 'GitHub')?.href

  return (
    <>
      <section
        id="home"
        className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 py-14 sm:py-16 md:grid-cols-[1.15fr_1fr] md:gap-12 md:py-20"
      >
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-chip-line bg-chip px-3.5 py-1.5 text-xs font-medium text-chip-ink sm:px-4 sm:text-sm"
          >
            <FiCode size={16} className="shrink-0" />
            Back-End Developer · C# · .NET
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl leading-tight font-bold tracking-tight text-ink sm:text-5xl"
          >
            Olá, eu sou Guilherme Santos da Silva
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted"
          >
            Escrevo APIs em C# e ASP.NET Core com atenção a modelagem de
            dados, testes automatizados e código que outra pessoa consegue
            manter. Estudo Engenharia de Software para aprofundar arquitetura
            e boas práticas em cada projeto que construo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 font-medium text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas active:translate-y-0"
            >
              Ver projetos
              <FiArrowRight className="transition duration-200 group-hover:translate-x-1" />
            </a>

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Ver perfil no GitHub"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-medium text-ink transition duration-200 ease-out hover:-translate-y-0.5 hover:border-chip-line hover:text-chip-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas active:translate-y-0"
              >
                <FiGithub />
                GitHub
              </a>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <ProfileImagePlaceholder />
        </motion.div>
      </section>

      <section id="about" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-ink"
          >
            Sobre mim
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl leading-relaxed text-ink-muted"
          >
            Estudante de Engenharia de Software, dedico boa parte do meu tempo
            construindo projetos Back-End completos — do modelo de dados à
            API em produção — pra entender arquitetura, concorrência e testes
            na prática, não só na teoria. Cada projeto novo estuda um
            problema técnico específico (autenticação, concorrência,
            auditoria) e busco minha primeira oportunidade profissional ou
            estágio em desenvolvimento Back-End.
          </motion.p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="rounded-2xl border border-line bg-canvas p-6"
              >
                <h3 className="text-sm font-semibold tracking-wide text-chip-ink uppercase">
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.1 + index * 0.05,
                      }}
                      className="rounded-full border border-chip-line bg-chip px-4 py-1.5 text-sm text-chip-ink transition duration-200 hover:border-primary-400/60 hover:bg-primary-500/20"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-ink"
          >
            Projetos
          </motion.h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
