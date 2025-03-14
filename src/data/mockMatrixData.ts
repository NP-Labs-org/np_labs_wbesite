export interface MockItem {
  id?: number;
  document: string;
  date?: string;
  documentType?: string;
  investmentRisks?: string;
  marketConsiderations?: string;
  investmentHighlights?: string;
  
  // Legal industry specific fields
  considerationType?: string;
  earnOut?: string;
  indemnification?: string;
  reverseTermination?: string;
  
  // Credit industry specific fields
  facilities?: string;
  applicableMargin?: string;
  amortization?: string;
  term?: string;
  callProtection?: string;
  incrementalDebtCapacity?: string;
  
  // Advisory industry specific fields
  industry?: string;
  strategicPriorities?: string;
  goForwardMAPriorities?: string;
  recentMaterialDevelopments?: string;
  
  // Corporate industry specific fields
  clientName?: string;
  contractValue?: string;
  serviceType?: string;
  paymentSchedule?: string;
  startDate?: string;
  duration?: string;
  
  // Consulting industry specific fields
  author?: string;
  yearOfReport?: string;
  industryTrends?: string;
  drivers?: string;
  competitiveDynamics?: string;
  projectedGrowth?: string;
  pricingHighlights?: string;
  
  // Real Estate industry specific fields
  quarter?: string;
  city?: string;
  propertySize?: string;
  marketValue?: string;
  propertyType?: string;
  buildingCondition?: string;
  tenancy?: string;
}

export const mockItems: MockItem[] = [
  {
    document: 'FY2024 P&L',
    date: 'Jan 18, 2024',
    documentType: 'Financials',
    investmentRisks: 'There have been increasing costs...',
    marketConsiderations: 'N/A',
    investmentHighlights: 'Revenue: Figures for Project Alpha...'
  },
  {
    document: 'Project Alpha CIM',
    date: 'April 29, 2024',
    documentType: 'Market Materials',
    investmentRisks: 'Risk factors that are not detailed in...',
    marketConsiderations: 'Despite the growing TAM described...',
    investmentHighlights: 'Rapid organic growth: Over the last 2'
  },
  {
    document: 'Product Overview Project Alpha',
    date: 'Feb 26, 2024',
    documentType: 'Product',
    investmentRisks: 'Current product lacks detail...',
    marketConsiderations: 'N/A',
    investmentHighlights: 'Flexible: Product is adaptable for a...'
  },
  {
    document: 'Product Roadmap',
    date: 'Feb 26, 2024',
    documentType: 'Product',
    investmentRisks: 'Several integrations listed within th...',
    marketConsiderations: 'Roadmap details particularities tha...',
    investmentHighlights: 'Integrations: Prioritized over the ne...'
  },
  {
    document: 'Expert Calls Project Alpha',
    date: 'Mar 12, 2024',
    documentType: 'Customer',
    investmentRisks: 'Experts hesitate on defensibility of...',
    marketConsiderations: 'Experts differ in opinion regarding...',
    investmentHighlights: 'Differentiation: Experts deem there ...'
  },
  {
    document: 'Customer Reference Calls',
    date: 'Mar 18, 2024',
    documentType: 'Customer',
    investmentRisks: 'Common negative feedback across...',
    marketConsiderations: 'Customers list several tailwinds...',
    investmentHighlights: 'Early Market Leadership: The...'
  },
  {
    document: 'Market Report',
    date: 'Mar 30, 2024',
    documentType: 'Market',
    investmentRisks: 'Headwinds raised across this repo...',
    marketConsiderations: 'The TAM is estimated at...',
    investmentHighlights: 'Growing Market: Study...'
  }
];

export const legalItems: MockItem[] = [
  {
    id: 1,
    document: 'Projeto Jazz APA',
    considerationType: 'Dinheiro',
    earnOut: 'Vendedor receberá R$8 milhões se as receitas anuais excederem R$2...',
    indemnification: 'Vendedor concorda em indenizar o comprador contra qualquer responsabilidade pré-fechamento...',
    reverseTermination: 'Taxa de rescisão reversa de R$3 milhões se aplica se o Comprador falhar...'
  },
  {
    id: 2,
    document: 'Ocean <> Alpha MIPA',
    considerationType: 'Dinheiro',
    earnOut: 'Um adicional de 10% do preço final de compra é contingente...',
    indemnification: 'Disposições de indenização cobrem toda propriedade intelectual...',
    reverseTermination: 'Nenhuma provisão de rescisão reversa identificada'
  },
  {
    id: 3,
    document: 'Wonder Corp. SPA',
    considerationType: 'Dinheiro + Ações',
    earnOut: 'R$1,5 milhão é pagável aos acionistas se MAUs excederem...',
    indemnification: 'Acordo estabelece explicitamente que as representações não sobrevivem...',
    reverseTermination: 'Se a aquisição não for concluída devido à falha do Comprador...'
  },
  {
    id: 4,
    document: 'Projeto Beacon Fusão',
    considerationType: 'Ações',
    earnOut: 'Nenhum earn-out identificado',
    indemnification: 'Transação inclui seguro de representação e garantia...',
    reverseTermination: 'Acordo inclui uma taxa de rescisão reversa de R$1,5 milhão...'
  },
  {
    id: 5,
    document: 'Projeto Titan MA',
    considerationType: 'Dinheiro',
    earnOut: 'Vendedores receberão R$2 milhões se as receitas anuais aumentarem...',
    indemnification: 'Vendedor fornece indenização contra perdas de até R$2 milhões...',
    reverseTermination: 'Uma taxa de rescisão reversa de R$2 milhões é pagável pelo Comprador se...'
  },
  {
    id: 6,
    document: 'Blvd Corp SPA',
    considerationType: 'Ações',
    earnOut: 'Nenhum earn-out identificado',
    indemnification: 'Termos de indenização são respaldados por seguro de representação e garantia...',
    reverseTermination: 'Taxa de rescisão reversa de R$1,25 milhão se aplica se o Comprador...'
  },
  {
    id: 7,
    document: 'Ocean-Athena MA',
    considerationType: 'Dinheiro + Ações',
    earnOut: 'R$3 milhões em ações do comprador são pagáveis aos Vendedores se atividade diária...',
    indemnification: 'Nenhum termo de indenização identificado',
    reverseTermination: 'Acordo inclui uma taxa de rescisão reversa de R$750 mil se o...'
  }
];

// Credit industry data (Oak Rock Deal Terms)
export const creditItems: MockItem[] = [
  {
    id: 1,
    document: 'All Good HoldCo Credit Agreement',
    facilities: '$200m unitranche term loan',
    applicableMargin: 'S + 4.00%',
    amortization: '0.25% per quarter',
    term: '6 years',
    callProtection: 'Make Whole / 101 / Par',
    incrementalDebtCapacity: 'The greater of $40m of 20% of Consolidated...'
  },
  {
    id: 2,
    document: 'Big Technology, Inc. CA',
    facilities: '$550m term loan | $75m revolving credit',
    applicableMargin: 'S + 5.00% if leverage does not exceed...',
    amortization: '1.0% per annum',
    term: '5 years',
    callProtection: '103 / 102 / 101 / Par',
    incrementalDebtCapacity: 'The \'Accordion Amount\' is $100,...'
  },
  {
    id: 3,
    document: 'BrightBucket Operating LLC Agreement',
    facilities: '$100m first lien facility',
    applicableMargin: 'L + 350 bps',
    amortization: '-',
    term: '7 years',
    callProtection: '101 soft call for 12 months',
    incrementalDebtCapacity: '-'
  },
  {
    id: 4,
    document: 'Credit Agreement Large Retailer',
    facilities: '$600m term loan | $50m ABL facility',
    applicableMargin: '5 + 6.00% if BB rating or better from...',
    amortization: '$1.5m per quarter through the second...',
    term: '7 years',
    callProtection: 'Non-call 6 months',
    incrementalDebtCapacity: 'The greater of $80m or 5% of total...'
  },
  {
    id: 5,
    document: 'Topco Execution Version',
    facilities: '$400m priority lien term loan | $...',
    applicableMargin: 'L + 4.50% with 0.50% PIK toggle...',
    amortization: '25 bps per quarter',
    term: '6 years',
    callProtection: '102 / 101 / Par',
    incrementalDebtCapacity: 'The greater of $100,000,000 or 5%...'
  },
  {
    id: 6,
    document: 'Stellar Enterprises Credit Agreement',
    facilities: '$150m revolving credit',
    applicableMargin: 'L + 3.50%',
    amortization: '0.50% per quarter',
    term: '5 years',
    callProtection: '102 / 101 / Par',
    incrementalDebtCapacity: 'The greater of $30m or 15% of Consolidated...'
  },
  {
    id: 7,
    document: 'Apex Holdings Credit Agreement',
    facilities: '$250m senior secured loan',
    applicableMargin: 'S + 3.75%',
    amortization: '0.30% per quarter',
    term: '7 years',
    callProtection: 'Make Whole / 102 / Par',
    incrementalDebtCapacity: 'The greater of $50m or 25% of Consolidated...'
  }
];

// Advisory industry data (American Airlines Meeting)
export const advisoryItems: MockItem[] = [
  {
    id: 1,
    document: 'American Airlines Group - 10-Q (April 2024)',
    date: 'Apr 25, 2024',
    industry: 'Airline',
    strategicPriorities: 'Investing in product and premium customer experience...',
    goForwardMAPriorities: 'Leverage fleet network and travel rewards program...',
    recentMaterialDevelopments: 'Entered into significant aircraft purchase agreement...'
  },
  {
    id: 2,
    document: 'American Airlines Group - Q1 2024 Earnings Call',
    date: 'Apr 25, 2024',
    industry: 'Airline',
    strategicPriorities: 'Exploring in-roads into potential product evolution',
    goForwardMAPriorities: 'Maintain and utilize a young and simplified fleet',
    recentMaterialDevelopments: 'Announced several new premium onboard enhancements...'
  },
  {
    id: 3,
    document: 'Southwest Airlines Co - 10-Q (April 2024)',
    date: 'Apr 26, 2024',
    industry: 'Airline',
    strategicPriorities: 'Network Optimization as they are addressing underperforming routes...',
    goForwardMAPriorities: 'Continue evolving as the leading carrier between...',
    recentMaterialDevelopments: 'Announced the launch of Southwest Airlines Rewards...'
  },
  {
    id: 4,
    document: 'Southwest Airlines Co - Q1 2024 Earnings Call',
    date: 'Apr 25, 2024',
    industry: 'Airline',
    strategicPriorities: 'Continued focus on network optimization and capacity...',
    goForwardMAPriorities: 'Transition from investment mode to harvest mode',
    recentMaterialDevelopments: 'Enhanced and refreshed benefits for Delta SkyMiles...'
  },
  {
    id: 5,
    document: 'Delta Air Lines - 10-Q (April 10, 2024)',
    date: 'Apr 10, 2024',
    industry: 'Airline',
    strategicPriorities: 'Future aircraft purchase commitments for fleet expansion...',
    goForwardMAPriorities: 'Initiate or expand commercial relationships with...',
    recentMaterialDevelopments: 'Entered into confidential arrangements with Boeing...'
  },
  {
    id: 6,
    document: 'Delta Airlines - Q1 2024 Earnings Call',
    date: 'Apr 11, 2024',
    industry: 'Airline',
    strategicPriorities: 'Delivering industry-leading operational reliability',
    goForwardMAPriorities: 'Make equity investments in other airlines in connection...',
    recentMaterialDevelopments: 'Increased borrowing capacity of the Revolving Credit...'
  },
  {
    id: 7,
    document: 'United Airlines - Q1 2024 Earnings Call',
    date: 'Apr 17, 2024',
    industry: 'Airline',
    strategicPriorities: 'Safety is the fundamental pillar of United\'s core 4...',
    goForwardMAPriorities: 'Explore additional investments in, and joint ventures...',
    recentMaterialDevelopments: 'FAA began evaluating several elements of United\'s...'
  }
];

// Corporate industry data
export const corporateItems: MockItem[] = [
  {
    id: 1,
    document: 'Contrato de Serviço - Tech Solutions Inc',
    clientName: 'Tech Solutions Inc',
    contractValue: 'R$ 875.000',
    serviceType: 'Desenvolvimento de Software',
    paymentSchedule: '30 dias',
    startDate: '15/05/2024',
    duration: '12 meses'
  },
  {
    id: 2,
    document: 'Contrato de Consultoria - Global Retail SA',
    clientName: 'Global Retail SA',
    contractValue: 'R$ 1.250.000',
    serviceType: 'Consultoria Estratégica',
    paymentSchedule: '60 dias',
    startDate: '01/06/2024',
    duration: '18 meses'
  },
  {
    id: 3,
    document: 'Contrato de Suporte - FinTech Brasil',
    clientName: 'FinTech Brasil',
    contractValue: 'R$ 450.000',
    serviceType: 'Suporte Técnico',
    paymentSchedule: '30 dias',
    startDate: '10/04/2024',
    duration: '24 meses'
  },
  {
    id: 4,
    document: 'Contrato de Implementação - Saúde Total',
    clientName: 'Saúde Total',
    contractValue: 'R$ 750.000',
    serviceType: 'Implementação de Sistema',
    paymentSchedule: '60 dias',
    startDate: '22/05/2024',
    duration: '9 meses'
  },
  {
    id: 5,
    document: 'Contrato de Manutenção - Energia Renovável',
    clientName: 'Energia Renovável',
    contractValue: 'R$ 350.000',
    serviceType: 'Manutenção de Plataforma',
    paymentSchedule: '60 dias',
    startDate: '05/06/2024',
    duration: '36 meses'
  },
  {
    id: 6,
    document: 'Contrato de Treinamento - Educação Futura',
    clientName: 'Educação Futura',
    contractValue: 'R$ 225.000',
    serviceType: 'Treinamento de Equipe',
    paymentSchedule: '30 dias',
    startDate: '15/04/2024',
    duration: '6 meses'
  },
  {
    id: 7,
    document: 'Contrato de Análise - Logística Express',
    clientName: 'Logística Express',
    contractValue: 'R$ 675.000',
    serviceType: 'Análise de Dados',
    paymentSchedule: '30 dias',
    startDate: '01/05/2024',
    duration: '12 meses'
  }
];

// Consulting industry data (Beverage Market Research)
export const consultingItems: MockItem[] = [
  {
    id: 1,
    document: 'North American Coffee',
    author: 'The Business Research',
    yearOfReport: '2023',
    industryTrends: 'Coffee premiumization has gained popularity glo...',
    drivers: 'Rise of coffee subscription services and coffee pr...',
    competitiveDynamics: 'Market Fragmentation: Numerous players in coff...',
    projectedGrowth: 'The global market for health and wellness beverages...',
    pricingHighlights: 'Market values include the impact of inflation...'
  },
  {
    id: 2,
    document: 'Beverages in America',
    author: 'FoodInsights Analytics',
    yearOfReport: '2024',
    industryTrends: 'Beverage companies are increasingly offering be...',
    drivers: 'Growing demand for premium coffee offerings a...',
    competitiveDynamics: 'Brand Loyalty: Strong brand recognition and cust...',
    projectedGrowth: 'The RTD beverage segment is expected to expand at...',
    pricingHighlights: 'In emerging markets, where disposable incomes are...'
  },
  {
    id: 3,
    document: 'F&B North America',
    author: 'GlobalTaste Research',
    yearOfReport: '2024',
    industryTrends: 'Tea and coffee is gaining attention as an ingredie...',
    drivers: 'Busy lifestyles and the need for quick, convenien...',
    competitiveDynamics: 'Price Wars: Frequent discounting and promotion...',
    projectedGrowth: 'The market for beverages with sustainable and eco-friendly...',
    pricingHighlights: 'Fluctuations in the costs of raw materials, such as sugar...'
  },
  {
    id: 4,
    document: 'Consumer Behavior in F&B Sector',
    author: 'MarketPulse F&B',
    yearOfReport: '2023',
    industryTrends: 'Consumers are increasingly seeking beverages t...',
    drivers: 'Continuous innovation and the introduction of ne...',
    competitiveDynamics: 'Market Entry Barriers: High initial investment and...',
    projectedGrowth: 'Growth in alternative distribution channels, such as...',
    pricingHighlights: 'Temporary promotional pricing, discounts...'
  },
  {
    id: 5,
    document: 'Beverage Trends in 2024',
    author: 'Nutriview Reports',
    yearOfReport: '2024',
    industryTrends: 'The popularity of plant-based diets has led to a s...',
    drivers: 'In many regions, increased disposable income all...',
    competitiveDynamics: 'Diverse Market Players: The market is characteri...',
    projectedGrowth: 'Emerging markets are growing tremendously, ...',
    pricingHighlights: 'The trend towards premium and specialty beverages...'
  },
  {
    id: 6,
    document: 'Caffeinated Beverages in North...',
    author: 'CulinaryTrends Resear...',
    yearOfReport: '2024',
    industryTrends: 'There is a growing interest in unique caffeinated...',
    drivers: 'Loyalty programs and rewards can encourage re...',
    competitiveDynamics: 'Varied Market Segments: The industry is segmen...',
    projectedGrowth: 'The caffeine beverage market, including coffee, ...',
    pricingHighlights: 'Coffee subscription services charge a weekly or ...'
  },
  {
    id: 7,
    document: 'European Craft Beer Trends',
    author: 'Beverage Insights',
    yearOfReport: '2024',
    industryTrends: 'Increasing demand for unique and locally produced...',
    drivers: 'Rise of microbreweries and consumer preference...',
    competitiveDynamics: 'High Competition: Numerous small breweries are....',
    projectedGrowth: 'The European craft beer market is expected to grow...',
    pricingHighlights: 'Prices are influenced by the cost of premium ...'
  }
];

// Real Estate industry data (Property Valuation Trends)
export const realEstateItems: MockItem[] = [
  {
    id: 1,
    document: 'Crystal City - 23rd St',
    quarter: '2023 Q4',
    city: 'Arlington, VA',
    propertySize: '60.000 m²',
    marketValue: 'R$ 1.860.000',
    propertyType: 'Comercial',
    buildingCondition: 'Razoável: A propriedade está em condição decente...',
    tenancy: '3 Inquilinos: Uma agência de marketing (Le...)'
  },
  {
    id: 2,
    document: 'Arlington - S Clark St',
    quarter: '2023 Q4',
    city: 'Arlington, VA',
    propertySize: '118.000 m²',
    marketValue: 'R$ 2.400.000',
    propertyType: 'Comercial',
    buildingCondition: 'Excelente: A propriedade está em perfeito estado...',
    tenancy: '8 Inquilinos: Um call center de companhia aérea (W...)'
  },
  {
    id: 3,
    document: 'Coastal Retail Center',
    quarter: '2023 Q4',
    city: 'Arlington, VA',
    propertySize: '82.000 m²',
    marketValue: 'R$ 1.740.000',
    propertyType: 'Comercial',
    buildingCondition: 'Bom: A propriedade é bem-mantida...',
    tenancy: '5 Inquilinos: Um escritório de advocacia (Justice Partn...)'
  },
  {
    id: 4,
    document: 'Crystal City - Crystal City Shops',
    quarter: '2023 Q4',
    city: 'Arlington, VA',
    propertySize: '20.000 m²',
    marketValue: 'R$ 600.000',
    propertyType: 'Varejo',
    buildingCondition: 'Razoável: O exterior da propriedade está bem...',
    tenancy: '1 Inquilino: Uma loja de tecnologia (Techn...)'
  },
  {
    id: 5,
    document: 'Arlington - 18th St S',
    quarter: '2023 Q4',
    city: 'Arlington, VA',
    propertySize: '51.000 m²',
    marketValue: 'R$ 1.070.000',
    propertyType: 'Comercial',
    buildingCondition: 'Ruim: A propriedade tem problemas maiores...',
    tenancy: '3 Inquilinos: Uma agência de recrutamento (T...)'
  },
  {
    id: 6,
    document: 'Lakeside Residences',
    quarter: '2023 Q4',
    city: 'Austin, TX',
    propertySize: '74.000 m²',
    marketValue: 'R$ 820.000',
    propertyType: 'Residencial',
    buildingCondition: 'Bom: A propriedade está em condição sólida...',
    tenancy: '4 Inquilinos: Uma empresa de logística (SW...)'
  },
  {
    id: 7,
    document: 'Midtown Plaza - 5th Ave',
    quarter: '2023 Q3',
    city: 'New York, NY',
    propertySize: '100.000 m²',
    marketValue: 'R$ 10.500.000',
    propertyType: 'Escritório',
    buildingCondition: 'Bom: A propriedade é bem-mantida...',
    tenancy: '5 Inquilinos: Um escritório de advocacia (Legal Eagles),...'
  }
];

// Asset Management industry data
export const assetManagementItems: MockItem[] = [
  {
    id: 1,
    document: 'DRE 2024 Projeto Alpha',
    date: '18/01/2024',
    documentType: 'Financeiro',
    investmentRisks: 'Tem havido custos crescentes relacionados à expansão da infraestrutura...',
    marketConsiderations: 'N/A',
    investmentHighlights: 'Receita: Os números do Projeto Alpha ao longo do ano demonstram crescimento substancial...'
  },
  {
    id: 2,
    document: 'Memorando de Informações Projeto Alpha',
    date: '29/04/2024',
    documentType: 'Materiais de Mercado',
    investmentRisks: 'Fatores de risco que não estão detalhados no memorando incluem a vulnerabilidade a novas tecnologias...',
    marketConsiderations: 'Apesar do crescimento do mercado total descrito no memorando, existem desafios competitivos significativos...',
    investmentHighlights: 'Crescimento orgânico rápido: Nos últimos 2 anos, a empresa demonstrou capacidade de escalabilidade...'
  },
  {
    id: 3,
    document: 'Visão Geral do Produto Projeto Alpha',
    date: '26/02/2024',
    documentType: 'Produto',
    investmentRisks: 'O produto atual carece de detalhes sobre os recursos mais recentes que seriam necessários para competir...',
    marketConsiderations: 'N/A',
    investmentHighlights: 'Flexível: O produto é adaptável para uma variedade de casos de uso em diferentes segmentos de mercado...'
  },
  {
    id: 4,
    document: 'Roadmap do Produto',
    date: '26/02/2024',
    documentType: 'Produto',
    investmentRisks: 'Várias integrações listadas no roadmap indicam potenciais atrasos no desenvolvimento...',
    marketConsiderations: 'O roadmap detalha particularidades que se alinham com as tendências atuais do mercado...',
    investmentHighlights: 'Integrações: Priorizadas para o curto prazo estão funcionalidades que ampliarão o ecossistema...'
  },
  {
    id: 5,
    document: 'Chamadas com Especialistas Projeto Alpha',
    date: '12/03/2024',
    documentType: 'Cliente',
    investmentRisks: 'Especialistas hesitam sobre a defensibilidade da tecnologia frente a novos entrantes...',
    marketConsiderations: 'Especialistas divergem de opinião sobre o crescimento do mercado nos próximos 5 anos...',
    investmentHighlights: 'Diferenciação: Especialistas consideram que há um alto nível de distinção da solução no mercado...'
  },
  {
    id: 6,
    document: 'Chamadas de Referência com Clientes',
    date: '18/03/2024',
    documentType: 'Cliente',
    investmentRisks: 'Feedback negativo comum entre os clientes relacionado à interface e suporte técnico...',
    marketConsiderations: 'Clientes listam vários fatores favoráveis, incluindo a pressão por digitalização no setor...',
    investmentHighlights: 'Liderança Inicial de Mercado: A empresa estabeleceu uma posição forte em seu segmento...'
  },
  {
    id: 7,
    document: 'Relatório de Mercado',
    date: '30/03/2024',
    documentType: 'Mercado',
    investmentRisks: 'Ventos contrários levantados neste relatório incluem pressões regulatórias e mudanças tecnológicas...',
    marketConsiderations: 'O mercado total é estimado em aproximadamente R$ 360 bilhões, com crescimento anual de 15%...',
    investmentHighlights: 'Mercado em Crescimento: O estudo demonstra uma tendência crescente de adoção na América Latina...'
  }
];

export const useCases = [
  { id: 'legal', name: 'JURÍDICO' },
  { id: 'credit', name: 'CRÉDITO' },
  { id: 'advisory', name: 'CONSULTORIA ESTRATÉGICA' },
  { id: 'corporate', name: 'CORPORATIVO' },
  { id: 'consulting', name: 'CONSULTORIA' },
  { id: 'realestate', name: 'IMOBILIÁRIO' },
  { id: 'assetmanagement', name: 'GESTÃO DE ATIVOS' }
];

export const useCaseToTypes = {
  'legal': ['Financials'],
  'credit': ['Financials'],
  'advisory': ['Market Materials', 'Market'],
  'corporate': ['Financials', 'Market Materials'],
  'consulting': ['Product', 'Customer'],
  'realestate': ['Market', 'Product'],
  'assetmanagement': ['Financials', 'Market']
};

export const industryColumns = {
  'legal': [
    { id: 'id', name: '', icon: '' },
    { id: 'document', name: 'Documento', icon: 'tabler:file-text' },
    { id: 'considerationType', name: 'Tipo de Contraprestação', icon: 'tabler:currency-dollar' },
    { id: 'earnOut', name: 'Earn-Out', icon: 'tabler:chart-line' },
    { id: 'indemnification', name: 'Indenização', icon: 'tabler:shield' },
    { id: 'reverseTermination', name: 'Rescisão Reversa', icon: 'tabler:arrow-back-up' }
  ],
  'credit': [
    { id: 'id', name: '', icon: '' },
    { id: 'document', name: 'Documento', icon: 'tabler:file-text' },
    { id: 'facilities', name: 'Facilities', icon: 'tabler:building-bank' },
    { id: 'applicableMargin', name: 'Applicable Margin', icon: 'tabler:percentage' },
    { id: 'amortization', name: 'Amortization', icon: 'tabler:chart-area-line' },
    { id: 'term', name: 'Term', icon: 'tabler:calendar' },
    { id: 'callProtection', name: 'Call Protection', icon: 'tabler:shield' },
    { id: 'incrementalDebtCapacity', name: 'Incremental Debt Capacity', icon: 'tabler:trending-up' }
  ],
  'advisory': [
    { id: 'id', name: '', icon: '' },
    { id: 'document', name: 'Documento', icon: 'tabler:file-text' },
    { id: 'date', name: 'Data', icon: 'tabler:calendar' },
    { id: 'industry', name: 'Indústria', icon: 'tabler:building' },
    { id: 'strategicPriorities', name: 'Prioridades Estratégicas', icon: 'tabler:target' },
    { id: 'goForwardMAPriorities', name: 'Prioridades de M&A', icon: 'tabler:arrows-join' },
    { id: 'recentMaterialDevelopments', name: 'Desenvolvimentos Recentes', icon: 'tabler:news' }
  ],
  'corporate': [
    { id: 'id', name: '', icon: '' },
    { id: 'document', name: 'Documento', icon: 'tabler:file-text' },
    { id: 'clientName', name: 'Cliente', icon: 'tabler:building' },
    { id: 'contractValue', name: 'Valor do Contrato', icon: 'tabler:currency-real' },
    { id: 'serviceType', name: 'Tipo de Serviço', icon: 'tabler:clipboard' },
    { id: 'paymentSchedule', name: 'Prazo de Pagamento', icon: 'tabler:calendar-time' },
    { id: 'startDate', name: 'Data de Início', icon: 'tabler:calendar' },
    { id: 'duration', name: 'Duração', icon: 'tabler:clock' }
  ],
  'consulting': [
    { id: 'id', name: '', icon: '' },
    { id: 'document', name: 'Documento', icon: 'tabler:file-text' },
    { id: 'author', name: 'Autor', icon: 'tabler:user' },
    { id: 'yearOfReport', name: 'Ano do Relatório', icon: 'tabler:calendar' },
    { id: 'industryTrends', name: 'Tendências da Indústria', icon: 'tabler:chart-dots' },
    { id: 'drivers', name: 'Impulsionadores', icon: 'tabler:rocket' },
    { id: 'competitiveDynamics', name: 'Dinâmica Competitiva', icon: 'tabler:chart-grid-dots' },
    { id: 'projectedGrowth', name: 'Crescimento Projetado', icon: 'tabler:trending-up' },
    { id: 'pricingHighlights', name: 'Destaques de Preços', icon: 'tabler:receipt' }
  ],
  'realestate': [
    { id: 'id', name: '', icon: '' },
    { id: 'document', name: 'Documento', icon: 'tabler:file-text' },
    { id: 'quarter', name: 'Trimestre', icon: 'tabler:calendar-stats' },
    { id: 'city', name: 'Cidade', icon: 'tabler:building-community' },
    { id: 'propertySize', name: 'Tamanho da Propriedade', icon: 'tabler:ruler-2' },
    { id: 'marketValue', name: 'Valor de Mercado', icon: 'tabler:currency-real' },
    { id: 'propertyType', name: 'Tipo', icon: 'tabler:home' },
    { id: 'buildingCondition', name: 'Condição do Imóvel', icon: 'tabler:building' },
    { id: 'tenancy', name: 'Inquilinos', icon: 'tabler:users' }
  ],
  'assetmanagement': [
    { id: 'id', name: '', icon: '' },
    { id: 'document', name: 'Documento', icon: 'tabler:file-text' },
    { id: 'date', name: 'Data', icon: 'tabler:calendar' },
    { id: 'documentType', name: 'Tipo de Documento', icon: 'tabler:folder' },
    { id: 'investmentRisks', name: 'Riscos de Investimento', icon: 'tabler:alert-triangle' },
    { id: 'marketConsiderations', name: 'Considerações de Mercado', icon: 'tabler:chart-bar' },
    { id: 'investmentHighlights', name: 'Destaques de Investimento', icon: 'tabler:star' }
  ]
}; 