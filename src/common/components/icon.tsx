import React from 'react'
import { Icon as ExpoIcon } from '@expo/vector-icons/build/createIconSet'

export type IconFamily = ExpoIcon<string, string> | React.VFC<IconProps & { name: string }>

export type IconCreatorProps = {
  family: IconFamily
  name: string
  sizeOverride?: (size: number) => number
}

export type IconProps = {
  color: string
  size: number
}

export function createIcon({
  family: Icon,
  name,
  sizeOverride,
}: IconCreatorProps): React.VFC<IconProps> {
  return (iconProps) => (
    <Icon
      {...iconProps}
      name={name}
      size={sizeOverride ? sizeOverride(iconProps.size) : iconProps.size}
    />
  )
}
