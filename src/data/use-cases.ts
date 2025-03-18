import type { UseCaseData } from '~/types';

export const useCases: Record<string, UseCaseData> = {
  'communication-pr': {
    title: 'Comunicação & RP',
    subtitle: 'Ofereça relações excepcionais com clientes e mídia em escala',
    description: 'Ajude sua equipe de comunicação e RP a resolver problemas mais rapidamente, integrar novos membros mais rápido e identificar proativamente áreas para melhorar',
    features: [
      {
        title: 'Treine equipes rapidamente',
        description: 'Automatize o treinamento com playbooks, scorecards de QA em tempo real e análise de transcrições de chamadas — reduzindo o tempo de adaptação e garantindo qualidade consistente de serviço',
        icon: 'tabler:users',
      },
      {
        title: 'Responda perguntas mais rápido e com precisão',
        description: 'Reúna POPs, tickets anteriores e documentos internos em um hub pesquisável — para que os agentes possam resolver problemas de clientes em segundos, não minutos',
        icon: 'tabler:message-check',
      },
      {
        title: 'Seja proativo com insights',
        description: 'Analise tendências de tickets, preveja problemas emergentes e recomende soluções — como automatizar respostas para os principais motivos de reclamações ou orientar agentes para melhorar CSAT, tempo de primeira resposta e tempo de atendimento.',
        icon: 'tabler:chart-arrows',
      },
    ],
  },
  'engineering': {
    title: 'Engenharia',
    subtitle: 'Construa ferramentas e produtos de IA personalizados',
    description: 'Dê à sua equipe de engenharia superpoderes para construir com LLMs',
    features: [
      {
        title: 'Implemente ferramentas internas de IA em tempo recorde',
        description: 'Pule a fase de construção e acelere soluções de IA para sua organização com ferramentas configuráveis e prontas para uso que se conectam aos seus dados internos',
        icon: 'tabler:rocket',
      },
      {
        title: 'Construa com APIs poderosas',
        description: "Use as APIs da Credal para integrar capacidades de LLM em sua plataforma — sem necessidade de construir ou manter infraestrutura de IA do zero.",
        icon: 'tabler:api',
      },
      {
        title: 'Unifique conhecimento fragmentado',
        description: 'Reúna documentação técnica, conversas do Slack, wikis e repositórios do GitHub em um só lugar — garantindo que os engenheiros sempre tenham o contexto necessário para construir melhor e mais rápido.',
        icon: 'tabler:puzzle',
      },
    ],
  },
  'hr-people': {
    title: 'RH & Pessoas',
    subtitle: 'Fomente uma organização excepcional para todos prosperarem',
    description: 'Melhore cada estágio da jornada do colaborador—desde a integração até o desligamento—para que sua equipe de RH possa se concentrar no que mais importa: apoiar e desenvolver sua força de trabalho',
    features: [
      {
        title: 'Forneça um assistente de integração',
        description: 'Ofereça um assistente de integração útil para responder qualquer pergunta específica da empresa - política, normas, etc.',
        icon: 'tabler:user-plus',
      },
      {
        title: 'Padronize e simplifique avaliações',
        description: 'Gere documentos de feedback estruturados e compartilháveis baseados em notas brutas, documentos e pensamentos iniciais',
        icon: 'tabler:clipboard-check',
      },
      {
        title: 'Garanta conformidade com confiança',
        description: 'Oriente equipes de RH em processos sensíveis como PIPs, investigações de má conduta e desligamentos alinhados com requisitos legais e políticas da empresa — reduzindo riscos e protegendo sua organização',
        icon: 'tabler:shield-check',
      },
    ],
  },
  'e-commerce': {
    title: 'E-commerce',
    subtitle: 'Impulsionando Experiências de Usuário da Próxima Geração',
    description: "O Motor de Personalização da NP Labs oferece experiências personalizadas em tempo real e em escala. Nossa solução combina IA de ponta com arquitetura flexível para potencializar a personalização em diversas plataformas digitais.",
    features: [
      {
        title: 'Permita a Exploração de Todo o Seu Inventário',
        description: 'A busca por palavras-chave não é mais suficiente. Permita que seus clientes explorem todo o seu inventário com um agente de vendas de IA generativa.',
        icon: 'tabler:search',
      },
      {
        title: 'Personalize Com Base na Intenção do Usuário',
        description: 'Nossa IA rastreia a intenção do usuário em seu site como um vendedor no chão de loja. Cada conversa é única.',
        icon: 'tabler:user-circle',
      },
      {
        title: 'Vendedor Disponível 24/7/365',
        description: 'Nossa IA está sempre ativa e sempre pronta para ajudar. Sem mais espera por um vendedor disponível.',
        icon: 'tabler:clock-24',
      },
    ],
  },
}; 