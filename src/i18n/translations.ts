import type { Locale, ProjectContent } from "../types";

const sharedLinks = {
  github: "https://github.com/Matheus-TecDev",
  linkedin: "https://www.linkedin.com/in/matheusfreiredev/",
  email: "mailto:matheus.tecnodev@gmail.com",
};

const ptProjects: ProjectContent[] = [
  {
    eyebrow: "OBSERVABILIDADE / MONITORAMENTO",
    title: "Sentinel",
    lead: "Monitora serviços e registra incidentes para ajudar a identificar e investigar falhas.",
    context: "O problema não era apenas saber se um endpoint respondeu. Era manter histórico, reduzir ruído transitório, coordenar incidentes e oferecer contexto suficiente para investigar uma falha.",
    decisions: [
      "Checks HTTP agendados com estados online, degraded e offline; incidentes abertos e resolvidos automaticamente após limiares configuráveis.",
      "Check e transição de incidente persistidos na mesma transação, com índice parcial no PostgreSQL garantindo um único incidente aberto por serviço.",
      "Métricas de aplicação e domínio no Prometheus, logs centralizados no Loki e dashboard provisionado no Grafana.",
    ],
    validation: [
      "O repositório inclui testes unitários e de integração para o backend.",
      "A validação documentada cobre compilação e importação do backend, build do frontend e configuração do Docker Compose.",
    ],
    limitations: ["O scheduler embarcado simplifica o ambiente single-node, mas exige coordenação adicional antes de escalar o backend em múltiplas réplicas."],
    stack: ["Python", "FastAPI", "PostgreSQL", "Prometheus", "Grafana", "Loki", "Docker"],
    links: [
      { label: "Repositório", href: "https://github.com/Matheus-TecDev/Sentinel" },
      { label: "Arquitetura", href: "https://github.com/Matheus-TecDev/Sentinel/blob/main/docs/architecture.md" },
      { label: "Observabilidade", href: "https://github.com/Matheus-TecDev/Sentinel/blob/main/docs/observability.md" },
    ],
    evidence: [
      { src: "/projects/sentinel-dashboard.webp", alt: "Dashboard operacional real do Sentinel com serviços, incidentes e disponibilidade", caption: "Operação — estado dos serviços e incidentes", width: 1600, height: 1061 },
      { src: "/projects/sentinel-incidents.webp", alt: "Tela real de incidentes do Sentinel", caption: "Incidentes — histórico e contexto da falha", width: 1600, height: 1061 },
      { src: "/projects/sentinel-grafana.webp", alt: "Dashboard real do Grafana com métricas do Sentinel", caption: "Grafana — verificações, disponibilidade e latência", width: 1584, height: 636 },
    ],
  },
  {
    eyebrow: "CI/CD / PLATFORM ENGINEERING",
    title: "Platform Workflows",
    lead: "Workflows reutilizáveis do GitHub Actions para padronizar testes, verificações de segurança e publicação de imagens.",
    context: "Cada aplicação repetia setup, cache, lint, testes, build, scans e publicação. A solução extrai esse comportamento para workflows pequenos, versionáveis e chamados com entradas explícitas.",
    decisions: [
      "Contratos reutilizáveis via workflow_call, versionados e configurados por entradas explícitas.",
      "Actions fixadas por commit SHA, permissões mínimas por job e validação de entradas antes de operações de build ou publicação.",
      "Gitleaks no histórico completo, Trivy para dependências, IaC e imagens, além de exemplos prontos para repositórios consumidores.",
    ],
    validation: ["O Sentinel consome os workflows estáveis v1; o repositório documenta a validação dessa integração em pull requests e pushes na branch principal."],
    limitations: ["O escopo v1 não inclui deploy, Kubernetes, múltiplos registries, SBOM, assinatura ou attestations."],
    stack: ["GitHub Actions", "Python", "React", "Docker", "Trivy", "Gitleaks", "GHCR"],
    links: [
      { label: "Repositório", href: "https://github.com/Matheus-TecDev/platform-workflows" },
      { label: "Como consumir", href: "https://github.com/Matheus-TecDev/platform-workflows#usage" },
    ],
    evidence: [],
  },
  {
    eyebrow: "BACKEND / EVENT-DRIVEN",
    title: "Relay",
    lead: "Processamento de eventos com RabbitMQ, retentativas e reprocessamento de falhas.",
    context: "Publicar em uma fila é a parte fácil. Relay explora o que acontece quando banco e broker discordam, consumidores recebem o mesmo evento outra vez ou uma entrega falha repetidamente.",
    decisions: [
      "Outbox transacional mantém evento e intenção de publicação no mesmo commit; um publisher envia mensagens pendentes ao RabbitMQ.",
      "Consumidores idempotentes, retentativas progressivas e dead-letter queue tornam falhas visíveis e reprocessáveis.",
      "Métricas, logs estruturados e tracing com OpenTelemetry, Prometheus, Loki, Tempo e dashboards provisionados no Grafana.",
    ],
    validation: [
      "O repositório inclui testes do backend para outbox, idempotência, DLQ, API, autenticação, métricas e cenários de integração.",
      "O workflow de CI cobre backend, frontend e validação da configuração do Docker Compose.",
    ],
    limitations: ["O ambiente Docker Compose demonstra os fluxos em uma topologia local; não representa uma orquestração distribuída de produção."],
    stack: ["FastAPI", "RabbitMQ", "PostgreSQL", "OpenTelemetry", "Prometheus", "Tempo", "Docker"],
    links: [
      { label: "Repositório", href: "https://github.com/Matheus-TecDev/Relay" },
      { label: "Arquitetura", href: "https://github.com/Matheus-TecDev/Relay/blob/main/docs/architecture.md" },
      { label: "Observabilidade", href: "https://github.com/Matheus-TecDev/Relay/blob/main/docs/observability.md" },
    ],
    evidence: [],
  },
];

const enProjects: ProjectContent[] = [
  {
    ...ptProjects[0],
    eyebrow: "OBSERVABILITY / MONITORING",
    lead: "Monitors services and records incidents to help identify and investigate failures.",
    context: "The problem was not simply knowing whether an endpoint responded. It was keeping history, filtering transient noise, coordinating incidents, and providing enough context to investigate a failure.",
    decisions: [
      "Scheduled HTTP checks with online, degraded, and offline states; incidents open and resolve automatically after configurable thresholds.",
      "The check and incident transition persist in one transaction, with a PostgreSQL partial index enforcing one open incident per service.",
      "Application and domain metrics in Prometheus, centralized logs in Loki, and a provisioned Grafana dashboard.",
    ],
    validation: [
      "The repository includes unit and integration tests for the backend.",
      "Documented validation covers backend compilation and import, the frontend build, and Docker Compose configuration.",
    ],
    limitations: ["The embedded scheduler keeps the single-node environment simple, but needs additional coordination before the backend can safely scale to multiple replicas."],
    links: [
      { label: "Repository", href: "https://github.com/Matheus-TecDev/Sentinel" },
      { label: "Architecture", href: "https://github.com/Matheus-TecDev/Sentinel/blob/main/docs/architecture.md" },
      { label: "Observability", href: "https://github.com/Matheus-TecDev/Sentinel/blob/main/docs/observability.md" },
    ],
    evidence: [
      { src: "/projects/sentinel-dashboard.webp", alt: "Real Sentinel operations dashboard showing services, incidents, and availability", caption: "Operations — service and incident state", width: 1600, height: 1061 },
      { src: "/projects/sentinel-incidents.webp", alt: "Real Sentinel incident screen", caption: "Incidents — failure history and context", width: 1600, height: 1061 },
      { src: "/projects/sentinel-grafana.webp", alt: "Real Grafana dashboard with Sentinel metrics", caption: "Grafana — checks, availability, and latency", width: 1584, height: 636 },
    ],
  },
  {
    ...ptProjects[1],
    eyebrow: "CI/CD / PLATFORM ENGINEERING",
    lead: "Reusable GitHub Actions workflows for standardizing tests, security checks, and image publishing.",
    context: "Each application repeated setup, caching, linting, tests, builds, scans, and publishing. The solution extracts that behavior into small, versioned workflows called through explicit inputs.",
    decisions: [
      "Reusable contracts through workflow_call, with versioning and explicit inputs.",
      "Actions pinned to commit SHAs, minimum permissions per job, and input validation before build or publishing operations.",
      "Gitleaks across the full history, Trivy for dependencies, IaC, and images, plus consumer-ready examples.",
    ],
    validation: ["Sentinel consumes the stable v1 workflows; the repository documents validation of that integration through pull requests and pushes to the main branch."],
    limitations: ["The v1 scope excludes deployment, Kubernetes, multiple registries, SBOMs, signing, and attestations."],
    links: [
      { label: "Repository", href: "https://github.com/Matheus-TecDev/platform-workflows" },
      { label: "Consumer guide", href: "https://github.com/Matheus-TecDev/platform-workflows#usage" },
    ],
  },
  {
    ...ptProjects[2],
    eyebrow: "BACKEND / EVENT-DRIVEN",
    lead: "Event processing with RabbitMQ, retries, and failure reprocessing.",
    context: "Publishing to a queue is the easy part. Relay explores what happens when the database and broker disagree, consumers receive the same event twice, or a delivery repeatedly fails.",
    decisions: [
      "A transactional outbox keeps the event and publication intent in the same commit; a publisher sends pending messages to RabbitMQ.",
      "Idempotent consumers, progressive retries, and a dead-letter queue make failures visible and reprocessable.",
      "Metrics, structured logs, and tracing through OpenTelemetry, Prometheus, Loki, Tempo, and provisioned Grafana dashboards.",
    ],
    validation: [
      "The repository includes backend tests for the outbox, idempotency, DLQ, API, authentication, metrics, and integration scenarios.",
      "The CI workflow covers the backend, frontend, and Docker Compose configuration validation.",
    ],
    limitations: ["The Docker Compose environment demonstrates the flows in a local topology; it does not represent distributed production orchestration."],
    links: [
      { label: "Repository", href: "https://github.com/Matheus-TecDev/Relay" },
      { label: "Architecture", href: "https://github.com/Matheus-TecDev/Relay/blob/main/docs/architecture.md" },
      { label: "Observability", href: "https://github.com/Matheus-TecDev/Relay/blob/main/docs/observability.md" },
    ],
    evidence: [],
  },
];

export const translations = {
  "pt-BR": {
    meta: { title: "Matheus Freire — Desenvolvedor Backend", description: "Portfólio de Matheus Freire, desenvolvedor backend com atuação em Python e infraestrutura AWS.", locale: "pt_BR" },
    nav: { work: "Projetos", experience: "Experiência", about: "Sobre", contact: "Contato", home: "Matheus Freire — início", skip: "Pular para o conteúdo", open: "Abrir menu", close: "Fechar menu", label: "Navegação principal" },
    controls: { language: "Mudar idioma", theme: "Mudar tema", dark: "Ativar tema escuro", light: "Ativar tema claro", portuguese: "Português", english: "English" },
    hero: {
      role: "DESENVOLVEDOR BACKEND",
      summary: "Desenvolvo APIs e sistemas com Python e trabalho com infraestrutura em AWS.",
      primary: "Ver projetos",
      resume: "Currículo",
      status: "Fortaleza, Brasil",
      socialLabel: "Links sociais de Matheus Freire",
    },
    work: {
      title: "Projetos",
      contribution: "Implementação",
      details: "Ver detalhes técnicos",
      enlargeImage: "Ampliar imagem",
      closeImage: "Fechar imagem ampliada",
      problem: "Problema",
      decisions: "Implementação e decisões",
      validation: "Validação disponível",
      technologies: "Tecnologias",
      limitations: "Limitações",
      evidence: "Evidência",
      open: "abre em nova aba",
    },
    experience: {
      title: "Experiência",
      company: "A e Cia Móveis",
      period: "",
      role: "Desenvolvedor Backend e Infraestrutura de TI",
      business: "Desenvolvimento, publicação e sustentação de sistemas internos usados por ~70 usuários, apoiando vendas, cobrança, área do cliente, catálogo, geolocalização e saneamento de dados.",
      engineering: [
        "Implantação e operação de 10+ aplicações e serviços internos em Linux/Docker, incluindo GLPI, Zabbix, BookStack, Vaultwarden, catálogo, área do cliente e sistemas corporativos.",
        "Configuração de infraestrutura em AWS com EC2, S3 e Route 53, incluindo certificados TLS, Security Groups, Nginx como proxy reverso e comunicação entre aplicações e bancos.",
        "Evolução de aplicações de cobrança e área do cliente, reduzindo etapas manuais de conferência de pagamentos e dando mais visibilidade para cobradores, vendedores e equipes internas.",
        "Atuação em troubleshooting de aplicações, bancos e infraestrutura, incluindo correções de segurança, renovação de certificados expirados e atualização de imagens em produção.",
      ],
    },
    about: {
      title: "Sobre",
      paragraphs: ["Sou desenvolvedor backend em Fortaleza e atuo no desenvolvimento de sistemas internos e na sustentação da infraestrutura que os mantém disponíveis. Tenho interesse em confiabilidade, cloud e observabilidade."],
      certificationLabel: "Certificação",
      credential: "AWS Certified Cloud Practitioner",
      credentialDetail: "2026",
      viewCredential: "Ver credencial",
      education: {
        label: "Formação complementar",
        title: "Desenvolvedor Full Stack — Digital College",
        detail: "192h presenciais · 2022-2023",
      },
    },
    contact: {
      title: "Contato",
      socialLabel: "Outros canais de contato",
    },
    links: sharedLinks,
    projects: ptProjects,
  },
  en: {
    meta: { title: "Matheus Freire — Backend Developer", description: "Portfolio of Matheus Freire, a backend developer working with Python and AWS infrastructure.", locale: "en_US" },
    nav: { work: "Projects", experience: "Experience", about: "About", contact: "Contact", home: "Matheus Freire — home", skip: "Skip to content", open: "Open menu", close: "Close menu", label: "Main navigation" },
    controls: { language: "Change language", theme: "Change theme", dark: "Enable dark theme", light: "Enable light theme", portuguese: "Português", english: "English" },
    hero: {
      role: "BACKEND DEVELOPER",
      summary: "I build APIs and systems with Python and work with infrastructure on AWS.",
      primary: "View projects",
      resume: "Resume",
      status: "Fortaleza, Brazil",
      socialLabel: "Matheus Freire social links",
    },
    work: {
      title: "Projects",
      contribution: "Implementation",
      details: "View technical details",
      enlargeImage: "Enlarge image",
      closeImage: "Close enlarged image",
      problem: "Problem",
      decisions: "Implementation and decisions",
      validation: "Available validation",
      technologies: "Technologies",
      limitations: "Limitations",
      evidence: "Evidence",
      open: "opens in a new tab",
    },
    experience: {
      title: "Experience",
      company: "A e Cia Móveis",
      period: "",
      role: "Backend Developer and IT Infrastructure",
      business: "Development, publication, and maintenance of internal systems used by ~70 users, supporting sales, collections, customer portal, catalog, geolocation, and data cleanup.",
      engineering: [
        "Deployment and operation of 10+ internal applications and services on Linux/Docker, including GLPI, Zabbix, BookStack, Vaultwarden, catalog, customer portal, and corporate systems.",
        "AWS infrastructure configuration with EC2, S3, and Route 53, including TLS certificates, Security Groups, Nginx as a reverse proxy, and communication between applications and databases.",
        "Evolution of collections and customer portal applications, reducing manual payment-checking steps and giving collectors, salespeople, and internal teams more visibility.",
        "Troubleshooting across applications, databases, and infrastructure, including security fixes, expired certificate renewals, and production image updates.",
      ],
    },
    about: {
      title: "About",
      paragraphs: ["I'm a backend developer based in Fortaleza, Brazil, working on internal systems and the infrastructure that keeps them available. I'm particularly interested in reliability, cloud, and observability."],
      certificationLabel: "Certification",
      credential: "AWS Certified Cloud Practitioner",
      credentialDetail: "2026",
      viewCredential: "View credential",
      education: {
        label: "Complementary education",
        title: "Full Stack Developer Program — Digital College",
        detail: "192 in-person hours · 2022-2023",
      },
    },
    contact: {
      title: "Contact",
      socialLabel: "Other contact channels",
    },
    links: sharedLinks,
    projects: enProjects,
  },
} as const;

export type Translation = (typeof translations)[Locale];
