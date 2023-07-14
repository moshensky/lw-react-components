import { storiesOf } from '@storybook/react'
import React from 'react'
import { MessageType } from '../types'
import { Alert } from './Alert'

const types: ReadonlyArray<MessageType> = ['danger', 'info', 'success', 'warning']

storiesOf('common/Alert', module)
  .add('all toasts (m)', () => (
    <>
      {types.map((x) => (
        <Alert type={x} key={x}>
          A simple {x} alert - check it out!
        </Alert>
      ))}
    </>
  ))
