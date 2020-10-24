import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { StoreProvider } from 'features/store'
import { ThemeProvider } from 'features/theme'

export const AppProvider: React.FC = ({ children }) => (
  <NavigationContainer>
    <StoreProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  </NavigationContainer>
)
