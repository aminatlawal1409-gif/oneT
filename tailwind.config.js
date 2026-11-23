/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#030817',
        'dark-navy': '#06132B',
        'electric-blue': '#087BFF',
        'cyan': '#00C9F2',
        'gold': '#F8C744',
        'teal': '#00C6B8',
        'muted-grey': '#AAB6CC',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #030817 0%, #06132B 50%, #030817 100%)',
        'blue-gold': 'linear-gradient(135deg, #087BFF 0%, #F8C744 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(8,123,255,0.1) 0%, rgba(0,201,242,0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ticker': 'ticker 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(8, 123, 255, 0.3)',
        'glow-gold': '0 0 30px rgba(248, 199, 68, 0.3)',
        'glow-cyan': '0 0 30px rgba(0, 201, 242, 0.3)',
        'card': '0 4px 24px rgba(8, 123, 255, 0.15)',
      },
    },
  },
  plugins: [],
}
