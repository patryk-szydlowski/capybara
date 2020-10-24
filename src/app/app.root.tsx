import React from 'react'

import { RootNavigation } from 'features/navigation'

import { AppProvider } from './app.provider'

export const AppRoot: React.VFC = () => (
  <AppProvider>
    <RootNavigation />
  </AppProvider>
)
