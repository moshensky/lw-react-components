import React from 'react'
import { FormattedDate, FormattedMessage } from 'react-intl'
import { m } from './messages'

type Props = Readonly<{
  fromDate: Date
  toDate: Date
  count: number
  className?: string
}>

export function CountForPeriod({ fromDate, toDate, count, className }: Props): JSX.Element {
  return (
    <div className={className}>
      <FormattedMessage {...m.totalCount} /> {count}, &nbsp;
      <FormattedMessage {...m.forPeriod} />
      &nbsp;
      <FormattedDate value={fromDate} /> - <FormattedDate value={toDate} />
    </div>
  )
}
