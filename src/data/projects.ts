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
    id: 'barber-booking',
    title: 'Barber Booking Platform',
    description:
      'Plataforma full-stack de agendamento para barbearias com um booking engine protegido contra double-booking real: checagem de conflito em memória e, como fonte da verdade, uma exclusion constraint no PostgreSQL que barra sobreposição de horários mesmo sob concorrência — validado com testes de integração contra PostgreSQL real via Testcontainers. RBAC (Customer/Barber/Admin), disponibilidade por profissional/timezone e encaixe walk-in.',
    stack: [
      'C#',
      '.NET / ASP.NET Core',
      'PostgreSQL',
      'JWT + RBAC',
      'React',
      'TypeScript',
      'Docker',
    ],
    githubUrl: 'https://github.com/guilhermedev66/barber-booking-platform',
    demoUrl: 'https://barber-booking-platform-ten.vercel.app',
    demoNote:
      'API em infraestrutura gratuita (Render): 1º acesso pode levar até ~50s (cold start).',
  },
  {
    id: 'order-inventory',
    title: 'Order & Inventory',
    description:
      'Sistema full-stack de gestão de catálogo, fornecedores, estoque e pedidos, com reserva de estoque atômica via SQL transacional: sob duas reservas concorrentes pelas últimas unidades, apenas uma prossegue, sem overselling. Invariantes de saldo também protegidas no PostgreSQL, movimentações auditáveis append-only e pedidos com rollback integral em caso de falha parcial.',
    stack: [
      'C#',
      '.NET / ASP.NET Core',
      'PostgreSQL',
      'JWT + RBAC',
      'React',
      'TypeScript',
      'Docker',
    ],
    githubUrl: 'https://github.com/guilhermedev66/OrderInventory',
    demoUrl: 'https://order-inventory-psi.vercel.app',
    demoNote: 'API em infraestrutura gratuita: 1º acesso pode levar alguns segundos (cold start).',
  },
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
  {
    id: 'cmms',
    title: 'CMMS — Maintenance & Asset Management System',
    description:
      'Sistema de gestão de manutenção e ativos com Work Orders, manutenção preventiva, execução técnica, QR e KPIs. Toda disputa por recurso é uma garantia a nível de banco, não uma checagem de aplicação: self-claim de Work Order via UPDATE condicional atômico, overlap de downtime bloqueado por exclusion constraint do PostgreSQL, e geração de manutenção preventiva com SKIP LOCKED — tudo provado com requisições HTTP concorrentes reais contra PostgreSQL via Testcontainers.',
    stack: [
      'C#',
      '.NET / ASP.NET Core',
      'PostgreSQL',
      'SignalR',
      'React',
      'TypeScript',
      'Docker',
    ],
    githubUrl: 'https://github.com/guilhermedev66/CMMS',
    demoUrl: 'https://cmms-web-mocha.vercel.app',
    demoNote:
      'API em infraestrutura gratuita (Render): 1º acesso pode levar até ~50s (cold start).',
  },
]
