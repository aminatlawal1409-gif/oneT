/**
 * ONE TRADE — Central Company Configuration
 * Update this file to reflect any changes to official company information.
 * All pages and components import from here.
 */

export const company = {
  name: 'One Trade',
  tagline: 'TRADE. INVEST. GROW.',
  founder: 'Eniola Ibrahim',
  yearEstablished: 2020,

  address: {
    line1: '2, Adetunji Close,',
    line2: 'Along Anobi Nuah Street,',
    city: 'Mowe',
    full: '2, Adetunji Close, along Anobi Nuah Street, Mowe.',
  },

  phones: [
    { display: '07031446873', tel: 'tel:07031446873' },
    { display: '08160443665', tel: 'tel:08160443665' },
  ],

  // No official email or social media accounts supplied — using placeholders
  email: null as string | null, // Replace with official email when available
  socialMedia: {
    twitter: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
    youtube: null as string | null,
  },

  vision:
    'To become a leading and trusted financial trading and investment brand, empowering individuals and businesses with innovative financial solutions, accessible market opportunities, and the knowledge required to make smarter financial decisions and achieve sustainable growth.',

  mission:
    'To provide accessible, innovative, and customer-focused trading and investment solutions through modern technology, reliable market information, educational resources, and professional support.',

  missionPoints: [
    'Promoting smarter and more informed trading decisions.',
    'Making financial market opportunities more accessible.',
    'Encouraging financial literacy and investment awareness.',
    'Providing innovative tools and technology to support trading activities.',
    'Building lasting relationships through professionalism, transparency, and customer satisfaction.',
    'Supporting individuals in their journey towards financial growth.',
  ],

  background:
    'One Trade was founded in 2020 by Eniola Ibrahim with the ambition of providing a modern approach to trading and investment opportunities. The company focuses on the evolving financial marketplace and the role of technology in making trading information, market analysis, and investment-related services more accessible. One Trade aspires to establish a strong presence in the financial technology and trading industry through innovation, professionalism, transparency, and customer satisfaction.',

  coreValues: [
    {
      title: 'Integrity',
      description:
        'Maintaining honesty, transparency, and ethical business practices in everything we do — from product design to customer relationships.',
    },
    {
      title: 'Innovation',
      description:
        'Embracing modern technology and new ideas to continuously improve our financial services and stay ahead of the market.',
    },
    {
      title: 'Customer Commitment',
      description:
        'Prioritising customer satisfaction, support, and positive experiences at every touchpoint of the One Trade journey.',
    },
    {
      title: 'Professionalism',
      description:
        'Upholding high standards in all business operations, communication, and customer relationships.',
    },
    {
      title: 'Growth',
      description:
        'Encouraging continuous improvement, financial development, and long-term value creation for our customers and company.',
    },
    {
      title: 'Trust',
      description:
        'Building confidence through responsible business practices, security, and clear, honest communication.',
    },
  ],

  services: [
    'Foreign Exchange (Forex) Markets',
    'Cryptocurrency Markets',
    'Stock Markets',
    'Commodities Trading',
    'Financial Market Information and Analysis',
    'Trading Technology and Analytical Tools',
    'Investment Education and Financial Awareness',
    'Risk Awareness and Trading Support',
  ],

  corporateStatement:
    'At One Trade, we believe that informed decisions, innovation, and access to financial opportunities are important foundations for growth. Our commitment is to create a brand that inspires confidence, encourages financial awareness, and provides modern solutions for individuals seeking to explore the world of trading and investment.',
} as const;
