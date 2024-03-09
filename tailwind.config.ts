import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1124px',
    },
    colors: {
      // White
      'white-200': '#FFFFFF',
      'white-100': '#F7F7F8',
      // Black
      'black-200': '#171A1F',
      'black-100': '#262626',
      //Grey
      'grey-300': '#4F709C',
      'grey-200': '#586886',
      'grey-100': '#656567',
      // Orange
      'orange-400': '#FF9500',
      'orange-300': '#FFAE3D',
      'orange-200': '#FFBE63',
      'orange-100': '#FFD280',
      // Purple
      'purple-400': '#5D3891',
      'purple-300': '#7842CB',
      'purple-200': '#8964BD',
      'purple-100': '#EFE3FF',
      // Red
      'red-200': '#913838',
      'red-100': '#F04141',
      // Green
      'green-200': '#006604',
      'green-100': '#00AC07',
    },
    boxShadow: {
      // TODO: Add box shadows when creating card components
    },
    fontSize: {
      xs: ['12px', { lineHeight: '20px', letterSpacing: '-0.03em' }],
      sm: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
      md: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      lg: ['20px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
      '2xl': ['30px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
      '5xl': ['64px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
      xxl: ['96px', { lineHeight: '100px', letterSpacing: '-0.032em' }],
    },
    extend: {
      fontFamily: {
        abhaya: ['Abhaya Libre'],
        vietnam: ['Be Vietnam Pro'],
        manrope: ['Manrope'],
      },
    },
  },
  plugins: [],
};
export default config;
