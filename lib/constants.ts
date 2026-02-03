export const siteConfig = {
  name: 'Lakecity Design',
  description: 'Project Completion Agency - From Vision to Reality',
  url: 'https://lakecitydesign.com',
  ogImage: '/og-image.jpg',
  links: {
    phone: '+91-96756-24255',
    email: 'contact@lakecitydesign.com',
    instagram: 'https://www.instagram.com/lakecity.designs/',
  },
  address: {
    city: 'Udaipur',
    state: 'Rajasthan',
    country: 'India',
  },
}

export const stats = {
  yearsExperience: 8,
  projectsDelivered: 150,
  clientRetention: 98,
  supportHours: '24/7',
}

export const services = [
  {
    id: 'web-design',
    title: 'Web Design & Development',
    slug: 'web-design',
    description:
      'Custom websites that convert visitors into customers. Fast, secure, and built to scale.',
    longDescription:
      'We engineer digital platforms that position your brand as an industry leader. Every website we build is optimized for performance, conversion, and user experience. From corporate websites to complex web applications, we deliver solutions that drive measurable business results.',
    deliverables: [
      'Custom Design & Development',
      'CMS Integration (Contentful, Strapi)',
      'SEO Optimization & Setup',
      'Mobile Responsive Design',
      'Performance Optimization',
      'Security Implementation',
      'Analytics Integration',
      'Ongoing Maintenance',
    ],
    icon: 'Globe',
    features: [
      'Lighthouse scores 95+',
      'Core Web Vitals optimized',
      'Accessibility compliant (WCAG 2.1 AA)',
      'Custom functionality',
      'Third-party integrations',
    ],
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Solutions',
    slug: 'e-commerce',
    description:
      'Online stores engineered for sales. From Shopify to custom builds, we optimize every step of the buyer journey.',
    longDescription:
      'We build e-commerce platforms that convert browsers into buyers. Whether you need a Shopify store or a custom solution, we optimize every touchpoint—from product discovery to checkout—to maximize conversions and average order value.',
    deliverables: [
      'Platform Setup & Migration',
      'Payment Gateway Integration',
      'Inventory Management System',
      'Conversion Rate Optimization',
      'Product Catalog Management',
      'Order Fulfillment Integration',
      'Marketing Automation',
      'Analytics & Reporting',
    ],
    icon: 'ShoppingCart',
    features: [
      'Shopify Plus expertise',
      'Custom e-commerce development',
      'Multi-channel integration',
      'Advanced product filtering',
      'Personalized recommendations',
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    slug: 'social-media',
    description:
      'Strategic content that builds community and drives revenue. Not just posting — growing.',
    longDescription:
      'We develop comprehensive social media strategies that build brand authority and generate qualified leads. Our approach combines data-driven content creation, community engagement, and paid advertising to deliver measurable ROI.',
    deliverables: [
      'Content Strategy & Planning',
      'Daily Content Creation',
      'Community Management',
      'Paid Advertising Campaigns',
      'Influencer Partnerships',
      'Analytics & Performance Reporting',
      'Brand Voice Development',
      'Crisis Management',
    ],
    icon: 'Share2',
    features: [
      'Multi-platform management',
      'Content calendar planning',
      'Performance analytics',
      'ROI tracking',
      'Community building',
    ],
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We learn your business, goals, and audience. No templates, ever. Every project starts with deep research and understanding.',
    details: [
      'Stakeholder interviews',
      'Competitive analysis',
      'User research',
      'Technical audit',
      'Goal definition',
    ],
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Clear roadmap with timelines, milestones, and deliverables. We define success metrics and create a detailed project plan.',
    details: [
      'Project roadmap',
      'Timeline & milestones',
      'Success metrics',
      'Resource planning',
      'Risk assessment',
    ],
  },
  {
    number: '03',
    title: 'Design & Build',
    description:
      'Collaborative iterations. You see progress weekly. We design, develop, and refine until it\'s perfect.',
    details: [
      'Wireframing & prototyping',
      'Design system creation',
      'Development sprints',
      'Weekly progress reviews',
      'Quality assurance',
    ],
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'We don\'t disappear after launch. 30-day support included, plus ongoing maintenance options.',
    details: [
      'Deployment & launch',
      'Performance monitoring',
      '30-day support period',
      'Training & documentation',
      'Ongoing maintenance plans',
    ],
  },
]

export const pricingPackages = {
  websites: [
    {
      name: 'Starter',
      price: '₹50,000',
      pages: 5,
      features: [
        'Custom Design (3 concepts)',
        'Mobile Responsive',
        'Contact Form Integration',
        'Basic SEO Setup',
        'Google Analytics',
        '1 Month Post-Launch Support',
        'Performance Optimization',
      ],
      popular: false,
      timeline: '4-6 weeks',
      bestFor: 'Small businesses, startups',
    },
    {
      name: 'Business',
      price: '₹1,50,000',
      pages: 10,
      features: [
        'Everything in Starter',
        'CMS Integration',
        'Advanced SEO Optimization',
        'Custom Functionality',
        'Third-party Integrations',
        '3 Months Post-Launch Support',
        'Performance Optimization (95+ Lighthouse)',
        'Content Strategy Consultation',
      ],
      popular: true,
      timeline: '6-8 weeks',
      bestFor: 'Growing businesses, established companies',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      pages: 'Unlimited',
      features: [
        'Everything in Business',
        'Custom Features & Integrations',
        'Priority Support',
        'Dedicated Project Manager',
        'Ongoing Maintenance Plans',
        'White-label Options',
        'Advanced Analytics Setup',
        'Team Training',
      ],
      popular: false,
      timeline: '8-12 weeks',
      bestFor: 'Large organizations, agencies',
    },
  ],
  ecommerce: [
    {
      name: 'Shopify Setup',
      price: '₹75,000',
      features: [
        'Theme Customization',
        'Product Setup (up to 50 products)',
        'Payment Gateway Integration',
        'Inventory Management Setup',
        'Shipping Configuration',
        'Basic SEO',
        '1 Month Support',
      ],
      popular: false,
      timeline: '3-4 weeks',
    },
    {
      name: 'Custom Development',
      price: '₹2,00,000',
      features: [
        'Custom E-Commerce Platform',
        'Advanced Features',
        'Third-party Integrations',
        'Scalable Architecture',
        'Admin Dashboard',
        'Advanced Analytics',
        '3 Months Support',
      ],
      popular: true,
      timeline: '8-12 weeks',
    },
    {
      name: 'Enterprise Scale',
      price: 'Custom',
      features: [
        'Multi-channel Integration',
        'Advanced Analytics & Reporting',
        'Dedicated Support Team',
        'Custom Workflows',
        'API Development',
        'Enterprise Security',
        'Ongoing Maintenance',
      ],
      popular: false,
      timeline: '12+ weeks',
    },
  ],
  socialMedia: [
    {
      name: 'Starter',
      price: '₹15,000/mo',
      features: [
        '3 Posts per Week',
        'Content Creation',
        'Basic Analytics',
        '1 Platform (Instagram)',
        'Community Management',
        'Monthly Strategy Review',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      price: '₹35,000/mo',
      features: [
        'Daily Posts',
        'Paid Ads Management (₹10k ad spend)',
        'Advanced Analytics',
        '3 Platforms (Instagram, Facebook)',
        'Community Management',
        'Influencer Outreach',
        'Monthly Strategy Review',
      ],
      popular: true,
    },
    {
      name: 'Full Management',
      price: '₹60,000/mo',
      features: [
        'Everything in Growth',
        'Content Strategy Development',
        'Influencer Partnerships',
        'All Platforms',
        'Dedicated Account Manager',
        'Weekly Strategy Calls',
        'Crisis Management',
        'Brand Voice Development',
      ],
      popular: false,
    },
  ],
}

export const faqs = [
  {
    question: 'How long does a website take?',
    answer:
      'Timeline depends on project scope. A standard business website typically takes 4-6 weeks from kickoff to launch. Enterprise projects with custom features may take 8-12 weeks. We provide detailed timelines during the discovery phase and keep you updated weekly on progress.',
  },
  {
    question: 'Do I own the code?',
    answer:
      'Yes, absolutely. Upon final payment, you receive full ownership of all code, designs, and assets. We believe in complete transparency and client ownership. You can take your website anywhere, anytime.',
  },
  {
    question: 'What if I need changes after launch?',
    answer:
      'We include 30 days of post-launch support with all projects for bug fixes and minor adjustments. After that, we offer flexible maintenance plans starting at ₹5,000/month for updates, security patches, and content changes. Major feature additions are quoted separately.',
  },
  {
    question: 'Can you work with our marketing team?',
    answer:
      'Absolutely. We excel at collaborating with in-house teams. We can integrate with your existing tools (CRM, marketing automation, analytics), follow your brand guidelines, and work alongside your marketing department seamlessly. We provide training and documentation to ensure smooth handoff.',
  },
  {
    question: 'Do you provide hosting?',
    answer:
      'We recommend and can set up hosting on Vercel, Netlify, or your preferred platform. We handle the technical setup, and you maintain control of your hosting account. We can also manage hosting as part of our maintenance plans.',
  },
  {
    question: 'What makes you different from other agencies?',
    answer:
      'We focus exclusively on established businesses that need reliable, scalable solutions. Our process is transparent, our code is maintainable, and we don\'t disappear after launch. We\'re partners, not vendors. We measure success by your business growth, not just project completion.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes, we serve clients across India and internationally. We work in multiple time zones and use collaborative tools to ensure seamless communication regardless of location.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, UPI, and international wire transfers. Payment terms are typically 50% upfront and 50% on completion, though we can customize based on project size.',
  },
]
