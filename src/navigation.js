import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Soluções',
    //   links: [
    //     {
    //       text: 'Chat',
    //       href: getPermalink('/product/ai-agents'),
    //     },
    //     {
    //       text: 'Matrix AI',
    //       href: '#matrix',
    //     },
    //     {
    //       text: 'Dev RAG',
    //       href: getPermalink('/product/dev-rag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Pricing',
    //   href: getPermalink('/pricing'),
    // },
    {
      text: 'Casos de uso',
      links: [
        {
          text: 'E-commerce',
          href: getPermalink('/use-cases/e-commerce.html'),
        },
        {
          text: 'Engenharia',
          href: getPermalink('/use-cases/engineering.html'),
        },
        {
          text: 'RH & Pessoas',
          href: getPermalink('/use-cases/hr-people.html'),
        },
        {
          text: 'Comunicação & PR',
          href: getPermalink('/use-cases/communication-pr.html'),
        },
      ],
    },
    {
      text: 'Sobre nós',
      links: [
        // {
        //   text: 'Blog',
        //   href: getBlogPermalink('/about/blog'),
        // },
        {
          text: 'Equipe',
          href: getPermalink('/about/team.html'),
        },
      ],
    },
  ],
  actions: [{ text: 'LOG IN', variant: 'hero', href: 'https://dashboard.np-labs.org', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Plataforma',
      links: [
        // { text: 'Developer API', href: '#' },
        { text: 'Dashboard', href: 'https://dashboard.np-labs.org' },
        
      ],
    },
    {
      title: 'Suporte',
      links: [
        // { text: 'Docs', href: '#' },
        // { text: 'Discord', href: '#' },
        { text: 'farrulla@np-labs.org', href: 'mailto:farrulla@np-labs.org' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre nós', href: getPermalink('/about/team') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termos', href: getPermalink('#') },
    { text: 'Política de Privacidade', href: getPermalink('#') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  
};
