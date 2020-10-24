import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BlurBottomTabBar } from './components'
import { routes, tabBarOptions } from './options'

const { Navigator, Screen } = createBottomTabNavigator()

export const BottomNavigation: React.VFC = () => (
  <Navigator
    initialRouteName={routes.home.name}
    tabBar={BlurBottomTabBar}
    tabBarOptions={tabBarOptions}
  >
    {Object.values(routes).map((route) => (
      <Screen key={route.name} {...route} />
    ))}
  </Navigator>
)
