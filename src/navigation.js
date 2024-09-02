import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Soluções',
      links: [
        {
          text: 'Suporte',
          href: getPermalink('/solutions/suport'),
        },
        {
          text: 'Saúde',
          href: getPermalink('/solutions/health'),
        },
        {
          text: 'E-commerce',
          href: getPermalink('/solutions/ecommerce'),
        },
        {
          text: 'Finanças',
          href: getPermalink('/solutions/finance'),
        },
        {
          text: 'Vendas',
          href: getPermalink('/solutions/sales'),
        },
        {
          text: 'Compliance',
          href: getPermalink('/solutions/compliance'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Log In', href: 'https://np_labs.org/login', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Soluções',
      links: [
        { text: 'Suporte', href: '#' },
        { text: 'Compliance', href: '#' },
        { text: 'Saúde', href: '#' },
        { text: 'Seguros', href: '#' },
        { text: 'Finanças', href: '#' },
        { text: 'Vendas', href: '#' },
        { text: 'E-commerce', href: '#' },
      ],
    },
    {
      title: 'Plataforma',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Dashboard', href: '#' },
        
      ],
    },
    {
      title: 'Suporte',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Comunidade', href: '#' },
        { text: 'Contato', href: '#' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre nós', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Carreiras', href: '#' },
        { text: 'Impernsa', href: '#' },
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
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
