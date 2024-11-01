import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Homes',
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Soluções',
    //   links: [
    //     {
    //       text: 'Suporte',
    //       href: getPermalink('/solutions/suport'),
    //     },
    //     {
    //       text: 'Saúde',
    //       href: getPermalink('/solutions/health'),
    //     },
    //     {
    //       text: 'E-commerce',
    //       href: getPermalink('/solutions/ecommerce'),
    //     },
    //     {
    //       text: 'Finanças',
    //       href: getPermalink('/solutions/finance'),
    //     },
    //     {
    //       text: 'Vendas',
    //       href: getPermalink('/solutions/sales'),
    //     },
    //     {
    //       text: 'Compliance',
    //       href: getPermalink('/solutions/compliance'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
    // },
  ],
  actions: [{ text: 'Log In', href: 'https://dashboard.np-labs.org', target: '_blank' }],
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
        { text: 'Sobre nós', href: getPermalink('/about') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termos', href: getPermalink('/terms') },
    { text: 'Política de Privacidade', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  
};
