import type { UseCaseData } from '~/types';

export const useCases: Record<string, UseCaseData> = {
  'communication-pr': {
    title: 'Communication & PR',
    subtitle: 'Deliver exceptional customer and media relations at scale',
    description: 'Help your communication and PR team with resolve issues faster, onboard quicker, and proactively identify areas to improve',
    features: [
      {
        title: 'Quickly train team members',
        description: 'Automate training with playbooks, real-time QA scorecards, and call transcript analysis — reducing ramp time and ensuring consistent service quality',
        icon: 'tabler:users',
      },
      {
        title: 'Answer questions faster & more accurately',
        description: 'Bring together SOPs, past tickets, and internal docs into one searchable hub —  so agents can resolve customer issues in seconds, not minutes',
        icon: 'tabler:message-check',
      },
      {
        title: 'Be proactive with insights',
        description: 'Analyze ticket trends, predict emerging issues, and recommend solutions — like automating responses for top complaint drivers or coaching agents to improve CSAT, first response time, and handle time.',
        icon: 'tabler:chart-arrows',
      },
    ],
  },
  'engineering': {
    title: 'Engineering',
    subtitle: 'Build bespoke AI tools and products',
    description: 'Give your engineering team LLM-building superpowers',
    features: [
      {
        title: 'Deploy internal AI tools in record time',
        description: 'Skip the build phase and fast-track AI solutions for your organization with highly configurable, out-of-the-box tools that connect to your internal data',
        icon: 'tabler:rocket',
      },
      {
        title: 'Build with powerful APIs',
        description: "Use Credal's APIs to integrate LLM capabilities into your platform — no need to build or maintain AI infrastructure from scratch.",
        icon: 'tabler:api',
      },
      {
        title: 'Unify fractured knowledge',
        description: 'Bring together technical documentation, Slack threads, wikis, and GitHub repos in one place — ensuring engineers always have the context they need to build better, faster.',
        icon: 'tabler:puzzle',
      },
    ],
  },
  'hr-people': {
    title: 'HR & People',
    subtitle: 'Foster an exceptional organization for everyone to thrive',
    description: 'Enhance every stage of the employee journey—from onboarding to offboarding—so your HR team can focus on what matters most: supporting and growing your workforce',
    features: [
      {
        title: 'Provide an onboarding companion',
        description: 'Provide a helpful onboarding companion to answer any company specific question - policy, norms, etc.',
        icon: 'tabler:user-plus',
      },
      {
        title: 'Standardize and simplify reviews',
        description: 'Generate structured, sharable feedback documents based on raw notes, documents, and initial thoughts',
        icon: 'tabler:clipboard-check',
      },
      {
        title: 'Ensure compliance with confidence',
        description: 'Guide HR teams through sensitive processes like PIPs, misconduct investigations, and terminations that align with legal requirements and company policies — reducing risk and protecting your organization',
        icon: 'tabler:shield-check',
      },
    ],
  },
  'e-commerce': {
    title: 'E-commerce',
    subtitle: 'Powering Next-Generation User Experiences',
    description: "Crossing Minds' Personalization Engine delivers tailored, real-time experiences at scale. Our solution combines cutting-edge AI with flexible architecture to power personalization across diverse digital platforms.",
    features: [
      {
        title: 'Allow Exploration of Your Entire Inventory',
        description: 'Keyword search is no longer enough. Let your customers explore your entire inventory with GenAI sales agent.',
        icon: 'tabler:search',
      },
      {
        title: 'Personalize Based on User Intent',
        description: 'Our AI tracks user intent across your site just like a sales associate on the floor. Each conversation is unique.',
        icon: 'tabler:user-circle',
      },
      {
        title: '24/7/365 Sales Associate',
        description: 'Our AI is always on and always ready to help. No more waiting for a sales associate to be available.',
        icon: 'tabler:clock-24',
      },
    ],
  },
}; 