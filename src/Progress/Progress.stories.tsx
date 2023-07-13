import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { Progress } from './Progress'

storiesOf('common/Progress', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({ width: 400 }))
  .add('base', () => <Progress animated color="info" value={100} className="mb-1" />)
