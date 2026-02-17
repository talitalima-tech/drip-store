/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C92071',
        secondary: '#B5B6F2',
        tertiary: '#991956',
        error: '#EE4266',
        success: '#52CA76',
        warning: '#F6AA1C',
        neutral: {
          darkGray: '#1F1F1F',
          darkGray2: '#474747',
          darkGray3: '#666666',
          lightGray: '#8F8F8F',
          lightGray2: '#CCCCCC',
          lightGray3: '#F5F5F5',
          white: '#FFFFFF',
        },
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
        xxxl: '64px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
