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
  },
  {
    id: 'task-manager-api',
    title: 'TaskManagerAPI',
    description:
      'Sistema full-stack para gerenciamento de tarefas. Autenticação JWT com refresh token rotativo e detecção de reuso, isolamento de dados por usuário, rate limiting e health checks no back-end em ASP.NET Core, com front-end em React e TypeScript consumindo a API real em produção.',
    stack: [
      'C#',
      '.NET / ASP.NET Core',
      'Entity Framework Core',
      'JWT + Refresh Token',
      'React',
      'TypeScript',
      'Docker',
    ],
    githubUrl: 'https://github.com/guilhermedev66/TaskManagerAPI',
    frontendUrl: 'https://github.com/guilhermedev66/TaskManagerFrontend',
    demoUrl: 'https://taskmanagerfrontend-lac.vercel.app',
  },
]
