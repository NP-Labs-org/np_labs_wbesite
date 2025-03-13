import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Product',
      links: [
        {
          text: 'Self-service AI agents',
          href: getPermalink('/product/ai-agents'),
        },
        {
          text: 'Workplace search',
          href: getPermalink('/product/workplace-search'),
        },
        {
          text: 'Dev RAG',
          href: getPermalink('/product/dev-rag'),
        },
      ],
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Use Cases',
      links: [
        {
          text: 'E-commerce',
          href: getPermalink('/use-cases/e-commerce'),
        },
        {
          text: 'Engineering',
          href: getPermalink('/use-cases/engineering'),
        },
        {
          text: 'HR & People',
          href: getPermalink('/use-cases/hr-people'),
        },
        {
          text: 'Communication & PR',
          href: getPermalink('/use-cases/communication-pr'),
        },
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink('/about/blog'),
        },
        {
          text: 'Team',
          href: getPermalink('/about/team'),
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
