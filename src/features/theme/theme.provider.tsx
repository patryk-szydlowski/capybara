import React from 'react'
import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle'

import { theme } from './theme.const'

export const ThemeProvider: React.FC = ({ children }) => (
  <RestyleThemeProvider theme={theme}>{children}</RestyleThemeProvider>
)
