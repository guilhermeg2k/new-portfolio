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
          'Anilib is a local anime streaming platform that uses AniList API as anime data source',
        complete:
          "Anilib is a local anime streaming platform that uses AniList API as\
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
        './public/assets/images/screenshoots/anilib/anilib-1.png',
        './public/assets/images/screenshoots/anilib/anilib-2.png',
        './public/assets/images/screenshoots/anilib/anilib-3.png',
        './public/assets/images/screenshoots/anilib/anilib-4.png',
        './public/assets/images/screenshoots/anilib/anilib-5.png',
        './public/assets/images/screenshoots/anilib/anilib-6.png',
        './public/assets/images/screenshoots/anilib/anilib-7.png',
        './public/assets/images/screenshoots/anilib/anilib-8.png',
        './public/assets/images/screenshoots/anilib/anilib-9.png',
      ],
    },
    {
      id: 2,
      title: 'Anipool',
      description: {
        simple:
          'Anipool is a platform to create anime quizes that is integrated with anilist',
        complete:
          "Anipool is a platform to create anime quizes that is integrated with anilist. This project was created because i could not find a good place to create anime quizes like 'Who anime should i watch next?' or 'In your opinion which is the best anime of this season'. One thing about this project is that i could not find a dead simple date picker that works fine with tailwind without having to add a whole library around it, so i decided to build a really cool one.",
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
        './public/assets/images/screenshoots/anipool/anipool-1.png',
        './public/assets/images/screenshoots/anipool/anipool-2.png',
        './public/assets/images/screenshoots/anipool/anipool-3.png',
        './public/assets/images/screenshoots/anipool/anipool-4.png',
        './public/assets/images/screenshoots/anipool/anipool-5.png',
        './public/assets/images/screenshoots/anipool/anipool-6.png',
        './public/assets/images/screenshoots/anipool/anipool-7.png',
        './public/assets/images/screenshoots/anipool/anipool-8.png',
        './public/assets/images/screenshoots/anipool/anipool-9.png',
        './public/assets/images/screenshoots/anipool/anipool-10.png',
        './public/assets/images/screenshoots/anipool/anipool-11.png',
        './public/assets/images/screenshoots/anipool/anipool-12.png',
        './public/assets/images/screenshoots/anipool/anipool-13.png',
        './public/assets/images/screenshoots/anipool/anipool-14.png',
      ],
    },
    {
      id: 3,
      title: 'Neofy',
      description: {
        simple:
          'Neofy is web Spotify client that uses Spotify API and Spotify SDK to get user data and play songs on the browser',
        complete:
          'Neofy is web Spotify client that uses Spotify API and Spotify SDK to get user data and play songs on the browser. One cool thing about this project is that i had to implement the Spotify Authorization Flow which was a really good learning experience.',
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
        './public/assets/images/screenshoots/neofy/neofy-1.png',
        './public/assets/images/screenshoots/neofy/neofy-2.png',
      ],
    },
    {
      id: 4,
      title: 'Mercury',
      description: {
        simple: 'Mercury is a really simple CI/CD web platform',
        complete:
          "Mercury is a really simple CI/CD web platform. Before of creating this project me and my friends were using Jenkins to automate our Discord Bot's deploy, but Jenkins by itself was taking too much ram of our humble VPS, so i decided to made a more simplistic platform that would fill our needs and take less resources from our machine.",
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
        './public/assets/images/screenshoots/mercury/mercury-1.png',
        './public/assets/images/screenshoots/mercury/mercury-2.png',
        './public/assets/images/screenshoots/mercury/mercury-3.png',
      ],
    },
    {
      id: 5,
      title: 'Spotify Landing Clone',
      description: {
        simple: 'This is a clone of the Spotify landing page',
        complete:
          'This is a clone of the Spotify landing page. My main goal with this project was to improve my css skills and it was a great experience because i learned a lot.',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'CSS', bgColor: 'bg-blue-500' },
        { title: 'REACT-ROUTER', bgColor: 'bg-red-600' },
      ],
      screenshots: [
        './public/assets/images/screenshoots/spotify-clone/spotify-clone-1.png',
        './public/assets/images/screenshoots/spotify-clone/spotify-clone-2.png',
        './public/assets/images/screenshoots/spotify-clone/spotify-clone-3.png',
        './public/assets/images/screenshoots/spotify-clone/spotify-clone-4.png',
        './public/assets/images/screenshoots/spotify-clone/spotify-clone-5.png',
        './public/assets/images/screenshoots/spotify-clone/spotify-clone-6.png',
        './public/assets/images/screenshoots/spotify-clone/spotify-clone-7.png',
        './public/assets/images/screenshoots/spotify-clone/spotify-clone-8.png',
        './public/assets/images/screenshoots/spotify-clone/spotify-clone-9.png',
      ],
    },
    {
      id: 6,
      title: 'hltv clone',
      description: {
        simple: 'This is a clone of hltv.org desktop home page',
        complete:
          'This is a clone of hltv.org desktop home page. I really enjoy playing CSGO so i thought it would be fun to made a clone of this website which is the biggest competitive news portal of the game.',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'CSS', bgColor: 'bg-sky-600' },
      ],
      screenshots: [
        './public/assets/images/screenshoots/hltv-clone/hltv-clone-1.png',
        './public/assets/images/screenshoots/hltv-clone/hltv-clone-2.png',
      ],
    },
    {
      id: 7,
      title: 'Blog template',
      description: {
        simple: 'A cool and simple blog template',
        complete:
          'A cool and simple blog template that i built while getting into NextJS world. It was one of my first projects using Next.',
      },
      tags: [
        { title: 'TS', bgColor: 'bg-blue-600' },
        { title: 'REACT', bgColor: 'bg-blue-400' },
        { title: 'NEXTJS', bgColor: 'bg-neutral-600' },
        { title: 'SCSS', bgColor: 'bg-pink-600' },
      ],
      screenshots: [
        './public/assets/images/screenshoots/blog-template/blog-template-1.png',
        './public/assets/images/screenshoots/blog-template/blog-template-2.png',
        './public/assets/images/screenshoots/blog-template/blog-template-3.png',
        './public/assets/images/screenshoots/blog-template/blog-template-4.png',
        './public/assets/images/screenshoots/blog-template/blog-template-5.png',
        './public/assets/images/screenshoots/blog-template/blog-template-6.png',
        './public/assets/images/screenshoots/blog-template/blog-template-7.png',
      ],
    },
  ],

  works: [
    {
      company: 'Cyan Agroanalytics',
      position: 'React Front-End Developer',
      dateRange: 'Oct. 2021 - Currently',
      description:
        'Development and optimization of interfaces, dashboards and \
        tracking tools for a geoclimatic intelligence platform, mainly using \
        Javascript, React, Material-UI, Open Layers, Jest and Enzyme as technologies',
    },
    {
      company: 'Tribunal de Contas da União (TCU)',
      position: 'Intern',
      dateRange: 'Jan. 2020 - Oct. 2021',
      description:
        'Development and maintenance of ORACLE APEX applications, mainly using the technologies \
        Oracle APEX, PLSQL, HTML, CSS, Javascript and jQuery.',
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
        'https://i.pinimg.com/originals/66/8c/cc/668cccb3f734f342e07c0185e6d9a975.png',
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

  contacts: [
    {
      title: 'Linkedin',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg',
    },
    {
      title: 'Github',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
    },
    {
      title: 'Gmail',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/gmail-icon.svg',
    },
    {
      title: 'My Resume',
      iconURL: 'https://cdn.worldvectorlogo.com/logos/doc-icon-2000-03-.svg',
    },
  ],

  projectModal: {
    button: {
      sourceCode: 'source code',
      livePreview: 'live preview',
    },
  },
};