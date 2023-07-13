import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { TextArea } from './TextArea'

storiesOf('common/TextArea', module)
  .addDecorator(host({}))
  .add('default', () => <TextArea />)
  .add('disabled', () => <TextArea disabled value="disabled text area" />)
  .add('invalid', () => <TextArea invalid />)
