import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import { createIcon, IconProps } from 'common/components'

import { EmptyScreen } from './components'

type Routes = {
  home: 'home'
  wallets: 'wallets'
  createTransaction: 'create-transaction'
  charts: 'charts'
  more: 'more'
}

type RoutesOptions<R extends Record<string, string>> = {
  [K in keyof R]: {
    name: R[K]
    component: React.VFC
    options: {
      tabBarIcon: React.VFC<IconProps>
    }
  }
}

export const routes: RoutesOptions<Routes> = {
  home: {
    name: 'home',
    component: EmptyScreen,
    options: {
      tabBarIcon: createIcon(MaterialIcons, 'home'),
    },
  },
  wallets: {
    name: 'wallets',
    component: EmptyScreen,
    options: {
      tabBarIcon: createIcon(MaterialIcons, 'account-balance-wallet'),
    },
  },
  createTransaction: {
    name: 'create-transaction',
    component: EmptyScreen,
    options: {
      tabBarIcon: createIcon(MaterialCommunityIcons, 'plus-box'),
    },
  },
  charts: {
    name: 'charts',
    component: EmptyScreen,
    options: {
      tabBarIcon: createIcon(MaterialCommunityIcons, 'chart-donut'),
    },
  },
  more: {
    name: 'more',
    component: EmptyScreen,
    options: {
      tabBarIcon: createIcon(MaterialIcons, 'apps'),
    },
  },
}

export const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: 'transparent',
  },
}
