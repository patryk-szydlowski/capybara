import React from 'react'

import { StoreProvider } from 'features/store'
import { ThemeProvider } from 'features/theme'

export const AppProvider: React.FC = ({ children }) => (
  <StoreProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </StoreProvider>
)
