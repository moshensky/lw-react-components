import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { Circle } from './Circle'

storiesOf('common/Circle', module)
  .addDecorator(host({}))
  .add('default', () => (
    <div className="bg-black">
      <Circle>simple </Circle>
    </div>
  ))
