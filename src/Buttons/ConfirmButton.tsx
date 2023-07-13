import { Popover } from 'components'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { mc } from '../../../intl'
import { Button, Props as ButtonProps } from './Button'

type Props = ButtonProps &
  Readonly<{
    domId?: string
    stopPropagation?: boolean
  }>

export function ConfirmButton({ onClick, domId, stopPropagation, ...rest }: Props) {
  return (
    <Popover
      className="inline"
      trigger={(show) => (
        <Button
          {...rest}
          onClick={(x) => {
            if (stopPropagation) {
              x.stopPropagation()
            }
            show()
          }}
        />
      )}
      header={() => <FormattedMessage {...mc.pleaseConfirm} />}
      body={(hide) => (
        <div className="whitespace-nowrap">
          <Button
            variant="primary"
            stopPropagation={stopPropagation}
            onClick={() => hide()}
            label={<FormattedMessage {...mc.cancel} />}
          />
          <Button
            className="ml-1"
            variant="secondary"
            outline
            stopPropagation={stopPropagation}
            onClick={(ev) => {
              onClick && onClick(ev)
              hide()
            }}
            label={<FormattedMessage {...mc.confirm} />}
          />
        </div>
      )}
    />
  )
}
