import React from 'react'
import { Icon as ExpoIcon } from '@expo/vector-icons/build/createIconSet'

export type IconProps = {
  color: string
  size: number
}

export function createIcon(family: ExpoIcon<string, string>, name: string): React.VFC<IconProps> {
  const IconComponent = family
  return (iconProps) => <IconComponent {...iconProps} name={name} />
}
