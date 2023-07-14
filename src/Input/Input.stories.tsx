import { storiesOf } from '@storybook/react'
import React from 'react'
import { Input } from './Input'

storiesOf('common/Input', module)
  .add('default', () => <Input />)
  .add('disabled', () => <Input disabled value="disabled input" />)
  .add('invalid', () => <Input invalid />)
