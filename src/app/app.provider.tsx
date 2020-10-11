import React from 'react'

import { StoreProvider } from 'features/store'

export const AppProvider: React.FC = ({ children }) => <StoreProvider>{children}</StoreProvider>
