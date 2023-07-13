import React from 'react'
import { storiesOf } from '@storybook/react'
import { CalculateRelativeTime } from './CalculateRelativeTime'
import host from 'storybook-host'
import { setIntlDecorator } from 'utils/storybook'

const render = (date: Date) => (
  <div>
    <p>Created: {date.toLocaleString()}</p>
    <p>
      Relative Time: <CalculateRelativeTime date={date} />
    </p>
  </div>
)

storiesOf('common/CalculateRelativeTime', module)
  .addDecorator(host({}))
  .addDecorator(setIntlDecorator('en'))
  .add('within 60 seconds', () => {
    const createdAt = new Date()
    createdAt.setSeconds(createdAt.getSeconds() - 30)
    return render(createdAt)
  })
  .add('between 1 and 60 minutes', () => {
    const createdAt = new Date()
    createdAt.setMinutes(createdAt.getMinutes() - 17)
    return render(createdAt)
  })
  .add('longer than 60 minutes', () => {
    const createdAt = new Date()
    createdAt.setHours(createdAt.getHours() - 2)
    return render(createdAt)
  })
  .add('23 hours ago', () => {
    const createdAt = new Date()
    createdAt.setHours(createdAt.getHours() - 23)
    return render(createdAt)
  })
