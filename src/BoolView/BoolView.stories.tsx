import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { BoolView } from './BoolView'

storiesOf('common/BoolView', module)
  .addDecorator(host({}))
  .add('checked', () => <BoolView value />)
  .add('unchecked', () => <BoolView value={false} />)
