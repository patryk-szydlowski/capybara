import { useTheme as useRestyleTheme } from '@shopify/restyle'

import { Theme } from './theme.const'

export const useTheme = (): Theme => useRestyleTheme<Theme>()
