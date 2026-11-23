import { Market } from '../types';

// NOTE: All market data below is ILLUSTRATIVE DEMO DATA only.
// Replace with real API integration before going live.

export const markets: Market[] = [
  {
    id: 'forex',
    name: 'Forex',
    icon: 'DollarSign',
    description: 'Trade the world\'s most liquid market with major, minor, and exotic currency pairs around the clock.',
    assets: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'USD/CHF'],
    color: '#087BFF',
    change: '+0.42%',
    positive: true,
  },
  {
    id: 'crypto',
    name: 'Cryptocurrency',
    icon: 'Bitcoin',
    description: 'Access leading digital assets and explore the rapidly evolving world of cryptocurrency markets.',
    assets: ['Bitcoin', 'Ethereum', 'Solana', 'BNB', 'XRP'],
    color: '#F8C744',
    change: '+2.18%',
    positive: true,
  },
  {
    id: 'stocks',
    name: 'Stocks',
    icon: 'TrendingUp',
    description: 'Trade shares of leading global companies across technology, finance, healthcare, and more.',
    assets: ['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'AMZN'],
    color: '#00C6B8',
    change: '-0.31%',
    positive: false,
  },
  {
    id: 'commodities',
    name: 'Commodities',
    icon: 'Layers',
    description: 'Diversify your portfolio with precious metals, energy, and agricultural commodity instruments.',
    assets: ['Gold', 'Silver', 'Crude Oil', 'Natural Gas', 'Wheat'],
    color: '#00C9F2',
    change: '+1.05%',
    positive: true,
  },
  {
    id: 'indices',
    name: 'Indices',
    icon: 'BarChart2',
    description: 'Trade on the performance of global stock market indices representing leading economies.',
    assets: ['S&P 500', 'NASDAQ', 'FTSE 100', 'DAX 40', 'Nikkei 225'],
    color: '#087BFF',
    change: '+0.76%',
    positive: true,
  },
];

// DEMO ticker data — replace with real-time API feed
export const tickerData = [
  { symbol: 'EUR/USD', price: '1.08421', change: '+0.0012', positive: true },
  { symbol: 'BTC/USD', price: '67,842', change: '+1,204', positive: true },
  { symbol: 'GOLD', price: '2,318.40', change: '-4.20', positive: false },
  { symbol: 'S&P 500', price: '5,248.80', change: '+18.60', positive: true },
  { symbol: 'GBP/USD', price: '1.26530', change: '-0.0023', positive: false },
  { symbol: 'ETH/USD', price: '3,421.50', change: '+88.20', positive: true },
  { symbol: 'CRUDE OIL', price: '82.45', change: '+0.75', positive: true },
  { symbol: 'NASDAQ', price: '16,384.47', change: '+124.30', positive: true },
];
