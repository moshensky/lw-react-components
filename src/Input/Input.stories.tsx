import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { Input } from './Input'

storiesOf('common/Input', module)
  .addDecorator(host({}))
  .add('default', () => <Input />)
  .add('disabled', () => <Input disabled value="disabled input" />)
  .add('invalid', () => <Input invalid />)
