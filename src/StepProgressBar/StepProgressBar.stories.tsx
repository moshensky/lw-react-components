import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { StepProgressBar, StepProgressBarItem } from './StepProgressBar'

export const steps: ReadonlyArray<StepProgressBarItem> = [
  {
    completed: true,
    title: 'first step',
  },
  {
    completed: true,
    selected: true,
    title: 'second step ',
  },
  {
    // selected: true,
    completed: true,
    title: 'third step',
  },
  {
    title: 'fourth step',
  },
]

storiesOf('common/StepProgressBar', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({ width: 600 }))
  .add('default', () => <StepProgressBar steps={steps} />)
