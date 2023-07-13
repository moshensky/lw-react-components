import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { Progress } from './Progress'

storiesOf('common/Progress', module)
  .addDecorator(host({ width: 400 }))
  .add('base', () => <Progress animated color="info" value={100} className="mb-1" />)
