// SEO Schemas - JSON-LD Structured Data for Rich Snippets

export interface BusinessInfo {
  name: string;
  description: string;
  url: string;
  logo: string;
  phone: string;
  email?: string;
  address: {
    street?: string;
    city: string;
    region: string;
    postalCode?: string;
    country: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
}

export interface DoctorInfo {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  url: string;
  worksFor: string;
  medicalSpecialty: string[];
}

export interface ServiceInfo {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  price?: string;
}

// Default business information
const defaultBusiness: BusinessInfo = {
  name: 'Smile Concierge Cancun',
  description:
    'Premium dental tourism in Cancun, Mexico. World-class veneers, implants, and smile design with top specialists at 50-70% savings compared to US prices.',
  url: 'https://smile-concierge-cancun.vercel.app',
  logo: 'https://smile-concierge-cancun.vercel.app/logo/logo_scc.webp',
  phone: '+529983889184',
  address: {
    city: 'Cancún',
    region: 'Quintana Roo',
    country: 'MX',
  },
  geo: {
    latitude: 21.1619,
    longitude: -86.8515,
  },
  priceRange: '$$',
};

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(
  business: BusinessInfo = defaultBusiness
): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: business.name,
    description: business.description,
    url: business.url,
    logo: business.logo,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    sameAs: [
      // Add social media profiles here when available
    ],
  };
  return JSON.stringify(schema);
}

/**
 * Generate LocalBusiness schema for dental clinic
 */
export function generateLocalBusinessSchema(
  business: BusinessInfo = defaultBusiness
): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Dentist', 'MedicalBusiness'],
    name: business.name,
    description: business.description,
    url: business.url,
    logo: business.logo,
    image: business.logo,
    telephone: business.phone,
    priceRange: business.priceRange,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'Country',
        name: 'Canada',
      },
      {
        '@type': 'Country',
        name: 'Mexico',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dental Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dental Veneers',
            description:
              'Premium porcelain and composite veneers for smile transformation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dental Implants',
            description: 'Full dental implant surgery and restoration',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Smile Design',
            description: 'Complete smile makeover with digital planning',
          },
        },
      ],
    },
  };
  return JSON.stringify(schema);
}

/**
 * Generate Person schema for doctors/specialists
 */
export function generateDoctorSchema(doctor: DoctorInfo): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: doctor.name,
    jobTitle: doctor.jobTitle,
    description: doctor.description,
    image: doctor.image,
    url: doctor.url,
    worksFor: {
      '@type': 'MedicalOrganization',
      name: doctor.worksFor,
    },
    medicalSpecialty: doctor.medicalSpecialty,
  };
  return JSON.stringify(schema);
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return JSON.stringify(schema);
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
  dateModified?: string
): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    dateModified: dateModified || new Date().toISOString(),
    isPartOf: {
      '@type': 'WebSite',
      name: 'Smile Concierge Cancun',
      url: 'https://smile-concierge-cancun.vercel.app',
    },
  };
  return JSON.stringify(schema);
}

/**
 * Generate MedicalWebPage schema for health-related content
 */
export function generateMedicalWebPageSchema(
  title: string,
  description: string,
  url: string,
  medicalAudience: string = 'Patient'
): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: title,
    description: description,
    url: url,
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: medicalAudience,
    },
    lastReviewed: new Date().toISOString(),
  };
  return JSON.stringify(schema);
}
