import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator } from 'utils/storybook'
import { CountForPeriod } from './CountForPeriod'

const fromDate = new Date('2019-01-01')
const toDate = new Date('2019-04-01')

storiesOf('common/CountForPeriod', module)
  .addDecorator(setIntlDecorator('bg'))
  .addDecorator(host({}))
  .add('Default', () => <CountForPeriod fromDate={fromDate} toDate={toDate} count={10} />)
