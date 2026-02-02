export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lakecity Design',
    url: 'https://lakecitydesign.com',
    logo: 'https://lakecitydesign.com/logo.png',
    description:
      'Project completion agency taking your vision to reality. Complete project delivery, on time, every time. Based in Udaipur, serving clients across India.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Udaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.instagram.com/lakecity.designs/',
    ],
  }
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design and Development',
    provider: {
      '@type': 'Organization',
      name: 'Lakecity Design',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design & Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-Commerce Solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Management',
          },
        },
      ],
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Lakecity Design',
    image: 'https://lakecitydesign.com/logo.png',
    '@id': 'https://lakecitydesign.com',
    url: 'https://lakecitydesign.com',
    telephone: '+91-9675624255',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Udaipur',
      addressRegion: 'Rajasthan',
      postalCode: '',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.5854,
      longitude: 73.7125,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }
}
