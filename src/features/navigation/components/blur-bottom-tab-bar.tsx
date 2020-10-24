import React from 'react'
import { StyleSheet } from 'react-native'
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import { BlurView } from 'expo-blur'

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
})

export const BlurBottomTabBar: React.VFC<BottomTabBarProps> = (props) => (
  <BlurView intensity={100} tint="light" style={styles.blurView}>
    <BottomTabBar {...props} />
  </BlurView>
)
