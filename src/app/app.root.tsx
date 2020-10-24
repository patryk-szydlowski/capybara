import React from 'react'

import { BottomNavigationView } from 'features/navigation'

import { AppProvider } from './app.provider'

export const AppRoot: React.VFC = () => (
  <AppProvider>
    <BottomNavigationView />
  </AppProvider>
)
