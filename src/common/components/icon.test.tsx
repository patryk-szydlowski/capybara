import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'

import { createIcon, IconFamily } from './icon'

describe('Icon', () => {
  test('should render created icon', () => {
    // given
    const iconFamily: IconFamily = ({ name }) => <Text>{name}</Text>
    const iconName = 'icon'

    const Icon = createIcon(iconFamily, iconName)

    // when
    const { getByText } = render(<Icon color="white" size={20} />)

    // then
    expect(getByText(iconName)).toBeDefined()
  })
})
