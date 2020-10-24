import React from 'react'

import { IconProps } from 'common/components'

export type BottomNavigationRouteOptions<K extends string> = {
  name: K
  component: React.VFC
  options: {
    tabBarIcon: React.VFC<IconProps>
  }
}

export type BottomNavigationRoutesOptions<R extends Record<string, string>> = {
  [K in keyof R]: BottomNavigationRouteOptions<R[K]>
}
