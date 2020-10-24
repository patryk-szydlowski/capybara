import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
  },
})

export const MainLayout: React.FC = ({ children }) => (
  <SafeAreaView style={style.container}>
    <View>{children}</View>
  </SafeAreaView>
)
