export default {
  main: {
    role: {
      title: "SOFTWARE",
      subtitle: "ENGINEER",
    },
    description:
      "Um dos meus maiores prazeres é dar vida a interfaces. Transformar ideias em experiências acessíveis e visualmente deslubrantes.",
  },
  home: {
    introduction: {
      title: "Guilherme Nascimento",
      description:
        "Bacharel em Ciência da Computação & Desenvolvedor Web. Apaixonado por construir ferramentas e explorar linguagens de programação.",
    },
    linksTitle: "Meus Links",
  },
  titles: {
    experience: {
      title: "+5 Anos",
      subtitle: "De Experiência",
    },
    projects: {
      title: "Projetos",
      subtitle: "Recentes",
    },
  },

  projects: [
    {
      id: 8,
      title: "Dusk Lang",
      year: "2025",
      description: {
        simple:
          "Uma small/lightweight statically typed scripting language inspirada em Lua, Python, Zig & Rust",
      },
      screenshots: ["/assets/images/screenshots/dusk/1.png"],
      sourceURL: "https://github.com/guilhermeg2k/dusk-lang",
    },
    {
      id: 1,
      title: "Anipool",
      year: "2022",
      description: {
        simple:
          "O Anipool é uma plataforma para criação quizes sobre animes e mangás",
      },
      screenshots: ["/assets/images/screenshots/anipool/anipool-1.webp"],
      sourceURL: "https://github.com/guilhermeg2k/anipool",
      previewURL: "https://anipool.g2k.app",
    },
    {
      id: 2,
      title: "Anilib",
      description: {
        simple:
          "O Anilib é uma plataforma de streaming local para animes que usa a API do AniList como fonte de dados",
      },
      year: "2022",
      screenshots: ["/assets/images/screenshots/anilib/anilib-1.webp"],
      sourceURL: "https://github.com/guilhermeg2k/anilib",
      previewURL: null,
    },
    {
      id: 4,
      title: "Mercury",
      year: "2022",
      description: {
        simple: "O Mercury é uma simples plataforma web de CI/CD",
      },
      screenshots: ["/assets/images/screenshots/mercury/mercury-1.webp"],
      sourceURL: "https://github.com/Manquit-Devs/mercury_f",
      previewURL: null,
    },
    {
      id: 3,
      title: "Neofy",
      year: "2021",
      description: {
        simple:
          "Neofy é um cliente do Spotify para web que utiliza a API e o SDK do Spotify para reproduzir músicas no navegador",
      },
      screenshots: ["/assets/images/screenshots/neofy/neofy-1.webp"],
      sourceURL: "https://github.com/guilhermeg2k/neofy",
      previewURL: "https://neofy.vercel.app/",
    },
    {
      id: 5,
      title: "Spotify Landing Clone",
      year: "2021",
      description: {
        simple: "Esse é um clone da landing page do Spotify",
      },
      screenshots: [
        "/assets/images/screenshots/spotify-clone/spotify-clone-1.webp",
      ],
      sourceURL: "https://github.com/guilhermeg2k/spotify-clone",
      previewURL: "https://guilhermeg2k.github.io/spotify-clone/",
    },
    {
      id: 6,
      title: "HLTV clone",
      year: "2020",
      description: {
        simple: "Esse é um clone da página inicial da HLTV.org",
      },
      screenshots: ["/assets/images/screenshots/hltv-clone/hltv-clone-1.webp"],
      sourceURL: "https://github.com/guilhermeg2k/hltv-clone",
      previewURL: "https://guilhermeg2k.github.io/hltv-clone/build/",
    },
    {
      id: 7,
      title: "Blog template",
      year: "2021",
      description: {
        simple: "Um simples template para blog",
      },
      screenshots: [
        "/assets/images/screenshots/blog-template/blog-template-1.webp",
      ],
      sourceURL: "https://github.com/guilhermeg2k/blog-template",
      previewURL: "https://blog-template-guilhermeg2k.vercel.app/",
    },
  ],

  works: [
    {
      company: "Cyan Agroanalytics",
      position: "Front-End Developer",
      dateRange: "Out. 2021 - Atual",
      description:
        "Desenvolvimento e otimização de interfaces, painéis e ferramentas de monitoramento para uma plataforma de inteligência geoclimática, com participação ativa em iniciativas de alto impacto, como a migração de infraestrutura da AWS para o GCP.",
      logoUrl: "/assets/images/logo/cyan.jpeg",
      techStack: [
        "Typescript",
        "Javascript",
        "React",
        "Material-UI",
        "OpenLayers",
        "Zustand",
        "Vite",
        "Vitest",
        "Jest/Vitest",
        "Enzyme",
        "React Testing Library",
        "NodeJs",
        "Flutter",
      ],
    },
    {
      company: "Tribunal de Contas da União (TCU)",
      position: "Estagiário",
      dateRange: "Jan. 2020 - Oct. 2021",
      description: "Desenvolvimento e manutenção de aplicações ORACLE APEX",
      logoUrl: "/assets/images/logo/tcu.jpg",
      techStack: [
        "Oracle Apex",
        "PLSQL",
        "HTML",
        "CSS",
        "JavaScript",
        "JQuery",
      ],
    },
  ],

  techs: [
    {
      title: "Typescript",
      iconURL: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
      title: "React",
      iconURL: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
    },
    {
      title: "HTML",
      iconURL: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    },
    {
      title: "CSS",
      iconURL: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    },
    {
      title: "TailwindCSS",
      iconURL: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
    {
      title: "NodeJS",
      iconURL: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      title: "Figma",
      iconURL: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
    },
    {
      title: "Fedora Linux",
      iconURL: "https://cdn.worldvectorlogo.com/logos/fedora-1.svg",
    },
    {
      title: "Git",
      iconURL: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    },
    {
      title: "Neovim",
      iconURL:
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/Neovim-mark.svg",
    },
    {
      title: "BUN",
      iconURL: "https://bun.sh/logo.svg",
    },
    {
      title: "VITE",
      iconURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png",
    },
    {
      title: "Zig",
      iconURL: "https://avatars.githubusercontent.com/u/27973237?v=4",
    },
  ],

  links: [
    {
      title: "Linkedin",
      iconURL: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
      link: "https://www.linkedin.com/in/guilherme-nascimento-b236b9176/",
    },
    {
      title: "Github",
      iconURL: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
      link: "https://github.com/guilhermeg2k",
    },
    {
      title: "Currículo",
      iconURL: "https://cdn.worldvectorlogo.com/logos/doc-icon-2000-03-.svg",
      link: "https://docs.google.com/document/d/1dXzlqErCCiJNkNZK8ofmygAFQgap51Ln73kq2qdKr2I",
    },
  ],

  footer: {
    createdBy:
      "PÁGINA CRIADA POR GUILHERMEG2K, CÓDIGO FONTE DISPONÍVEL NO GITHUB",
    iconsBy: "ICONES POR worldvectorlogo.com, flagicons.lipis.dev E HEROICONS",
  },
};
