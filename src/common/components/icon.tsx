import React from 'react'
import { Icon as ExpoIcon } from '@expo/vector-icons/build/createIconSet'

export type IconFamily = ExpoIcon<string, string> | React.VFC<IconProps & { name: string }>

export type IconProps = {
  color: string
  size: number
}

export function createIcon(family: IconFamily, name: string): React.VFC<IconProps> {
  const IconComponent = family
  return (iconProps) => <IconComponent {...iconProps} name={name} />
}
