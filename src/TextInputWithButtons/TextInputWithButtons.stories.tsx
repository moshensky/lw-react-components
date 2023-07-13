import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { TextInputWithButtons } from './TextInputWithButtons'
import { action } from '@storybook/addon-actions'

storiesOf('common/TextInputWithButtons', module)
  .addDecorator(host({}))
  .add('base', () => <TextInputWithButtons text="some text" onSave={action('onSave')} />)
