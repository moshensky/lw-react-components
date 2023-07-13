import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { themeDecorator } from 'utils/storybook'
import { RequiredSymbol } from './RequiredSymbol'

storiesOf('common/RequiredSymbol', module)
  .addDecorator(themeDecorator)
  .addDecorator(host({}))
  .add('symbol', () => <RequiredSymbol />)
  .add('symbol with text (m)', () => (
    <>
      text
      <RequiredSymbol />
    </>
  ))
