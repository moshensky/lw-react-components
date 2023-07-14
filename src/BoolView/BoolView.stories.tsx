import { storiesOf } from '@storybook/react'
import React from 'react'
import { BoolView } from './BoolView'

storiesOf('common/BoolView', module)
  .add('checked', () => <BoolView value />)
  .add('unchecked', () => <BoolView value={false} />)
