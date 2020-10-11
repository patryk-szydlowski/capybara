import React from 'react'
import { render } from '@testing-library/react-native'

import { AppRoot } from './app.root'

describe('App Root', () => {
  test('should display message "Hello Capybara"', () => {
    const { getByText } = render(<AppRoot />)

    expect(getByText('Hello Capybara')).toBeDefined()
  })
})
