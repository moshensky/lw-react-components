import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Scrim } from './Scrim'
import host from 'storybook-host'

storiesOf('common/Scrim', module)
  .addDecorator(
    host({
      width: '100%',
      height: '100%',
    }),
  )
  .add('base', () => <Scrim open onClose={action('onClick')} />)
