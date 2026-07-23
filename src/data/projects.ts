export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'em-breve',
    title: 'Em breve',
    description: 'Novos projetos back-end em .NET serão adicionados aqui.',
    stack: ['C#', '.NET', 'SQL Server'],
  },
]
