export const HomeRoute = 'home'
export const WalletsRoute = 'wallets'
export const ChartsRoute = 'charts'
export const InvestmentsRoute = 'investments'
export const MoreRoute = 'more'

export type HomeRoute = typeof HomeRoute
export type WalletsRoute = typeof WalletsRoute
export type ChartsRoute = typeof ChartsRoute
export type InvestmentsRoute = typeof InvestmentsRoute
export type MoreRoute = typeof MoreRoute

export const BottomNavigationRoutes = {
  [HomeRoute]: HomeRoute,
  [WalletsRoute]: WalletsRoute,
  [ChartsRoute]: ChartsRoute,
  [InvestmentsRoute]: InvestmentsRoute,
  [MoreRoute]: MoreRoute,
}

export type BottomNavigationRoutes = typeof BottomNavigationRoutes
