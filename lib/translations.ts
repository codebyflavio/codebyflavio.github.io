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
            "Projetou modelo relacional em Django ORM para desembaraço aduaneiro, garantindo integridade referencial e performance nas consultas PostgreSQL.",
            "Automatizou o processamento de múltiplos XMLs de notas fiscais com Watchdog, eliminando importações manuais e reduzindo erros operacionais.",
            "Implementou parsing avançado de XML com tratamento de exceções e logging estruturado, garantindo rastreabilidade completa de operações críticas.",
            "Centralizou lógica de insert/update idempotente e reutilizável, tornando re-execuções seguras sem risco de duplicidade.",
            "Integrou API Django REST ao frontend React.js com grids dinâmicos, filtros, paginação e edição inline — entregando interface operacional ao time de logística.",
            "Modularizou e otimizou CSS responsivo com separação de cabeçalho fixo, melhorando consistência visual e manutenibilidade.",
          ],
        },
        {
          role: "Analista QA",
          period: "Jun 2024 — Fev 2025",
          location: "Remoto",
          activities: [
            "Criou suíte E2E com Selenium e Pytest cobrindo os principais fluxos de negócio, substituindo validações manuais repetitivas e acelerando o ciclo de QA.",
            "Adotou o padrão Page Object Model (POM), tornando os testes reutilizáveis e fáceis de manter à medida que o produto evoluía.",
            "Integrou os testes automatizados ao pipeline CI/CD via GitHub Actions, detectando regressões automaticamente a cada pull request e antes de cada deploy.",
          ],
        },
        {
          role: "Estagiário de Desenvolvimento de Sistemas",
          period: "Jan 2022 — Jun 2024",
          location: "São Paulo, SP",
          activities: [
            "Desenvolveu módulo de prevenção a vazamento de dados em GeneXus, protegendo informações sensíveis de clientes na camada de aplicação.",
            "Liderou a introdução de automação de testes com Python e Selenium no time, documentando o processo e capacitando colegas.",
            "Estruturou cenários de regressão e testes de interface que serviram de base para validações contínuas do produto.",
            "Contribuiu para code reviews, padronizando práticas e corrigindo inconsistências antes de chegarem à produção.",
            "Aplicou Git/GitFlow no versionamento de código, organizando branches e garantindo rastreabilidade das mudanças.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "// o que construí",
      heading: "Meus",
      headingHighlight: "Projetos",
      description:
        "Estudos de caso reais: o problema, como abordei a solução e o que foi entregue.",
      moreOnGithub: "Mais projetos disponíveis no GitHub",
      viewAllGithub: "Ver todos no GitHub",
      viewCode: "Ver código",
      demo: "Demonstração",
      caseStudyTabs: {
        problem: "// problema",
        solution: "// solução",
        result: "// resultado",
      },
      items: [
        {
          title: "DocManager API",
          description: "API de gerenciamento de documentos com Django REST e autenticação JWT",
          story:
            "Empresas perdem horas buscando arquivos desatualizados, sem saber quem acessou ou alterou o quê. Sem controle de versão e sem auditoria, documentos críticos são sobrescritos ou extraviados sem deixar rastro.",
          longDescription:
            "Construí uma API RESTful em Django com autenticação JWT em camadas, sistema de permissões por grupo, upload direto para AWS S3 com geração de URLs presignadas e controle de versão por hash de conteúdo. Documentação completa via Swagger/OpenAPI.",
          result:
            "API com cobertura de testes nos endpoints críticos e documentação Swagger pronta para integração. O controle de versão por hash evita sobrescrita acidental, e o sistema de permissões escala para múltiplos times sem retrabalho de código.",
        },
        {
          title: "Analytics Dashboard",
          description: "Dashboard interativo com React e gráficos dinâmicos",
          story:
            "Dados presos em planilhas não contam histórias — gerentes precisam de respostas em segundos, não em horas de exportação e formatação manual. A falta de visibilidade em tempo real atrasa decisões e esconde tendências importantes.",
          longDescription:
            "Desenvolvi o dashboard com React e TypeScript, utilizando Recharts para gráficos responsivos, Context API para gerenciamento de estado dos filtros, e exportação via jsPDF/PapaParse. Tema claro/escuro persistido em localStorage. Responsivo e acessível.",
          result:
            "Interface 100% client-side com carregamento otimizado e sem dependência de servidor para geração de relatórios. Suporte a temas persistido, acessível em qualquer resolução e exportação para PDF/CSV com um clique.",
        },
        {
          title: "PriceBot Scraper",
          description: "Ferramenta de web scraping e alertas com Selenium e Telegram Bot",
          story:
            "Monitorar preços manualmente em e-commerces é inviável: você precisa checar dezenas de páginas todos os dias e ainda assim pode perder a janela da promoção. O problema é de atenção e escala — humanos não conseguem fazer isso de forma confiável.",
          longDescription:
            "Usei Selenium para scraping dinâmico com rotação de User-Agent, APScheduler para agendamento de coletas horárias, SQLite para histórico de variações e a API do Telegram Bot para alertas instantâneos. Cobertura de testes com Pytest.",
          result:
            "Bot em produção monitorando múltiplos produtos simultaneamente, com histórico de preços persistido e alertas em tempo real via Telegram. A cobertura com Pytest garante estabilidade do scraping mesmo diante de mudanças no layout dos sites.",
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
            "Designed relational model in Django ORM for customs clearance, ensuring referential integrity and optimized PostgreSQL queries.",
            "Automated XML invoice processing with Watchdog, eliminating manual imports and reducing operational errors.",
            "Implemented advanced XML parsing with exception handling and structured logging, ensuring full traceability of critical operations.",
            "Centralized reusable, idempotent insert/update logic, making re-executions safe and duplication-free.",
            "Integrated Django REST API with React.js frontend via dynamic grids, filters, pagination and inline editing — delivering an operational interface to the logistics team.",
            "Modularized and optimized responsive CSS with fixed header separation, improving visual consistency and maintainability.",
          ],
        },
        {
          role: "QA Analyst",
          period: "Jun 2024 — Feb 2025",
          location: "Remote",
          activities: [
            "Built an E2E test suite with Selenium and Pytest covering key business flows, replacing repetitive manual validations and accelerating the QA cycle.",
            "Adopted the Page Object Model (POM) pattern, making tests reusable and easy to maintain as the product evolved.",
            "Integrated automated tests into the CI/CD pipeline via GitHub Actions, automatically catching regressions on every pull request and before each deploy.",
          ],
        },
        {
          role: "Systems Development Intern",
          period: "Jan 2022 — Jun 2024",
          location: "São Paulo, SP",
          activities: [
            "Developed a data leak prevention module in GeneXus, protecting sensitive customer information at the application layer.",
            "Led the introduction of test automation with Python and Selenium on the team, documenting the process and onboarding colleagues.",
            "Structured regression and UI test scenarios that became the foundation for the product's ongoing validation.",
            "Contributed to code reviews, standardizing practices and catching inconsistencies before they reached production.",
            "Applied Git/GitFlow for code versioning, organizing branches and ensuring full traceability of changes.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "// what I've built",
      heading: "My",
      headingHighlight: "Projects",
      description:
        "Real case studies: the problem, how I approached the solution and what was delivered.",
      moreOnGithub: "More projects available on GitHub",
      viewAllGithub: "View all on GitHub",
      viewCode: "View code",
      demo: "Live demo",
      caseStudyTabs: {
        problem: "// problem",
        solution: "// solution",
        result: "// result",
      },
      items: [
        {
          title: "DocManager API",
          description: "Document management API with Django REST and JWT authentication",
          story:
            "Companies waste hours hunting for outdated files with no audit trail of who changed what. Without version control or access tracking, critical documents get overwritten or lost without a trace.",
          longDescription:
            "Built a layered Django REST API with JWT authentication, group-based permission system, direct AWS S3 upload with presigned URL generation and content-hash versioning. Full Swagger/OpenAPI documentation.",
          result:
            "API with test coverage on critical endpoints and Swagger documentation ready for integration. Hash-based versioning prevents accidental overwrites, and the permission system scales to multiple teams without code rework.",
        },
        {
          title: "Analytics Dashboard",
          description: "Interactive dashboard with React and dynamic charts",
          story:
            "Data locked in spreadsheets doesn't tell a story — managers need answers in seconds, not hours of manual export and formatting. The lack of real-time visibility delays decisions and hides important trends.",
          longDescription:
            "Built the dashboard with React and TypeScript, using Recharts for responsive charts, Context API for filter state management, and jsPDF/PapaParse for exports. Light/dark theme persisted in localStorage. Responsive and accessible.",
          result:
            "100% client-side interface with optimized loading and no server dependency for report generation. Persistent theme support, accessible at any resolution and one-click PDF/CSV export.",
        },
        {
          title: "PriceBot Scraper",
          description: "Web scraping and alert tool with Selenium and Telegram Bot",
          story:
            "Manually monitoring prices across e-commerce sites is unsustainable: you'd need to check dozens of pages daily and still risk missing the promotion window. It's an attention and scale problem — humans simply can't do this reliably.",
          longDescription:
            "Used Selenium for dynamic scraping with User-Agent rotation, APScheduler for hourly scheduled collections, SQLite for price variation history and the Telegram Bot API for instant alerts. Test coverage with Pytest.",
          result:
            "Bot running in production monitoring multiple products simultaneously, with persisted price history and real-time Telegram alerts. Pytest coverage ensures scraping stability even as site layouts change.",
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
            "Diseñó modelo relacional en Django ORM para despacho aduanero, garantizando integridad referencial y consultas optimizadas en PostgreSQL.",
            "Automatizó el procesamiento de múltiples XMLs de facturas con Watchdog, eliminando importaciones manuales y reduciendo errores operacionales.",
            "Implementó parseo avanzado de XML con manejo de excepciones y logging estructurado, garantizando trazabilidad completa de operaciones críticas.",
            "Centralizó lógica de insert/update idempotente y reutilizable, haciendo las re-ejecuciones seguras y sin riesgo de duplicados.",
            "Integró API Django REST con frontend React.js con grids dinámicos, filtros, paginación y edición inline — entregando interfaz operacional al equipo de logística.",
            "Modularizó y optimizó CSS responsivo con separación de cabecera fija, mejorando consistencia visual y mantenibilidad.",
          ],
        },
        {
          role: "Analista QA",
          period: "Jun 2024 — Feb 2025",
          location: "Remoto",
          activities: [
            "Construyó suite E2E con Selenium y Pytest cubriendo los principales flujos de negocio, reemplazando validaciones manuales repetitivas y acelerando el ciclo de QA.",
            "Adoptó el patrón Page Object Model (POM), haciendo las pruebas reutilizables y fáciles de mantener a medida que el producto evolucionaba.",
            "Integró las pruebas automatizadas al pipeline CI/CD vía GitHub Actions, detectando regresiones automáticamente en cada pull request y antes de cada deploy.",
          ],
        },
        {
          role: "Pasante de Desarrollo de Sistemas",
          period: "Ene 2022 — Jun 2024",
          location: "São Paulo, SP",
          activities: [
            "Desarrolló módulo de prevención de fuga de datos en GeneXus, protegiendo información sensible de clientes en la capa de aplicación.",
            "Lideró la introducción de automatización de pruebas con Python y Selenium en el equipo, documentando el proceso y capacitando a colegas.",
            "Estructuró escenarios de regresión y pruebas de interfaz que sirvieron de base para las validaciones continuas del producto.",
            "Contribuyó en code reviews, estandarizando prácticas y corrigiendo inconsistencias antes de llegar a producción.",
            "Aplicó Git/GitFlow para versionado del código, organizando branches y garantizando trazabilidad de todos los cambios.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "// lo que construí",
      heading: "Mis",
      headingHighlight: "Proyectos",
      description:
        "Casos de estudio reales: el problema, cómo abordé la solución y qué fue entregado.",
      moreOnGithub: "Más proyectos disponibles en GitHub",
      viewAllGithub: "Ver todos en GitHub",
      viewCode: "Ver código",
      demo: "Demostración",
      caseStudyTabs: {
        problem: "// problema",
        solution: "// solución",
        result: "// resultado",
      },
      items: [
        {
          title: "DocManager API",
          description: "API de gestión de documentos con Django REST y autenticación JWT",
          story:
            "Las empresas pierden horas buscando archivos desactualizados, sin saber quién accedió o modificó qué. Sin control de versiones ni auditoría, los documentos críticos se sobrescriben o se pierden sin dejar rastro.",
          longDescription:
            "Construí una API RESTful en Django con autenticación JWT por capas, sistema de permisos por grupo, carga directa a AWS S3 con generación de URLs presignadas y control de versión por hash de contenido. Documentación completa con Swagger/OpenAPI.",
          result:
            "API con cobertura de pruebas en endpoints críticos y documentación Swagger lista para integración. El versionado por hash evita sobrescritura accidental, y el sistema de permisos escala a múltiples equipos sin retrabajo.",
        },
        {
          title: "Analytics Dashboard",
          description: "Panel interactivo con React y gráficos dinámicos",
          story:
            "Los datos atrapados en hojas de cálculo no cuentan historias — los gerentes necesitan respuestas en segundos, no horas de exportación y formateo manual. La falta de visibilidad en tiempo real retrasa decisiones y oculta tendencias importantes.",
          longDescription:
            "Desarrollé el dashboard con React y TypeScript, usando Recharts para gráficos responsivos, Context API para gestión del estado de filtros, y jsPDF/PapaParse para exportaciones. Tema claro/oscuro persistido en localStorage. Responsivo y accesible.",
          result:
            "Interfaz 100% client-side con carga optimizada y sin dependencia de servidor para generación de reportes. Soporte de temas persistente, accesible en cualquier resolución y exportación a PDF/CSV con un clic.",
        },
        {
          title: "PriceBot Scraper",
          description: "Herramienta de web scraping y alertas con Selenium y Telegram Bot",
          story:
            "Monitorear precios manualmente en e-commerces es insostenible: habría que revisar decenas de páginas diariamente y aun así arriesgarse a perder la ventana de la promoción. Es un problema de atención y escala — los humanos simplemente no pueden hacerlo de forma confiable.",
          longDescription:
            "Usé Selenium para scraping dinámico con rotación de User-Agent, APScheduler para colectas horarias programadas, SQLite para historial de variaciones y la API del Telegram Bot para alertas instantáneas. Cobertura de pruebas con Pytest.",
          result:
            "Bot en producción monitoreando múltiples productos simultáneamente, con historial de precios persistido y alertas en tiempo real por Telegram. La cobertura con Pytest garantiza estabilidad del scraping incluso ante cambios en el layout de los sitios.",
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
