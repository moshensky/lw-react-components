import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { UINotification } from './UINotification'
import host from 'storybook-host'

const notifications: ReadonlyArray<UINotification> = [
  {
    id: '1',
    title: 'Info Notification with long title that will wrap',
    description: 'This is an info notification',
    read: false,
    createdAt: new Date('2023-05-20T18:20:21.274Z'),
    source: 'system',
    level: 'info',
  },
  {
    id: '2',
    title: 'Warning Notification',
    description: 'This is a warning notification with long description that will wrap',
    read: false,
    createdAt: new Date('2023-05-19T18:20:22.274Z'),
    source: 'system',
    level: 'warning',
  },
  {
    id: '3',
    title: 'Error Notification',
    description: 'This is an error notification',
    read: true,
    createdAt: new Date('2023-05-20T18:20:23.274Z'),
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
] as const

storiesOf('common/Notification', module)
  .addDecorator(host({}))
  .add('Info Notification (Unread)', () => (
    <UINotification notification={notifications[0]} onDismiss={action('onDismiss')} />
  ))
  .add('Info Notification (Read)', () => (
    <UINotification
      notification={{ ...notifications[0], read: true }}
      onDismiss={action('onDismiss')}
    />
  ))
  .add('Warning Notification (Unread)', () => (
    <UINotification notification={notifications[1]} onDismiss={action('onDismiss')} />
  ))
  .add('Danger Notification (Read)', () => (
    <UINotification notification={notifications[2]} onDismiss={action('onDismiss')} />
  ))
  .add('Success Notification (Read)', () => (
    <div style={{ width: 400 }}>
      <UINotification notification={notifications[3]} onDismiss={action('onDismiss')} />
    </div>
  ))
