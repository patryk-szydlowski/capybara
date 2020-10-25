import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

import { createIcon } from 'common/components'
import { ChartsScreen } from 'features/charts'
import { HomeScreen } from 'features/home'
import { MoreScreen } from 'features/more'
import { WalletsScreen } from 'features/wallets'

import { BlurBottomTabBar } from './components'
import { dashboardRoutes, rootRoutes } from './routes'

const { Navigator, Screen } = createBottomTabNavigator()

export const DashboardNavigation: React.VFC = () => {
  const { navigate } = useNavigation()
  const createTransaction = () => navigate(rootRoutes.createTransaction)

  return (
    <Navigator
      initialRouteName={dashboardRoutes.home}
      tabBar={BlurBottomTabBar}
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: 'transparent' },
      }}
    >
      <Screen
        name={dashboardRoutes.home}
        component={HomeScreen}
        options={{ tabBarIcon: createIcon({ family: AntDesign, name: 'home' }) }}
      />
      <Screen
        name={dashboardRoutes.wallets}
        component={WalletsScreen}
        options={{ tabBarIcon: createIcon({ family: AntDesign, name: 'creditcard' }) }}
      />
      <Screen
        name={dashboardRoutes.createTransactionBottomNavigationProxy}
        component={View}
        options={{
          tabBarIcon: createIcon({
            family: AntDesign,
            name: 'swap',
            sizeOverride: (size) => size * 1.5,
          }),
          tabBarButton: (props) => <TouchableOpacity {...props} onPress={createTransaction} />,
        }}
      />
      <Screen
        name={dashboardRoutes.charts}
        component={ChartsScreen}
        options={{
          tabBarIcon: createIcon({ family: MaterialCommunityIcons, name: 'chart-donut' }),
        }}
      />
      <Screen
        name={dashboardRoutes.more}
        component={MoreScreen}
        options={{ tabBarIcon: createIcon({ family: MaterialIcons, name: 'apps' }) }}
      />
    </Navigator>
  )
}
