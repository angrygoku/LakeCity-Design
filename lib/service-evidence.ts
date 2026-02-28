export type EvidenceConfidence = 'Measured' | 'Estimated' | 'Client-reported'

export interface EvidenceMetric {
  label: string
  value: string
  change?: string
  period: string
  source: string
  confidence: EvidenceConfidence
}

export interface ServiceEvidence {
  slug: string
  typicalImpact: string
  medianTimeline: string
  p75Timeline: string
  bestFit: string
  sampleSize: number
  lastUpdated: string
  dataCoverage: string
  ownerRole: string
  kpis: EvidenceMetric[]
  methodology: string[]
  riskNotes: string[]
  miniCases: {
    title: string
    result: string
    timeframe: string
    confidence: EvidenceConfidence
  }[]
}

export const overviewEvidenceCards: EvidenceMetric[] = [
  {
    label: 'Median Delivery Timeline',
    value: '6.4 weeks',
    period: 'Jan–Dec 2025',
    source: 'Internal project delivery tracker',
    confidence: 'Measured',
  },
  {
    label: 'On-time Delivery Rate',
    value: '92%',
    period: 'Jan–Dec 2025',
    source: 'Internal PM milestones',
    confidence: 'Measured',
  },
  {
    label: 'Typical Conversion Lift',
    value: '+18% to +42%',
    period: 'Last 12 completed launches',
    source: 'GA4 + CRM pipeline snapshots',
    confidence: 'Measured',
  },
  {
    label: '12-Month Client Retention',
    value: '88%',
    period: 'FY 2025 cohort',
    source: 'Account management records',
    confidence: 'Measured',
  },
]

export const servicesByCategoryData = [
  { category: 'Web Design', projects: 54 },
  { category: 'E-Commerce', projects: 29 },
  { category: 'Social Media', projects: 41 },
]

export const serviceEvidence: Record<string, ServiceEvidence> = {
  'web-design': {
    slug: 'web-design',
    typicalImpact: '+22% to +48% qualified leads',
    medianTimeline: '6 weeks',
    p75Timeline: '9 weeks',
    bestFit: 'Growing businesses needing high-conversion websites and clear content architecture.',
    sampleSize: 24,
    lastUpdated: '2026-01-31',
    dataCoverage: 'Projects delivered between Jan 2025 and Jan 2026',
    ownerRole: 'Head of Web Delivery',
    kpis: [
      {
        label: 'Median mobile performance score',
        value: '95',
        period: 'Last 15 launches',
        source: 'Google Lighthouse CI reports',
        confidence: 'Measured',
      },
      {
        label: 'Avg. lead form completion lift',
        value: '+31%',
        period: '12 weeks post-launch',
        source: 'GA4 + CRM attribution',
        confidence: 'Measured',
      },
      {
        label: 'Bounce rate reduction',
        value: '-19%',
        period: '8 weeks post-launch',
        source: 'Client analytics workspaces',
        confidence: 'Client-reported',
      },
    ],
    methodology: [
      'Performance metrics are taken from Lighthouse CI reports on production builds.',
      'Lead impact compares 8-week baseline vs 8-week post-launch windows.',
      'Attribution is directional when marketing campaigns changed during measurement period.',
    ],
    riskNotes: [
      'Copy quality and sales follow-up speed can materially impact conversion lift.',
      'Major traffic source changes may dilute before/after comparisons.',
    ],
    miniCases: [
      {
        title: 'B2B Corporate Site Revamp',
        result: '+37% demo requests',
        timeframe: '10 weeks',
        confidence: 'Measured',
      },
      {
        title: 'Luxury Real Estate Platform',
        result: '+28% qualified enquiries',
        timeframe: '12 weeks',
        confidence: 'Client-reported',
      },
      {
        title: 'Manufacturing Rebrand Site',
        result: '-22% bounce rate',
        timeframe: '8 weeks',
        confidence: 'Measured',
      },
    ],
  },
  'e-commerce': {
    slug: 'e-commerce',
    typicalImpact: '+12% to +29% checkout conversion',
    medianTimeline: '8 weeks',
    p75Timeline: '12 weeks',
    bestFit: 'Retail and D2C teams scaling catalog complexity and paid acquisition.',
    sampleSize: 17,
    lastUpdated: '2026-01-31',
    dataCoverage: 'Projects delivered between Jan 2025 and Jan 2026',
    ownerRole: 'E-Commerce Practice Lead',
    kpis: [
      {
        label: 'Median checkout completion uplift',
        value: '+18%',
        period: '90 days post-launch',
        source: 'Shopify + payment funnel analytics',
        confidence: 'Measured',
      },
      {
        label: 'Avg. page load improvement',
        value: '-1.3s',
        period: 'Homepage + PDP median',
        source: 'Web Vitals RUM dashboard',
        confidence: 'Measured',
      },
      {
        label: 'AOV lift after UX optimization',
        value: '+11%',
        period: '2 fiscal quarters',
        source: 'Client finance exports',
        confidence: 'Client-reported',
      },
    ],
    methodology: [
      'Conversion metrics compare matched seasonality windows whenever possible.',
      'RUM performance is sampled from real user traffic across mobile and desktop.',
      'Revenue-attributed metrics are validated with client finance teams.',
    ],
    riskNotes: [
      'Inventory issues and pricing changes can mask UX improvements.',
      'Promotional campaigns can inflate short-term conversion metrics.',
    ],
    miniCases: [
      {
        title: 'D2C Migration to Shopify Plus',
        result: '+21% checkout completion',
        timeframe: '12 weeks',
        confidence: 'Measured',
      },
      {
        title: 'Electronics Store UX Refresh',
        result: '+14% AOV',
        timeframe: '9 weeks',
        confidence: 'Client-reported',
      },
      {
        title: 'Lifestyle Brand Catalog Redesign',
        result: '-17% cart abandonment',
        timeframe: '8 weeks',
        confidence: 'Measured',
      },
    ],
  },
  'social-media': {
    slug: 'social-media',
    typicalImpact: '+2.1x to +3.8x engagement rate',
    medianTimeline: '12 weeks',
    p75Timeline: '16 weeks',
    bestFit: 'Brands needing consistent pipeline-oriented content and community management.',
    sampleSize: 21,
    lastUpdated: '2026-01-31',
    dataCoverage: 'Campaigns active between Jan 2025 and Jan 2026',
    ownerRole: 'Social Growth Manager',
    kpis: [
      {
        label: 'Median engagement rate uplift',
        value: '+156%',
        period: 'First 90 days',
        source: 'Platform analytics exports',
        confidence: 'Measured',
      },
      {
        label: 'Inbound lead lift from social',
        value: '+34%',
        period: 'Quarter-over-quarter',
        source: 'UTM + CRM pipeline tracking',
        confidence: 'Measured',
      },
      {
        label: 'Audience growth consistency',
        value: '83% hit monthly targets',
        period: '2025 campaign set',
        source: 'Client scorecards',
        confidence: 'Client-reported',
      },
    ],
    methodology: [
      'Engagement rate uses platform-native definitions by channel.',
      'Lead lift tracks UTM-tagged sessions tied to CRM opportunities.',
      'Cross-channel attribution is treated as contributory, not absolute causation.',
    ],
    riskNotes: [
      'Algorithm and platform policy changes can shift organic reach quickly.',
      'Creative approval delays reduce posting consistency and campaign momentum.',
    ],
    miniCases: [
      {
        title: 'Restaurant Social Growth Program',
        result: '+2.9x engagement rate',
        timeframe: '14 weeks',
        confidence: 'Measured',
      },
      {
        title: 'Healthcare Awareness Campaign',
        result: '+41% appointment enquiries',
        timeframe: '12 weeks',
        confidence: 'Client-reported',
      },
      {
        title: 'B2B Thought Leadership Series',
        result: '+27% inbound SQLs',
        timeframe: '16 weeks',
        confidence: 'Measured',
      },
    ],
  },
}
