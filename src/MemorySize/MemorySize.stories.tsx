import { storiesOf } from '@storybook/react'
import React from 'react'

import { MemorySize } from './MemorySize'

storiesOf('common/MemorySize', module)
  .add('si', () => <MemorySize value={5000} />)
  .add('si=false', () => <MemorySize value={5000} si={false} />)
