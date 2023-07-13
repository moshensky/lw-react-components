import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { TextInputWithButtons } from './TextInputWithButtons'
import { action } from '@storybook/addon-actions'

storiesOf('common/TextInputWithButtons', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({}))
  .add('base', () => <TextInputWithButtons text="some text" onSave={action('onSave')} />)
