export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  githubUrl?: string
  frontendUrl?: string
  demoUrl?: string
  demoNote?: string
  image?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'helpdesk',
    title: 'HelpDesk',
    description:
      'Sistema full-stack para gestão do ciclo de vida de chamados de suporte. Autenticação, controle de acesso por papel (User, Agent, Admin), histórico auditável, SLA e tratamento de concorrência otimista, com back-end em ASP.NET Core e PostgreSQL e front-end em React e TypeScript consumindo a API real em produção.',
    stack: [
      'C#',
      '.NET / ASP.NET Core',
      'PostgreSQL',
      'JWT + RBAC',
      'React',
      'TypeScript',
      'Docker',
    ],
    githubUrl: 'https://github.com/guilhermedev66/HelpDeskAPI',
    frontendUrl: 'https://github.com/guilhermedev66/HelpDeskWeb',
    demoUrl: 'https://helpdesk-web-omega.vercel.app',
    demoNote: 'API em infraestrutura gratuita: 1º acesso pode levar alguns segundos (cold start).',
    featured: true,
  },
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
