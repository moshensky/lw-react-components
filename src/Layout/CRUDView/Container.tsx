import React from 'react'
import { Button, Container as Container0, MainContent, MainHead } from 'components'
import { FormattedMessage, MessageDescriptor } from 'react-intl'

export type Props = Readonly<{
  titleLabel: MessageDescriptor
  btnLabel: MessageDescriptor
  btnIcon?: string
  btnSuccess?: boolean
  inProgress?: boolean
  children: React.ReactNode
  onClick: () => void
}>

export function Container({
  btnSuccess,
  titleLabel,
  btnLabel,
  btnIcon,
  inProgress,
  children,
  onClick,
}: Props) {
  return (
    <Container0>
      <MainHead title={<FormattedMessage {...titleLabel} />}>
        <Button
          onClick={onClick}
          variant={btnSuccess ? 'success' : 'primary'}
          label={<FormattedMessage {...btnLabel} />}
          icon={btnIcon}
        />
      </MainHead>
      <MainContent loading={inProgress}>{children}</MainContent>
    </Container0>
  )
}
