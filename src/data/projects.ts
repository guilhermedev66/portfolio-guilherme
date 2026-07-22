export interface Project {
  title: string
  description: string
  stack: string[]
  href?: string
}

export const projects: Project[] = [
  {
    title: 'Em breve',
    description: 'Novos projetos back-end em .NET serão adicionados aqui.',
    stack: ['C#', '.NET', 'SQL Server'],
  },
]
