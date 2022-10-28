export default {
  home: {
    introduction: {
      title: "Hi, I'm Guilherme",
      description:
        "I'm a Computer Scientist and Web Developer specialized in the Front-end side of web development that loves to bring life to user interfaces",
    },
    projectsTitle: 'Some of my Projects',
    worksTitle: 'My Work Experience',
    techsTitle: 'My Favorite Techs',
    linksTitle: 'My Links',
  },

  projects: [
    {
      id: 1,
      title: 'Anilib',
      description: {
        simple:
          'Anilib its a local anime streaming platform, that uses AniList API as anime data source',
        complete:
          "Anilib its a local anime streaming platform, that uses AniList API as\
        data source. This project was made because i wanted to be able to\
        stream my animes to multi devices, specially to my TV. It have been a\
        great experience building it, i'm learning a lot about video encoding,\
        streaming and i had a good time creating the Video Player.",
      },
      tags: [
        { title: 'TS', bgColor: 'bg-orange-400' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'NEXTJS', bgColor: 'bg-neutral-600' },
        { title: 'TAILWINDCSS', bgColor: 'bg-blue-500' },
        { title: 'NODEJS', bgColor: 'bg-emerald-600' },
        { title: 'GRAPHQL', bgColor: 'bg-rose-600' },
        { title: 'Anilist API', bgColor: 'bg-blue-700' },
        { title: 'FFmpeg', bgColor: 'bg-emerald-700' },
      ],
      screenshots: [
        './public/assets/images/screenshoots/anilib/anilib-1.webp',
        './public/assets/images/screenshoots/anilib/anilib-2.webp',
        './public/assets/images/screenshoots/anilib/anilib-3.webp',
        './public/assets/images/screenshoots/anilib/anilib-4.webp',
        './public/assets/images/screenshoots/anilib/anilib-5.webp',
        './public/assets/images/screenshoots/anilib/anilib-6.webp',
        './public/assets/images/screenshoots/anilib/anilib-7.webp',
        './public/assets/images/screenshoots/anilib/anilib-8.webp',
        './public/assets/images/screenshoots/anilib/anilib-9.webp',
      ],
    },
    {
      id: 2,
      title: 'Anipool',
      description: {
        simple:
          'Anilib its a local anime streaming platform, that uses AniList API as anime data source',
        complete: '',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'NEXTJS', bgColor: 'bg-neutral-600' },
        { title: 'TAILWINDCSS', bgColor: 'bg-blue-500' },
        { title: 'ZUSTAND', bgColor: 'bg-neutral-700' },
        { title: 'NODEJS', bgColor: 'bg-emerald-600' },
        { title: 'GRAPHQL', bgColor: 'bg-rose-600' },
        { title: 'Anilist API', bgColor: 'bg-blue-700' },
        { title: 'DynamoDB', bgColor: 'bg-emerald-800' },
      ],
    },
    {
      id: 3,
      title: 'Neofy',
      description: {
        simple:
          "Neofy it's a Spotify client alternative that is on its very early stage",
        complete: '',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'NEXTJS', bgColor: 'bg-neutral-600' },
        { title: 'SCSS', bgColor: 'bg-pink-600' },
        { title: 'SPOTIFY API', bgColor: 'bg-green-600' },
        { title: 'SPOTIFY SDK', bgColor: 'bg-green-600' },
      ],
    },
    {
      id: 4,
      title: 'Mercury',
      description: {
        simple:
          "Neofy it's a Spotify client alternative that is on its very early stage",
        complete: '',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'NEXTJS', bgColor: 'bg-neutral-600' },
        { title: 'MATERIAL-UI', bgColor: 'bg-sky-800' },
        { title: 'NODEJS', bgColor: 'bg-emerald-600' },
        { title: 'ExpressJS', bgColor: 'bg-neutral-500' },
        { title: 'SQLITE', bgColor: 'bg-sky-500' },
        { title: 'KnexJS', bgColor: 'bg-orange-500' },
      ],
      screenshots: [],
    },
    {
      id: 5,
      title: 'Spotify Landing Clone',
      description: {
        simple:
          "Neofy it's a Spotify client alternative that is on its very early stage",
        complete: '',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'CSS', bgColor: 'bg-blue-500' },
        { title: 'REACT-ROUTER', bgColor: 'bg-red-600' },
      ],
    },
    {
      id: 6,
      title: 'hltv clone',
      description: {
        simple:
          "Neofy it's a Spotify client alternative that is on its very early stage",
        complete: '',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'CSS', bgColor: 'bg-sky-600' },
      ],
    },
    {
      id: 7,
      title: 'Blog template',
      description: {
        simple:
          "Neofy it's a Spotify client alternative that is on its very early stage",
        complete: '',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'NEXTJS', bgColor: 'bg-neutral-600' },
        { title: 'SCSS', bgColor: 'bg-pink-600' },
      ],
    },
  ],

  works: [
    {
      company: 'Cyan Agroanalytics',
      position: 'React Front-End Developer',
      dateRange: 'Oct. 2021 - Currently',
      description:
        'Desenvolvimento e otimização de interfaces, dashboards e \
      ferramentas de acompanhamento para uma plataforma de \
      inteligência geoclimática utilizando principalmente as \
      tecnologias Javascript, React, Open Layers, Material-UI, Jest e Enzyme',
    },
    {
      company: 'Tribunal de Contas da União (TCU)',
      position: 'Estagiário',
      dateRange: 'Jan. 2020 - Oct. 2021',
      description:
        'Desenvolvimento e manutenção de aplicações APEX, utilizando principalmente as tecnologias \
        PLSQL, HTML, CSS, Javascript e jQuery.',
    },
  ],

  techs: [
    {
      title: 'Typescript',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
    },
    {
      title: 'TailwindCSS',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
    },
    {
      title: 'Javascript',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
    },
    {
      title: 'HTML',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
    },
    {
      title: 'React',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/react-1.svg',
    },
    {
      title: 'CSS',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
    },
    {
      title: 'NextJS',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
    },
    {
      title: 'Figma',
      iconURL:
        'https://i.pinimg.com/originals/66/8c/cc/668cccb3f734f342e07c0185e6d9a975.webp',
    },
    {
      title: 'Git',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
    },
    {
      title: 'Fedora Linux',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/fedora-1.svg',
    },
    {
      title: 'NodeJS',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
    },
    {
      title: 'VSCODE',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
    },
  ],

  links: [
    {
      title: 'Linkedin',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg',
      link: 'https://www.linkedin.com/in/guilherme-nascimento-b236b9176/',
    },
    {
      title: 'Github',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
      link: 'https://github.com/guilhermeg2k',
    },
    {
      title: 'Gmail',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/gmail-icon.svg',
      link: 'mailto:contato@gnascimento.dev',
    },
    {
      title: 'My Resume',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/doc-icon-2000-03-.svg',
      link: 'https://docs.google.com/document/d/1dXzlqErCCiJNkNZK8ofmygAFQgap51Ln73kq2qdKr2I',
    },
  ],

  projectModal: {
    button: {
      sourceCode: 'source code',
      livePreview: 'live preview',
    },
  },
};
