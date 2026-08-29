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
      { name: 'Entity Framework Core' },
      { name: 'APIs REST' },
      { name: 'JWT / RBAC' },
    ],
  },
  {
    title: 'Dados e Testes',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'SQL Server' },
      { name: 'xUnit' },
      { name: 'Testcontainers' },
    ],
  },
  {
    title: 'Ferramentas',
    skills: [{ name: 'Git' }, { name: 'Docker' }, { name: 'GitHub Actions (CI)' }],
  },
  {
    title: 'Frontend (complementar)',
    skills: [{ name: 'React' }, { name: 'TypeScript' }],
  },
]
