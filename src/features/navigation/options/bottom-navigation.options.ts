import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import { createIcon } from 'common/components'
import { EmptyScreen } from 'features/navigation/components'
import { BottomNavigationRouteOptions, BottomNavigationRoutesOptions } from 'types/navigation'
import {
  BottomNavigationRoutes,
  ChartsRoute,
  HomeRoute,
  InvestmentsRoute,
  MoreRoute,
  WalletsRoute,
} from 'types/navigation/routes'

const homeRouteOptions: BottomNavigationRouteOptions<HomeRoute> = {
  name: HomeRoute,
  component: EmptyScreen,
  options: {
    tabBarIcon: createIcon(MaterialIcons, 'home'),
  },
}

const walletsRouteOptions: BottomNavigationRouteOptions<WalletsRoute> = {
  name: WalletsRoute,
  component: EmptyScreen,
  options: {
    tabBarIcon: createIcon(MaterialIcons, 'account-balance-wallet'),
  },
}

const chartsRouteOptions: BottomNavigationRouteOptions<ChartsRoute> = {
  name: ChartsRoute,
  component: EmptyScreen,
  options: {
    tabBarIcon: createIcon(MaterialCommunityIcons, 'chart-donut'),
  },
}

const investmentsRouteOptions: BottomNavigationRouteOptions<InvestmentsRoute> = {
  name: InvestmentsRoute,
  component: EmptyScreen,
  options: {
    tabBarIcon: createIcon(MaterialCommunityIcons, 'chart-line-variant'),
  },
}

const moreRouteOptions: BottomNavigationRouteOptions<MoreRoute> = {
  name: MoreRoute,
  component: EmptyScreen,
  options: {
    tabBarIcon: createIcon(MaterialIcons, 'apps'),
  },
}

export const routes: BottomNavigationRoutesOptions<BottomNavigationRoutes> = {
  [HomeRoute]: homeRouteOptions,
  [WalletsRoute]: walletsRouteOptions,
  [ChartsRoute]: chartsRouteOptions,
  [InvestmentsRoute]: investmentsRouteOptions,
  [MoreRoute]: moreRouteOptions,
}

export const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: 'transparent',
  },
}
