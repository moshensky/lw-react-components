import React from 'react'
import { FormattedMessage } from 'react-intl'
import { m } from './tableMessages'

type Props = Readonly<{
  className?: string
  children: React.ReactNode
}>

export function TableFilter({ className, children }: Props) {
  return (
    <div className={className}>
      <h3 className="text-lg font-medium leading-6 text-gray-900 mr-11 pb-1">
        <FormattedMessage {...m.filter} />
      </h3>
      <div className="w-full">{children}</div>
    </div>
  )
}
