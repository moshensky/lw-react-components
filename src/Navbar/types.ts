import { MessageDescriptor } from 'react-intl'

export type NavMenuItem = Readonly<{
  path: string
  label: MessageDescriptor
  icon: string
}>
