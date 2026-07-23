export interface Skill {
  name: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    skills: [
      { name: 'C#' },
      { name: '.NET' },
      { name: 'ASP.NET Core' },
      { name: 'Entity Framework' },
      { name: 'APIs REST' },
    ],
  },
  {
    title: 'Banco de Dados',
    skills: [{ name: 'SQL Server' }],
  },
  {
    title: 'Ferramentas e Versionamento',
    skills: [{ name: 'Git' }, { name: 'Docker' }, { name: 'Azure' }],
  },
]
