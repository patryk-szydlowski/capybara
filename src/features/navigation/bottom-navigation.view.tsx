import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { routes, tabBarOptions } from './bottom-navigation.const'
import { BlurBottomTabBar } from './components'

const { Navigator, Screen } = createBottomTabNavigator()

export const BottomNavigationView: React.VFC = () => (
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
