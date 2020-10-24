import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { SCREEN_PADDING } from 'common/const/dimensions'

import { MainLayout } from './main.layout'

const style = StyleSheet.create({
  headerContainer: {
    marginTop: 42,
    marginBottom: 24,
    paddingHorizontal: SCREEN_PADDING,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700',
  },
})

type Props = {
  header: string
}

export const ScreenLayout: React.FC<Props> = ({ header, children }) => (
  <MainLayout>
    <View style={style.headerContainer}>
      <Text style={style.headerText}>{header}</Text>
    </View>
    <View>{children}</View>
  </MainLayout>
)
