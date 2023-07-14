import { storiesOf } from '@storybook/react'
import React from 'react'
import { TextInputWithButtons } from './TextInputWithButtons'
import { action } from '@storybook/addon-actions'

storiesOf('common/TextInputWithButtons', module)
  .add('base', () => <TextInputWithButtons text="some text" onSave={action('onSave')} />)
