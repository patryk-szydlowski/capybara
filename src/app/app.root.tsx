import React from 'react'

import { BottomNavigation } from 'features/navigation'

import { AppProvider } from './app.provider'

export const AppRoot: React.VFC = () => (
  <AppProvider>
    <BottomNavigation />
  </AppProvider>
)
