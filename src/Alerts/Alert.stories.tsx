import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { MessageType } from '../types'
import { Alert } from './Alert'

const types: ReadonlyArray<MessageType> = ['danger', 'info', 'success', 'warning']

storiesOf('common/Alert', module)
  .addDecorator(host({}))
  .add('all toasts (m)', () => (
    <>
      {types.map((x) => (
        <Alert type={x} key={x}>
          A simple {x} alert - check it out!
        </Alert>
      ))}
    </>
  ))
