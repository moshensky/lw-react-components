import { storiesOf } from '@storybook/react'
import React from 'react'
import { RequiredSymbol } from './RequiredSymbol'

storiesOf('common/RequiredSymbol', module)
  .add('symbol', () => <RequiredSymbol />)
  .add('symbol with text (m)', () => (
    <>
      text
      <RequiredSymbol />
    </>
  ))
