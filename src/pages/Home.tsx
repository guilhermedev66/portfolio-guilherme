import { motion } from 'framer-motion'
import { FiArrowRight, FiCode } from 'react-icons/fi'
import { ProfileImagePlaceholder } from '@/components/ProfileImagePlaceholder'
import { ProjectCard } from '@/components/ProjectCard'
import { skillCategories } from '@/data/skills'
import { projects } from '@/data/projects'

export function Home() {
  return (
    <>
      <section
        id="home"
        className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-28"
      >
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-3.5 py-1.5 text-xs font-medium text-primary-300 sm:px-4 sm:text-sm"
          >
            <FiCode size={16} className="shrink-0" />
            Desenvolvedor Back-End .NET | Estudante de Engenharia de Software
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl"
          >
            Olá, eu sou Guilherme Santos da Silva
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-400"
          >
            Desenvolvo APIs e soluções Back-End com C#, ASP.NET Core e o
            ecossistema .NET, aplicando boas práticas a cada projeto enquanto
            aprofundo meus conhecimentos como estudante de Engenharia de
            Software.
          </motion.p>

          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 font-medium text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 active:translate-y-0"
          >
            Ver projetos
            <FiArrowRight className="transition duration-200 group-hover:translate-x-1" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="lg:-translate-y-[163.5px]">
            <ProfileImagePlaceholder />
          </div>
        </motion.div>
      </section>

      <section id="about" className="border-t border-white/10 bg-neutral-900/40">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white"
          >
            Sobre mim
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl leading-relaxed text-neutral-400"
          >
            Sou estudante de Engenharia de Software e desenvolvedor Back-End em
            formação, com foco no ecossistema .NET. Venho me dedicando ao
            aprendizado de C#, ASP.NET Core, Entity Framework e bancos de
            dados, aplicando boas práticas de desenvolvimento e versionamento
            com Git em cada projeto que construo.
          </motion.p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6"
              >
                <h3 className="text-sm font-semibold tracking-wide text-primary-300 uppercase">
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
                      className="rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm text-primary-200 transition duration-200 hover:border-primary-400/60 hover:bg-primary-500/20 hover:text-white"
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

      <section id="projects" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white"
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
