import React from 'react'
import { Text, View } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useRoute } from '@react-navigation/native'

import { createIcon } from 'common/components'

const { Navigator, Screen } = createBottomTabNavigator()

const EmptyPage: React.VFC = () => {
  const { name } = useRoute()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{name}</Text>
    </View>
  )
}

const HomeIcon = createIcon(MaterialIcons, 'home')
const WalletsIcon = createIcon(MaterialIcons, 'account-balance-wallet')
const TransactionIcon = createIcon(MaterialCommunityIcons, 'plus-box')
const ChartsIcon = createIcon(MaterialCommunityIcons, 'chart-donut')
const MoreIcon = createIcon(MaterialIcons, 'apps')

export const BottomNavigation: React.VFC = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{ tabBarIcon: MoreIcon }}
    tabBarOptions={{ showLabel: false }}
  >
    <Screen name="Home" options={{ tabBarIcon: HomeIcon }} component={EmptyPage} />
    <Screen name="Wallets" options={{ tabBarIcon: WalletsIcon }} component={EmptyPage} />
    <Screen name="New" options={{ tabBarIcon: TransactionIcon }} component={EmptyPage} />
    <Screen name="Charts" options={{ tabBarIcon: ChartsIcon }} component={EmptyPage} />
    <Screen name="More" options={{ tabBarIcon: MoreIcon }} component={EmptyPage} />
  </Navigator>
)
