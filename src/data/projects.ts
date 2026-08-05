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
    id: 'task-manager-api',
    title: 'TaskManagerAPI',
    description:
      'API REST para gerenciamento de tarefas desenvolvida em ASP.NET Core. Permite autenticação de usuários com JWT e operações de CRUD de tarefas, utilizando Entity Framework Core e documentação interativa com Swagger.',
    stack: [
      'C#',
      '.NET 10',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'SQLite',
      'JWT Authentication',
      'Swagger / OpenAPI',
    ],
    githubUrl: 'https://github.com/guilhermedev66/TaskManagerAPI',
  },
]
