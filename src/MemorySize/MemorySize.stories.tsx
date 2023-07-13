import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'

import { MemorySize } from './MemorySize'

storiesOf('common/MemorySize', module)
  .addDecorator(host({}))
  .add('si', () => <MemorySize value={5000} />)
  .add('si=false', () => <MemorySize value={5000} si={false} />)
