// src/lib/theme.ts
'use client';

import { createTheme, PaletteMode } from '@mui/material/styles';

const sapColors = {
  light: {
    primary: {
      main: '#0070F2', // SAP Blue
      light: '#4DB1FF',
      dark: '#0050C0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#354A5F', // SAP Shell Header
      light: '#475E77',
      dark: '#1C2937',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#BB0000', // SAP Error
      light: '#DB0000',
      dark: '#910000',
    },
    warning: {
      main: '#E9730C', // SAP Warning
      light: '#F48B1C',
      dark: '#D46100',
    },
    success: {
      main: '#107E3E', // SAP Success
      light: '#1B8C45',
      dark: '#0B6733',
    },
    info: {
      main: '#0070F2',
      light: '#4DB1FF',
      dark: '#0050C0',
    },
    background: {
      default: '#F5F6F7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#32363A',
      secondary: '#515559',
    },
  },
  dark: {
    primary: {
      main: '#4DB1FF',
      light: '#69BEFF',
      dark: '#0070F2',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#475E77',
      light: '#5B7690',
      dark: '#354A5F',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF8D8D',
      light: '#FFA5A5',
      dark: '#FF7575',
    },
    warning: {
      main: '#FFB97D',
      light: '#FFC895',
      dark: '#FFAA65',
    },
    success: {
      main: '#87D3A0',
      light: '#9FDBB8',
      dark: '#6FCB88',
    },
    background: {
      default: '#1D2D3E',
      paper: '#2B3E53',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D9D9D9',
    },
  },
};

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? sapColors.light : sapColors.dark),
    },
    typography: {
      fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        letterSpacing: '-0.01562em',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
        letterSpacing: '-0.00833em',
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        letterSpacing: '0em',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
        letterSpacing: '0.00735em',
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            padding: '6px 20px',
            fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 4,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            borderBottom: '1px solid',
            borderColor: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
          },
        },
      },
    },
  });
};