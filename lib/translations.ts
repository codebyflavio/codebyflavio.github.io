export type Lang = "pt" | "en" | "es";

export const translations = {
  pt: {
    nav: {
      home: "Home",
      about: "Sobre",
      skills: "Skills",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      badge: "Disponível para novas oportunidades",
      tagline:
        "Desenvolvedor com experiência sólida em Django, React.js e TypeScript. Foco em sistemas integrados, automação de testes e APIs de alto desempenho.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Entrar em Contato",
      roles: [
        "Desenvolvedor Back-End",
        "Desenvolvedor Front-End",
        "Django & FastAPI Dev",
        "React & TypeScript Dev",
        "Automação & QA",
      ],
    },
    about: {
      eyebrow: "// sobre mim",
      heading: "Quem sou",
      headingHighlight: "eu?",
      p1: "Desenvolvedor com experiência sólida em Django, React.js e TypeScript. Tenho foco em sistemas integrados, automação de testes e construção de APIs robustas, aplicando metodologias ágeis para garantir qualidade e desempenho.",
      p2: "Ao longo da minha trajetória, trabalhei com desembaraço aduaneiro, automação de testes QA e desenvolvimento de sistemas full-stack, sempre buscando escrever código limpo, testável e de fácil manutenção.",
      infoName: "Nome",
      infoLocation: "Localização",
      infoEmail: "E-mail",
      langs: ["🇧🇷 Português (Nativo)", "🇺🇸 Inglês (Fluente)", "🇪🇸 Espanhol (Regular)"],
      downloadCV: "Download CV",
      experienceLabel: "Experiência",
      stacksLabel: "Stacks",
      photoPlaceholder: "Substitua por",
    },
    skills: {
      eyebrow: "// habilidades técnicas",
      heading: "Minhas",
      headingHighlight: "Skills",
      description:
        "Tecnologias e ferramentas que uso no dia a dia para construir soluções robustas, escaláveis e bem testadas.",
      otherTech: "// outras tecnologias",
      categories: {
        frontend: { label: "Front-End", comment: "// interfaces e experiência do usuário" },
        backend: { label: "Back-End", comment: "// servidores, APIs e lógica de negócio" },
        database: { label: "Banco de Dados", comment: "// modelagem, consultas e persistência" },
        testing: { label: "Testes & QA", comment: "// qualidade de ponta a ponta" },
        devops: { label: "Ferramentas & DevOps", comment: "// pipeline, build e infraestrutura" },
      },
    },
    experience: {
      eyebrow: "// trajetória profissional",
      heading: "Minha",
      headingHighlight: "Experiência",
      description:
        "Uma linha do tempo dos projetos e empresas que moldaram meu perfil técnico. Clique em cada card para ver os detalhes.",
      typeLabels: {
        "full-time": "Tempo integral",
        internship: "Estágio",
        contract: "Contrato",
      },
      educationLabel: "Formação",
      degreeName: "Técnico em Análise e Desenvolvimento de Sistemas",
      jobs: [
        {
          role: "Analista Desenvolvedor II",
          period: "Jun 2025 — Dez 2025",
          location: "São Paulo, SP",
          activities: [
            "Criação do modelo relacional em Django ORM para desembaraço aduaneiro (PostgreSQL).",
            "Script com Watchdog para monitoramento de diretórios e processamento automático de múltiplos XMLs.",
            "Parsing avançado de XML com persistência, tratamento de exceções e logs detalhados.",
            "Configuração de logging estruturado para rastreabilidade de operações críticas.",
            "Centralização de lógica de insert/update reutilizável e idempotente.",
            "Integração backend (Django REST) com frontend React.js: grids dinâmicos com filtros, paginação e edição inline.",
            "Otimização de CSS modularizado e responsivo com separação de cabeçalho fixo.",
          ],
        },
        {
          role: "Analista QA",
          period: "Jun 2024 — Fev 2025",
          location: "Remoto",
          activities: [
            "Automação de testes com Selenium e Pytest para múltiplos fluxos de negócio.",
            "Criação de suítes de testes reutilizáveis e de fácil manutenção em Python.",
            "Integração de testes automatizados em pipelines CI/CD com GitHub Actions.",
          ],
        },
        {
          role: "Estagiário de Desenvolvimento de Sistemas",
          period: "Jan 2022 — Jun 2024",
          location: "São Paulo, SP",
          activities: [
            "Desenvolvimento de sistema de prevenção a vazamento de dados com GeneXus.",
            "Liderança na implementação de automação de testes com Python e Selenium.",
            "Estruturação de cenários de regressão e testes de interface.",
            "Colaboração com equipe de desenvolvimento para correção de inconsistências.",
            "Code reviews e versionamento com Git/GitFlow.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "// o que construí",
      heading: "Meus",
      headingHighlight: "Projetos",
      description:
        "Seleção de projetos pessoais que demonstram minhas habilidades em diferentes stacks e contextos de uso.",
      moreOnGithub: "Mais projetos disponíveis no GitHub",
      viewAllGithub: "Ver todos no GitHub",
      viewCode: "Ver código",
      demo: "Demonstração",
      items: [
        {
          title: "DocManager API",
          description: "API de gerenciamento de documentos com Django REST e autenticação JWT",
          longDescription:
            "Sistema backend completo para upload, categorização e controle de acesso a documentos. Inclui autenticação JWT, permissões granulares, upload de arquivos para S3 e versionamento de documentos. Documentado com Swagger/OpenAPI.",
        },
        {
          title: "Analytics Dashboard",
          description: "Dashboard interativo com React e gráficos dinâmicos",
          longDescription:
            "Painel de visualização de dados construído com React e TypeScript. Exibe métricas em tempo real com gráficos interativos, filtros dinâmicos, exportação de relatórios em PDF/CSV e tema claro/escuro. Responsivo e acessível.",
        },
        {
          title: "PriceBot Scraper",
          description: "Ferramenta de web scraping e alertas com Selenium e Telegram Bot",
          longDescription:
            "Bot automatizado que monitora preços em e-commerces, detecta variações e envia alertas via Telegram. Utiliza Selenium para scraping, Pytest para testes, agenda coletas com APScheduler e persiste dados em SQLite.",
        },
      ],
    },
    contact: {
      eyebrow: "// vamos conversar",
      heading: "Entre em",
      headingHighlight: "Contato",
      description:
        "Aberto a oportunidades de emprego, freelas e colaborações. Respondo em até 24 horas.",
      locationLabel: "Localização",
      locationValue: "São Paulo, SP – Brasil",
      socialsLabel: "// redes sociais",
      namePlaceholder: "Seu nome completo",
      emailPlaceholder: "seuemail@exemplo.com",
      messagePlaceholder: "Olá Flavio, gostaria de conversar sobre...",
      nameLabel: "Nome *",
      emailLabel: "E-mail *",
      messageLabel: "Mensagem *",
      send: "Enviar Mensagem",
      sending: "Enviando…",
      successTitle: "Mensagem enviada!",
      successDesc: "Obrigado pelo contato. Responderei em breve.",
      sendAnother: "Enviar outra mensagem",
      errorMsg: "Ocorreu um erro. Tente novamente.",
      orSendTo: "Ou envie diretamente para",
      validationName: "Nome obrigatório",
      validationEmail: "E-mail inválido",
      validationMessage: "Mensagem muito curta (mín. 10 chars)",
    },
    footer: {
      madeWith: "Feito com",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Available for new opportunities",
      tagline:
        "Developer with solid experience in Django, React.js and TypeScript. Focused on integrated systems, test automation and high-performance APIs.",
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
      roles: [
        "Back-End Developer",
        "Front-End Developer",
        "Django & FastAPI Dev",
        "React & TypeScript Dev",
        "Automation & QA",
      ],
    },
    about: {
      eyebrow: "// about me",
      heading: "Who am",
      headingHighlight: "I?",
      p1: "Developer with solid experience in Django, React.js and TypeScript. I focus on integrated systems, test automation and building robust APIs, applying agile methodologies to ensure quality and performance.",
      p2: "Throughout my career, I have worked with customs clearance, QA test automation and full-stack system development, always striving to write clean, testable and maintainable code.",
      infoName: "Name",
      infoLocation: "Location",
      infoEmail: "Email",
      langs: ["🇧🇷 Portuguese (Native)", "🇺🇸 English (Fluent)", "🇪🇸 Spanish (Basic)"],
      downloadCV: "Download CV",
      experienceLabel: "Experience",
      stacksLabel: "Stacks",
      photoPlaceholder: "Replace with",
    },
    skills: {
      eyebrow: "// technical skills",
      heading: "My",
      headingHighlight: "Skills",
      description:
        "Technologies and tools I use daily to build robust, scalable and well-tested solutions.",
      otherTech: "// other technologies",
      categories: {
        frontend: { label: "Front-End", comment: "// interfaces & user experience" },
        backend: { label: "Back-End", comment: "// servers, APIs & business logic" },
        database: { label: "Database", comment: "// modeling, queries & persistence" },
        testing: { label: "Testing & QA", comment: "// end-to-end quality" },
        devops: { label: "Tools & DevOps", comment: "// pipeline, build & infrastructure" },
      },
    },
    experience: {
      eyebrow: "// professional journey",
      heading: "My",
      headingHighlight: "Experience",
      description:
        "A timeline of the projects and companies that shaped my technical profile. Click each card to see details.",
      typeLabels: {
        "full-time": "Full-time",
        internship: "Internship",
        contract: "Contract",
      },
      educationLabel: "Education",
      degreeName: "Technical Degree in Systems Analysis and Development",
      jobs: [
        {
          role: "Developer Analyst II",
          period: "Jun 2025 — Dec 2025",
          location: "São Paulo, SP",
          activities: [
            "Created relational model in Django ORM for customs clearance (PostgreSQL).",
            "Script with Watchdog for directory monitoring and automatic processing of multiple XMLs.",
            "Advanced XML parsing with persistence, exception handling and detailed logs.",
            "Structured logging configuration for traceability of critical operations.",
            "Centralized reusable and idempotent insert/update logic.",
            "Backend (Django REST) integration with React.js frontend: dynamic grids with filters, pagination and inline editing.",
            "Optimized modular and responsive CSS with fixed header separation.",
          ],
        },
        {
          role: "QA Analyst",
          period: "Jun 2024 — Feb 2025",
          location: "Remote",
          activities: [
            "Test automation with Selenium and Pytest for multiple business flows.",
            "Creation of reusable and maintainable test suites in Python.",
            "Integration of automated tests into CI/CD pipelines with GitHub Actions.",
          ],
        },
        {
          role: "Systems Development Intern",
          period: "Jan 2022 — Jun 2024",
          location: "São Paulo, SP",
          activities: [
            "Development of a data leak prevention system using GeneXus.",
            "Led the implementation of test automation with Python and Selenium.",
            "Structured regression and UI test scenarios.",
            "Collaborated with the development team to fix inconsistencies.",
            "Code reviews and versioning with Git/GitFlow.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "// what I've built",
      heading: "My",
      headingHighlight: "Projects",
      description:
        "A selection of personal projects that showcase my skills across different stacks and use cases.",
      moreOnGithub: "More projects available on GitHub",
      viewAllGithub: "View all on GitHub",
      viewCode: "View code",
      demo: "Live demo",
      items: [
        {
          title: "DocManager API",
          description: "Document management API with Django REST and JWT authentication",
          longDescription:
            "Full backend system for uploading, categorizing and controlling document access. Includes JWT authentication, granular permissions, file upload to S3 and document versioning. Documented with Swagger/OpenAPI.",
        },
        {
          title: "Analytics Dashboard",
          description: "Interactive dashboard with React and dynamic charts",
          longDescription:
            "Data visualization panel built with React and TypeScript. Displays real-time metrics with interactive charts, dynamic filters, PDF/CSV report export and light/dark theme. Responsive and accessible.",
        },
        {
          title: "PriceBot Scraper",
          description: "Web scraping and alert tool with Selenium and Telegram Bot",
          longDescription:
            "Automated bot that monitors prices on e-commerce sites, detects changes and sends Telegram alerts. Uses Selenium for scraping, Pytest for testing, APScheduler for scheduling and persists data in SQLite.",
        },
      ],
    },
    contact: {
      eyebrow: "// let's talk",
      heading: "Get in",
      headingHighlight: "Touch",
      description:
        "Open to job opportunities, freelance work and collaborations. I reply within 24 hours.",
      locationLabel: "Location",
      locationValue: "São Paulo, SP – Brazil",
      socialsLabel: "// social media",
      namePlaceholder: "Your full name",
      emailPlaceholder: "youremail@example.com",
      messagePlaceholder: "Hi Flavio, I'd like to talk about...",
      nameLabel: "Name *",
      emailLabel: "Email *",
      messageLabel: "Message *",
      send: "Send Message",
      sending: "Sending…",
      successTitle: "Message sent!",
      successDesc: "Thanks for reaching out. I'll get back to you soon.",
      sendAnother: "Send another message",
      errorMsg: "An error occurred. Please try again.",
      orSendTo: "Or send directly to",
      validationName: "Name is required",
      validationEmail: "Invalid email",
      validationMessage: "Message too short (min. 10 chars)",
    },
    footer: {
      madeWith: "Made with",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Skills",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Disponible para nuevas oportunidades",
      tagline:
        "Desarrollador con sólida experiencia en Django, React.js y TypeScript. Enfocado en sistemas integrados, automatización de pruebas y APIs de alto rendimiento.",
      ctaProjects: "Ver Proyectos",
      ctaContact: "Contáctame",
      roles: [
        "Desarrollador Back-End",
        "Desarrollador Front-End",
        "Django & FastAPI Dev",
        "React & TypeScript Dev",
        "Automatización & QA",
      ],
    },
    about: {
      eyebrow: "// sobre mí",
      heading: "¿Quién",
      headingHighlight: "soy?",
      p1: "Desarrollador con sólida experiencia en Django, React.js y TypeScript. Me enfoco en sistemas integrados, automatización de pruebas y construcción de APIs robustas, aplicando metodologías ágiles para garantizar calidad y rendimiento.",
      p2: "A lo largo de mi carrera, he trabajado con despacho aduanero, automatización de pruebas QA y desarrollo de sistemas full-stack, siempre buscando escribir código limpio, testeable y fácil de mantener.",
      infoName: "Nombre",
      infoLocation: "Ubicación",
      infoEmail: "Correo",
      langs: ["🇧🇷 Portugués (Nativo)", "🇺🇸 Inglés (Fluido)", "🇪🇸 Español (Intermedio)"],
      downloadCV: "Descargar CV",
      experienceLabel: "Experiencia",
      stacksLabel: "Stacks",
      photoPlaceholder: "Reemplazar con",
    },
    skills: {
      eyebrow: "// habilidades técnicas",
      heading: "Mis",
      headingHighlight: "Skills",
      description:
        "Tecnologías y herramientas que uso a diario para construir soluciones robustas, escalables y bien testeadas.",
      otherTech: "// otras tecnologías",
      categories: {
        frontend: { label: "Front-End", comment: "// interfaces y experiencia del usuario" },
        backend: { label: "Back-End", comment: "// servidores, APIs y lógica de negocio" },
        database: { label: "Base de Datos", comment: "// modelado, consultas y persistencia" },
        testing: { label: "Pruebas & QA", comment: "// calidad de extremo a extremo" },
        devops: { label: "Herramientas & DevOps", comment: "// pipeline, build e infraestructura" },
      },
    },
    experience: {
      eyebrow: "// trayectoria profesional",
      heading: "Mi",
      headingHighlight: "Experiencia",
      description:
        "Una línea de tiempo de los proyectos y empresas que formaron mi perfil técnico. Haz clic en cada tarjeta para ver los detalles.",
      typeLabels: {
        "full-time": "Tiempo completo",
        internship: "Pasantía",
        contract: "Contrato",
      },
      educationLabel: "Formación",
      degreeName: "Técnico en Análisis y Desarrollo de Sistemas",
      jobs: [
        {
          role: "Analista Desarrollador II",
          period: "Jun 2025 — Dic 2025",
          location: "São Paulo, SP",
          activities: [
            "Creación del modelo relacional en Django ORM para despacho aduanero (PostgreSQL).",
            "Script con Watchdog para monitoreo de directorios y procesamiento automático de múltiples XMLs.",
            "Parseo avanzado de XML con persistencia, manejo de excepciones y logs detallados.",
            "Configuración de logging estructurado para trazabilidad de operaciones críticas.",
            "Centralización de lógica de insert/update reutilizable e idempotente.",
            "Integración backend (Django REST) con frontend React.js: grids dinámicos con filtros, paginación y edición inline.",
            "Optimización de CSS modularizado y responsivo con separación de cabecera fija.",
          ],
        },
        {
          role: "Analista QA",
          period: "Jun 2024 — Feb 2025",
          location: "Remoto",
          activities: [
            "Automatización de pruebas con Selenium y Pytest para múltiples flujos de negocio.",
            "Creación de suites de pruebas reutilizables y fáciles de mantener en Python.",
            "Integración de pruebas automatizadas en pipelines CI/CD con GitHub Actions.",
          ],
        },
        {
          role: "Pasante de Desarrollo de Sistemas",
          period: "Ene 2022 — Jun 2024",
          location: "São Paulo, SP",
          activities: [
            "Desarrollo de sistema de prevención de fuga de datos con GeneXus.",
            "Liderazgo en la implementación de automatización de pruebas con Python y Selenium.",
            "Estructuración de escenarios de regresión y pruebas de interfaz.",
            "Colaboración con el equipo de desarrollo para corrección de inconsistencias.",
            "Code reviews y versionado con Git/GitFlow.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "// lo que construí",
      heading: "Mis",
      headingHighlight: "Proyectos",
      description:
        "Selección de proyectos personales que demuestran mis habilidades en diferentes stacks y contextos de uso.",
      moreOnGithub: "Más proyectos disponibles en GitHub",
      viewAllGithub: "Ver todos en GitHub",
      viewCode: "Ver código",
      demo: "Demostración",
      items: [
        {
          title: "DocManager API",
          description: "API de gestión de documentos con Django REST y autenticación JWT",
          longDescription:
            "Sistema backend completo para carga, categorización y control de acceso a documentos. Incluye autenticación JWT, permisos granulares, carga de archivos a S3 y versionado de documentos. Documentado con Swagger/OpenAPI.",
        },
        {
          title: "Analytics Dashboard",
          description: "Panel interactivo con React y gráficos dinámicos",
          longDescription:
            "Panel de visualización de datos construido con React y TypeScript. Muestra métricas en tiempo real con gráficos interactivos, filtros dinámicos, exportación de reportes en PDF/CSV y tema claro/oscuro. Responsivo y accesible.",
        },
        {
          title: "PriceBot Scraper",
          description: "Herramienta de web scraping y alertas con Selenium y Telegram Bot",
          longDescription:
            "Bot automatizado que monitorea precios en e-commerces, detecta variaciones y envía alertas por Telegram. Utiliza Selenium para scraping, Pytest para pruebas, APScheduler para programación y SQLite para persistencia.",
        },
      ],
    },
    contact: {
      eyebrow: "// hablemos",
      heading: "Ponerse en",
      headingHighlight: "Contacto",
      description:
        "Abierto a oportunidades laborales, freelance y colaboraciones. Respondo en menos de 24 horas.",
      locationLabel: "Ubicación",
      locationValue: "São Paulo, SP – Brasil",
      socialsLabel: "// redes sociales",
      namePlaceholder: "Tu nombre completo",
      emailPlaceholder: "tuemail@ejemplo.com",
      messagePlaceholder: "Hola Flavio, me gustaría hablar sobre...",
      nameLabel: "Nombre *",
      emailLabel: "Correo *",
      messageLabel: "Mensaje *",
      send: "Enviar Mensaje",
      sending: "Enviando…",
      successTitle: "¡Mensaje enviado!",
      successDesc: "Gracias por contactarme. Te responderé pronto.",
      sendAnother: "Enviar otro mensaje",
      errorMsg: "Ocurrió un error. Por favor inténtalo de nuevo.",
      orSendTo: "O envía directamente a",
      validationName: "El nombre es obligatorio",
      validationEmail: "Correo inválido",
      validationMessage: "Mensaje muy corto (mín. 10 chars)",
    },
    footer: {
      madeWith: "Hecho con",
    },
  },
} as const;

export type Translations = (typeof translations)["pt"];
