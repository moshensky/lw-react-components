import React from 'react'
import { FormattedRelativeTime, FormattedDate, FormattedTime } from 'react-intl'

type Props = {
  date: Date
}

export function CalculateRelativeTime({ date }: Props): JSX.Element {
  const currentTime = new Date()
  const timeDifferenceInSeconds = Math.floor((currentTime.getTime() - date.getTime()) / 1000)

  if (timeDifferenceInSeconds < 60) {
    return <FormattedRelativeTime value={-timeDifferenceInSeconds} unit="second" numeric="auto" />
  } else if (timeDifferenceInSeconds < 60 * 60) {
    return (
      <FormattedRelativeTime
        value={-Math.floor(timeDifferenceInSeconds / 60)}
        unit="minute"
        numeric="auto"
      />
    )
  } else {
    return (
      <>
        <FormattedDate value={date} />, <FormattedTime value={date} />
      </>
    )
  }
}
