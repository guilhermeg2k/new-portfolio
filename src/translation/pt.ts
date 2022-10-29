export default {
  home: {
    introduction: {
      title: 'Hey, Seja Bem-vindo',
      description:
        'Meu nome é Guilherme e esse é meu portfolio. Eu sou um desenvolvedor Web, formado em Ciência da Computação, especializado no Front-End e um dos meus maiores prazeres é dar vida a interfaces',
    },
    projectsTitle: 'Alguns dos meus projetos',
    worksTitle: 'Experiência profissional',
    techsTitle: 'Ferramentas favoritas',
    linksTitle: 'Meus Links',
  },

  projects: [
    {
      id: 1,
      title: 'Anilib',
      description: {
        simple:
          'O Anilib é uma plataforma de streaming local para animes que usa a API do AniList como fonte de dados',
        complete:
          'O Anilib é uma plataforma de streaming local para animes que usa a API do AniList como fonte de dados. Eu desenvolvi esse projeto porque eu queria\
          transmitir meus animes para diversos dispositivos, especialmente para minha TV. Tem sido um\
          ótima experiência desenvolve-lo, estou aprendendo muito principalmente sobre codificação  e streaming de vídeo, além de que eu me diverti bastante criando o Video Player.',
      },
      year: '2022',
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
        '/assets/images/screenshots/anilib/anilib-1.webp',
        '/assets/images/screenshots/anilib/anilib-2.webp',
        '/assets/images/screenshots/anilib/anilib-3.webp',
        '/assets/images/screenshots/anilib/anilib-4.webp',
        '/assets/images/screenshots/anilib/anilib-5.webp',
        '/assets/images/screenshots/anilib/anilib-6.webp',
        '/assets/images/screenshots/anilib/anilib-7.webp',
        '/assets/images/screenshots/anilib/anilib-8.webp',
        '/assets/images/screenshots/anilib/anilib-9.webp',
      ],
      sourceURL: 'https://github.com/guilhermeg2k/anilib',
      previewURL: null,
    },
    {
      id: 2,
      title: 'Anipool',
      year: '2022',
      description: {
        simple:
          'O Anipool é uma plataforma para criação quizes de animes e mangás',
        complete:
          "Anipool é uma plataforma para criar quizes de animes/mangás integrado ao anilist. Este projeto foi criado porque eu não consegui encontrar um bom lugar para criar quizes, como, 'Qual proximo anime devo assistir?' ou 'Qual melhor anime dessa temporada?'. Uma fato interessante sobre este projeto é que eu não consegui encontrar um simples seletor de data que funcionasse bem com o tailwind, sem ter que adicionar uma biblioteca inteira, então decidi construir que um ficou muito bom.",
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
      screenshots: [
        '/assets/images/screenshots/anipool/anipool-1.webp',
        '/assets/images/screenshots/anipool/anipool-2.webp',
        '/assets/images/screenshots/anipool/anipool-3.webp',
        '/assets/images/screenshots/anipool/anipool-4.webp',
        '/assets/images/screenshots/anipool/anipool-5.webp',
        '/assets/images/screenshots/anipool/anipool-6.webp',
        '/assets/images/screenshots/anipool/anipool-7.webp',
        '/assets/images/screenshots/anipool/anipool-8.webp',
        '/assets/images/screenshots/anipool/anipool-9.webp',
        '/assets/images/screenshots/anipool/anipool-10.webp',
        '/assets/images/screenshots/anipool/anipool-11.webp',
        '/assets/images/screenshots/anipool/anipool-12.webp',
        '/assets/images/screenshots/anipool/anipool-13.webp',
        '/assets/images/screenshots/anipool/anipool-14.webp',
      ],
      sourceURL: 'https://github.com/guilhermeg2k/anipool',
      previewURL: null,
    },
    {
      id: 3,
      title: 'Neofy',
      year: '2021',
      description: {
        simple:
          'Neofy é um cliente do Spotify para web que utiliza a API e o SDK do Spotify para obter dados do usuário e reproduzir músicas no navegador',
        complete:
          'Neofy é um cliente do Spotify para web que utiliza a API e o SDK do Spotify para obter dados do usuário e reproduzir músicas no navegador. Uma coisa bacana sobre este projeto é que eu tive que implementar o Spotify Authorization Flow, o qual resultou em uma boa experiência de aprendizado sobre autenticação.',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'NEXTJS', bgColor: 'bg-neutral-600' },
        { title: 'SCSS', bgColor: 'bg-pink-600' },
        { title: 'SPOTIFY API', bgColor: 'bg-green-600' },
        { title: 'SPOTIFY SDK', bgColor: 'bg-green-600' },
      ],
      screenshots: [
        '/assets/images/screenshots/neofy/neofy-1.webp',
        '/assets/images/screenshots/neofy/neofy-2.webp',
      ],
      sourceURL: 'https://github.com/guilhermeg2k/neofy',
      previewURL: 'https://neofy.vercel.app/',
    },
    {
      id: 4,
      title: 'Mercury',
      year: '2022',
      description: {
        simple: 'O Mercury é uma simples plataforma web de CI/CD',
        complete:
          'O Mercury é uma simples plataforma web de CI/CD. Antes de criar este projeto eu e meus amigos estávamos usando o Jenkins para automatizar o deploy do nosso bot de discord, mas o Jenkins por si só estava consumindo muita ram da nossa humilde VPS, então decidi fazer uma plataforma mais simplista que atendesse nossas necessidades e consumisse menos recursos da nossa máquina.',
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
      screenshots: [
        '/assets/images/screenshots/mercury/mercury-1.webp',
        '/assets/images/screenshots/mercury/mercury-2.webp',
        '/assets/images/screenshots/mercury/mercury-3.webp',
      ],
      sourceURL: 'https://github.com/Manquit-Devs/mercury_f',
      previewURL: null,
    },
    {
      id: 5,
      title: 'Spotify Landing Clone',
      year: '2021',
      description: {
        simple: 'Esse é um clone da landing page do Spotify',
        complete:
          'Esse é um clone da landing page do Spotify. Meu principal objetivo com este projeto foi melhorar minhas habilidades com CSS, foi uma ótima experiência porque aprendi bastante coisa.',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'CSS', bgColor: 'bg-blue-500' },
        { title: 'REACT-ROUTER', bgColor: 'bg-red-600' },
      ],
      screenshots: [
        '/assets/images/screenshots/spotify-clone/spotify-clone-1.webp',
        '/assets/images/screenshots/spotify-clone/spotify-clone-2.webp',
        '/assets/images/screenshots/spotify-clone/spotify-clone-3.webp',
        '/assets/images/screenshots/spotify-clone/spotify-clone-4.webp',
        '/assets/images/screenshots/spotify-clone/spotify-clone-5.webp',
        '/assets/images/screenshots/spotify-clone/spotify-clone-6.webp',
        '/assets/images/screenshots/spotify-clone/spotify-clone-7.webp',
        '/assets/images/screenshots/spotify-clone/spotify-clone-8.webp',
        '/assets/images/screenshots/spotify-clone/spotify-clone-9.webp',
      ],
      sourceURL: 'https://github.com/guilhermeg2k/spotify-clone',
      previewURL: 'https://guilhermeg2k.github.io/spotify-clone/',
    },
    {
      id: 6,
      title: 'hltv clone',
      year: '2020',
      description: {
        simple: 'Esse é um clone da página inicial da HLTV.org',
        complete:
          'Esse é um clone da página inicial da HLTV.org. Eu sou apaixonado pelo competitivo de CSGO, então fazer o clone deste site, que é o maior portal de notícias sobre o competitivo do jogo, foi muito divertido.',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'CSS', bgColor: 'bg-sky-600' },
      ],
      screenshots: [
        '/assets/images/screenshots/hltv-clone/hltv-clone-1.webp',
        '/assets/images/screenshots/hltv-clone/hltv-clone-2.webp',
      ],
      sourceURL: 'https://github.com/guilhermeg2k/hltv-clone',
      previewURL: 'https://guilhermeg2k.github.io/hltv-clone/build/',
    },
    {
      id: 7,
      title: 'Blog template',
      year: '2021',
      description: {
        simple: 'Um template de blog simples e bacana',
        complete:
          'Um template de blog simples e bacana que eu construí enquanto aprendia NextJS. Esse foi um dos meus primeiros projetos utilizando Next.',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'NEXTJS', bgColor: 'bg-neutral-600' },
        { title: 'SCSS', bgColor: 'bg-pink-600' },
      ],
      screenshots: [
        '/assets/images/screenshots/blog-template/blog-template-1.webp',
        '/assets/images/screenshots/blog-template/blog-template-2.webp',
        '/assets/images/screenshots/blog-template/blog-template-3.webp',
        '/assets/images/screenshots/blog-template/blog-template-4.webp',
        '/assets/images/screenshots/blog-template/blog-template-5.webp',
        '/assets/images/screenshots/blog-template/blog-template-6.webp',
        '/assets/images/screenshots/blog-template/blog-template-7.webp',
      ],
      sourceURL: 'https://github.com/guilhermeg2k/blog-template',
      previewURL: 'https://blog-template-guilhermeg2k.vercel.app/',
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
      tecnologias Javascript, React, Material-UI, Open Layers, Jest e Enzyme',
    },
    {
      company: 'Tribunal de Contas da União (TCU)',
      position: 'Estagiário',
      dateRange: 'Jan. 2020 - Oct. 2021',
      description:
        'Desenvolvimento e manutenção de aplicações APEX, utilizando principalmente as tecnologias \
        ORACLE APEX, PLSQL, HTML, CSS, Javascript e jQuery.',
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
      iconURL: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg',
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
      link: 'https://docs.google.com/document/d/1DgyIHZsbtCandU6JTtxoyhgTC7SgdDpvW0SJlWKUj1s',
    },
  ],

  projectModal: {
    button: {
      sourceCode: 'código fonte',
      livePreview: 'live preview',
    },
    year: 'Ano do projeto',
  },

  footer: {
    createdBy:
      'PÁGINA CRIADA POR GUILHERMEG2K, CÓDIGO FONTE DISPONÍVEL NO GITHUB',
    iconsBy: 'ICONES POR worldvectorlogo.com, flagicons.lipis.dev E HEROICONS',
  },
};
