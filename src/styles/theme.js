export const theme = {
  colors: {
    primary: {
      main: '#2C5AA0',
      light: '#5A84D5',
      dark: '#1A3A6B',
      contrast: '#FFFFFF'
    },
    secondary: {
      main: '#FF6B35',
      light: '#FF9D6F',
      dark: '#D45A2B',
      contrast: '#FFFFFF'
    },
    neutral: {
      100: '#FFFFFF',
      200: '#F8F9FA',
      300: '#E9ECEF',
      400: '#DEE2E6',
      500: '#6C757D',
      600: '#495057',
      700: '#343A40',
      800: '#212529',
      900: '#000000'
    },
    success: '#28A745',
    warning: '#FFC107',
    error: '#DC3545',
    info: '#17A2B8'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px'
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
    sizes: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px'
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  }
};

export const GlobalStyles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  body: {
    fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
    fontSize: '16px',
    lineHeight: 1.6,
    color: theme.colors.neutral[800],
    backgroundColor: theme.colors.neutral[100],
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: theme.typography.weights.semibold,
    lineHeight: 1.2,
    marginBottom: theme.spacing.md
  },
  a: {
    color: theme.colors.primary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.colors.primary.dark
    }
  },
  button: {
    cursor: 'pointer',
    border: 'none',
    borderRadius: theme.borderRadius.md,
    transition: 'all 0.2s ease-in-out'
  },
  input: {
    border: `1px solid ${theme.colors.neutral[400]}`,
    borderRadius: theme.borderRadius.md,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.primary.main,
      boxShadow: `0 0 0 3px ${theme.colors.primary.light}20`
    }
  }
};