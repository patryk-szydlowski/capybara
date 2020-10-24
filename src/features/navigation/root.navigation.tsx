import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { CreateTransactionScreen } from 'features/create-transaction'

import { DashboardNavigation } from './dashboard.navigation'
import { rootRoutes } from './routes'

const { Navigator, Screen } = createStackNavigator()

export const RootNavigation: React.VFC = () => (
  <Navigator headerMode="none">
    <Screen name={rootRoutes.dashboard} component={DashboardNavigation} />
    <Screen name={rootRoutes.createTransaction} component={CreateTransactionScreen} />
  </Navigator>
)
