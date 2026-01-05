export default {
  main: {
    role: {
      title: "SOFTWARE",
      subtitle: "ENGINEER",
    },
    description:
      "One of my greatest pleasures is bringing interfaces to life. Turning ideas into accessible and visually engaging experiences.",
  },
  home: {
    introduction: {
      title: "Guilherme Nascimento",
      description:
        "Computer Science Graduate & Web Developer. Passionate about building tools and exploring programming languages.",
    },
    linksTitle: "My Links",
  },
  titles: {
    experience: {
      title: "+5 Years",
      subtitle: "Of Experience",
    },
    projects: {
      title: "Recent",
      subtitle: "Projects",
    },
  },

  projects: [
    {
      id: 8,
      title: "Dusk Lang",
      year: "2025",
      description: {
        simple:
          "A small/lightweight statically typed scripting language inspired by Lua, Python, Zig & Rust",
        complete:
          "A simple blog template that i built while getting into NextJS world. It was one of my first projects using Next. I made it specially to study about compilers and practice writing code in zig",
      },
      screenshots: ["/assets/images/screenshots/dusk/1.png"],
      sourceURL: "https://github.com/guilhermeg2k/dusk-lang",
    },
    {
      id: 1,
      title: "Anipool",
      year: "2022",
      description: {
        simple: "Anipool is a platform to create anime/manga quizes",
        complete:
          "Anipool is a platform to create anime/manga quizes that is integrated with anilist. This project was created because i could not find a good place to create anime quizes like 'Who anime should i watch next?' or 'In your opinion which is the best anime of this season'. One thing about this project is that i could not find a dead simple date picker that works fine with tailwind without having to add a whole library around it, so i decided to build one (As we all do right? haha). Right now this project is released and on production, but i have a lot of plans for it, like adding more features, improving the UI and adding more integrations with anilist.",
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
          "Anilib is a local anime streaming platform that uses AniList API as anime data source",
        complete:
          "Anilib is a local anime streaming platform that uses AniList API as\
        data source. This project was made because i wanted to be able to\
        stream my animes to multi devices, specially to my TV. It have been a\
        great experience building it, i'm learning a lot about video encoding,\
        streaming and i had a good time creating the Video Player.",
      },
      year: "2022",
      tags: [
        { title: "TS", bgColor: "bg-blue-600" },
        { title: "REACT", bgColor: "bg-blue-400" },
        { title: "NEXTJS", bgColor: "bg-neutral-600" },
        { title: "TAILWINDCSS", bgColor: "bg-blue-500" },
        { title: "NODEJS", bgColor: "bg-emerald-600" },
        { title: "GRAPHQL", bgColor: "bg-rose-600" },
        { title: "Anilist API", bgColor: "bg-blue-700" },
        { title: "FFmpeg", bgColor: "bg-emerald-700" },
      ],
      screenshots: ["/assets/images/screenshots/anilib/anilib-1.webp"],
      sourceURL: "https://github.com/guilhermeg2k/anilib",
      previewURL: null,
    },
    {
      id: 3,
      title: "Neofy",
      year: "2021",
      description: {
        simple:
          "Neofy is web Spotify client that uses Spotify API and Spotify SDK to get user data and play songs on the browser",
        complete:
          "Neofy is web Spotify client that uses Spotify API and Spotify SDK to get user data and play songs on the browser. One cool thing about this project is that i had to implement the Spotify Authorization Flow which was a really good learning experience about authorization",
      },
      tags: [
        { title: "TS", bgColor: "bg-blue-600" },
        { title: "REACT", bgColor: "bg-blue-400" },
        { title: "NEXTJS", bgColor: "bg-neutral-600" },
        { title: "SCSS", bgColor: "bg-pink-600" },
        { title: "SPOTIFY API", bgColor: "bg-green-600" },
        { title: "SPOTIFY SDK", bgColor: "bg-green-600" },
      ],
      screenshots: [
        "/assets/images/screenshots/neofy/neofy-1.webp",
        "/assets/images/screenshots/neofy/neofy-2.webp",
      ],
      sourceURL: "https://github.com/guilhermeg2k/neofy",
      previewURL: "https://neofy.vercel.app/",
    },
    {
      id: 5,
      title: "Spotify Landing Clone",
      year: "2021",
      description: {
        simple: "This is a clone of the Spotify landing page",
        complete:
          "This is a clone of the Spotify landing page. My main goal with this project was to improve my css skills and it was a great experience because i learned a lot.",
      },
      tags: [
        { title: "TS", bgColor: "bg-blue-600" },
        { title: "REACT", bgColor: "bg-blue-400" },
        { title: "CSS", bgColor: "bg-blue-500" },
        { title: "REACT-ROUTER", bgColor: "bg-red-600" },
      ],
      screenshots: [
        "/assets/images/screenshots/spotify-clone/spotify-clone-1.webp",
      ],
      sourceURL: "https://github.com/guilhermeg2k/spotify-clone",
      previewURL: "https://guilhermeg2k.github.io/spotify-clone/",
    },
    {
      id: 6,
      title: "hltv clone",
      year: "2020",
      description: {
        simple: "This is a clone of HLTV.org desktop home page",
        complete:
          "This is a clone of hltv.org desktop home page. I really enjoy playing CSGO so i thought it would be fun to made a clone of this website which is the biggest competitive news portal of the game.",
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
        simple: "A simple blog template",
      },
      screenshots: [
        "/assets/images/screenshots/blog-template/blog-template-1.webp",
      ],
      sourceURL: "https://github.com/guilhermeg2k/blog-template",
      previewURL: "https://blog-template-guilhermeg2k.vercel.app/",
    },
    {
      id: 4,
      title: "Mercury",
      year: "2022",
      description: {
        simple: "Mercury is a really simple CI/CD web platform",
      },
      tags: [
        { title: "TS", bgColor: "bg-blue-600" },
        { title: "REACT", bgColor: "bg-blue-400" },
        { title: "NEXTJS", bgColor: "bg-neutral-600" },
        { title: "MATERIAL-UI", bgColor: "bg-sky-800" },
        { title: "NODEJS", bgColor: "bg-emerald-600" },
        { title: "ExpressJS", bgColor: "bg-neutral-500" },
        { title: "SQLITE", bgColor: "bg-sky-500" },
        { title: "KnexJS", bgColor: "bg-orange-500" },
      ],
      screenshots: [
        "/assets/images/screenshots/mercury/mercury-1.webp",
        "/assets/images/screenshots/mercury/mercury-3.webp",
        "/assets/images/screenshots/mercury/mercury-2.webp",
      ],
      sourceURL: "https://github.com/Manquit-Devs/mercury_f",
      previewURL: null,
    },
  ],

  works: [
    {
      company: "Cyan Agroanalytics",
      position: "Front-End Developer",
      dateRange: "Oct. 2021 - Currently",
      description:
        "Desenvolvimento e otimização de interfaces, painéis e ferramentas de monitoramento para uma plataforma de inteligência geoclimática, com participação ativa em iniciativas de alto impacto, como a migração de infraestrutura da AWS para o GCP.",
      logoUrl: "/assets/images/logo/cyan.png",
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
      position: "Intern",
      dateRange: "Jan. 2020 - Oct. 2021",
      description:
        "Development and maintenance of ORACLE APEX applications and dashboards.",
      logoUrl: "/assets/images/logo/tcu.png",
      techStack: [
        "Oracle Apex",
        "PLSQL",
        "JavaScript",
        "JQuery",
        "HTML",
        "CSS",
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
      title: "My Resume",
      iconURL: "https://cdn.worldvectorlogo.com/logos/doc-icon-2000-03-.svg",
      link: "https://docs.google.com/document/d/1DgyIHZsbtCandU6JTtxoyhgTC7SgdDpvW0SJlWKUj1s",
    },
  ],

  projectModal: {
    button: {
      sourceCode: "source code",
      livePreview: "live preview",
    },
    year: "Project year",
  },

  footer: {
    createdBy: "PAGE CREATED BY GUILHERMEG2K AND AVAILABLE ON GITHUB",
    iconsBy: "ICONS BY worldvectorlogo.com, flagicons.lipis.dev and HEROICONS",
  },
};
