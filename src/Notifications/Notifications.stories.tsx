import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Notifications } from './Notifications'
import { UINotification } from './UINotification'
import host from 'storybook-host'
import { setIntlDecorator } from 'utils/storybook'

export const notifications: ReadonlyArray<UINotification> = [
  {
    id: '1',
    title: 'Info Notification with long title that will wrap',
    description: 'This is an info notification',
    read: false,
    createdAt: new Date('2023-05-20T18:21:21.274Z'),
    source: 'system',
    level: 'info',
  },
  {
    id: '2',
    title: 'Warning Notification',
    description: 'This is a warning notification with long description that will wrap',
    read: false,
    createdAt: new Date('2023-05-19T18:22:22.274Z'),
    source: 'system',
    level: 'warning',
  },
  {
    id: '3',
    title: 'Error Notification',
    description: 'This is an error notification',
    read: true,
    createdAt: new Date('2023-05-20T18:23:23.274Z'),
    source: 'system',
    level: 'danger',
  },
  {
    id: '4',
    title: 'Success Notification',
    description: 'This is a success notification',
    read: true,
    createdAt: new Date('2023-05-20T18:20:25.274Z'),
    source: 'system',
    level: 'success',
  },
  {
    id: '5',
    title: 'Warning Notification 2',
    description: 'This is a warning notification',
    read: false,
    createdAt: new Date('2023-05-19T19:22:22.274Z'),
    source: 'system',
    level: 'warning',
  },
] as const

storiesOf('common/Notifications', module)
  .addDecorator(host({}))
  .addDecorator(setIntlDecorator('en'))
  .add('With Unread and Read Notifications', () => (
    <Notifications notifications={notifications} onDismiss={action('onDismiss')} />
  ))
  .add('With Unread Notifications', () => (
    <Notifications notifications={notifications.slice(0, 2)} onDismiss={action('onDismiss')} />
  ))
  .add('With Read Notifications', () => (
    <Notifications notifications={notifications.slice(2)} onDismiss={action('onDismiss')} />
  ))
  .add('With Empty Notifications', () => (
    <Notifications notifications={[]} onDismiss={action('onDismiss')} />
  ))
