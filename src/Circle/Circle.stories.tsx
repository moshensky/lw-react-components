import { storiesOf } from '@storybook/react'
import React from 'react'
import { Circle } from './Circle'

storiesOf('common/Circle', module)
  .add('default', () => (
    <div className="bg-black">
      <Circle>simple </Circle>
    </div>
  ))
