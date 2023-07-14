import { storiesOf } from '@storybook/react'
import React from 'react'
import { TextArea } from './TextArea'

storiesOf('common/TextArea', module)
  .add('default', () => <TextArea />)
  .add('disabled', () => <TextArea disabled value="disabled text area" />)
  .add('invalid', () => <TextArea invalid />)
