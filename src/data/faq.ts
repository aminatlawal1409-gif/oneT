import { FAQItem } from '../types';

export const faqItems: FAQItem[] = [
  // General
  {
    id: 'g1',
    category: 'General',
    question: 'What is One Trade?',
    answer: 'One Trade is a next-generation online trading platform that provides access to a wide range of global financial markets including Forex, Cryptocurrency, Stocks, Commodities, and Indices — all within a single, integrated trading environment.',
  },
  {
    id: 'g2',
    category: 'General',
    question: 'Is One Trade regulated?',
    answer: 'Information about our regulatory status and licensing will be published here once confirmed. We encourage you to contact our support team for the most up-to-date compliance and regulatory information before trading.',
  },
  {
    id: 'g3',
    category: 'General',
    question: 'Which countries can use One Trade?',
    answer: 'One Trade is available in a growing number of countries. Availability may vary based on local regulations. Please contact our support team or check the registration flow to confirm availability in your region.',
  },
  // Account
  {
    id: 'a1',
    category: 'Account',
    question: 'How do I open a trading account?',
    answer: 'Click "Get Started" at the top of the page to begin the registration process. You will be guided through identity verification and account setup steps. The process is designed to be straightforward and can typically be completed within a short time.',
  },
  {
    id: 'a2',
    category: 'Account',
    question: 'What documents are required to verify my account?',
    answer: 'Standard identity verification typically requires a valid government-issued photo ID (passport or national ID card) and proof of address (utility bill or bank statement dated within the last three months). Our team will guide you through the full verification process.',
  },
  {
    id: 'a3',
    category: 'Account',
    question: 'What is the minimum deposit to start trading?',
    answer: 'Minimum deposit requirements will be confirmed once the platform launches. Please contact our support team or check the account registration page for the most current deposit information.',
  },
  // Markets
  {
    id: 'm1',
    category: 'Markets',
    question: 'What markets can I trade on One Trade?',
    answer: 'One Trade provides access to Forex currency pairs, Cryptocurrency, global Stocks, Commodities (including precious metals and energy), and major global Indices. Each market has a dedicated section with relevant instruments and information.',
  },
  {
    id: 'm2',
    category: 'Markets',
    question: 'Is the market data on the website real-time?',
    answer: 'Market data displayed on the public website is illustrative demo data used for demonstration purposes. Live real-time market data is available within the authenticated trading platform after account setup.',
  },
  {
    id: 'm3',
    category: 'Markets',
    question: 'What are the trading hours?',
    answer: 'Trading hours vary by market. Forex is available 24 hours a day, five days a week. Cryptocurrency markets run around the clock, seven days a week. Stock and index trading follows the operating hours of the relevant exchanges. Full trading hours are available on the platform.',
  },
  // Trading
  {
    id: 't1',
    category: 'Trading',
    question: 'Does One Trade offer a demo account?',
    answer: 'A demo trading environment is planned to allow traders to practice using the platform with simulated funds before committing real capital. Please check back or contact us for availability.',
  },
  {
    id: 't2',
    category: 'Trading',
    question: 'What order types are supported?',
    answer: 'The platform is designed to support market orders, limit orders, stop orders, stop-limit orders, and take-profit orders. Advanced order management tools are built into the trading interface.',
  },
  {
    id: 't3',
    category: 'Trading',
    question: 'Is leverage available?',
    answer: 'Leverage availability and applicable ratios depend on the instrument, account type, and your jurisdiction. Leverage involves significant risk and is not suitable for all traders. Full leverage information will be provided during account registration.',
  },
  // Security
  {
    id: 's1',
    category: 'Security',
    question: 'How is my account secured?',
    answer: 'One Trade employs industry-standard 256-bit SSL encryption, mandatory two-factor authentication (2FA), continuous account monitoring, and secure infrastructure to protect your account and personal information.',
  },
  {
    id: 's2',
    category: 'Security',
    question: 'Are client funds kept separate?',
    answer: 'Client fund segregation policies and safeguarding arrangements will be detailed in our terms and conditions and regulatory disclosures. Please contact our team for the full details of our fund protection approach.',
  },
  // Support
  {
    id: 'sup1',
    category: 'Support',
    question: 'How do I contact customer support?',
    answer: 'Our support team is available 24/7. You can reach us through the Contact page on this website, by emailing support@onetrade.com (placeholder — update before launch), or through the live chat feature within the platform.',
  },
  {
    id: 'sup2',
    category: 'Support',
    question: 'Is there an educational section for new traders?',
    answer: 'One Trade is building a comprehensive educational library including articles, video tutorials, and trading guides designed to help traders at all experience levels develop their knowledge and skills.',
  },
];

export const faqCategories = ['All', 'General', 'Account', 'Markets', 'Trading', 'Security', 'Support'];
