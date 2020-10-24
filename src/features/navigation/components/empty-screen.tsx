import React from 'react'
import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

// TODO - use this a scaffolding for creating screens, remove this afterwards
export const EmptyScreen: React.VFC = () => {
  const { name } = useRoute()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{name} screen</Text>
    </View>
  )
}
