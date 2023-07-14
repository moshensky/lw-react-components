import { storiesOf } from '@storybook/react'
import React from 'react'
import { Tabs } from './Tabs'

const tabs: Tabs = [
  {
    header: 'first',
    content: 'content first',
  },
  {
    header: 'second',
    content: 'content second',
  },
  {
    header: 'third',
    disabled: true,
    content: 'content third',
  },
]

storiesOf('common/Tabs', module)
  .add('default', () => <Tabs tabs={tabs} />)
  .add('common content', () => <Tabs tabs={tabs} commonContent={'something common'} />)
  .add('default tab', () => <Tabs tabs={tabs} defaultSelectedTab={1} />)
  .add('default tab should fail and be 0', () => <Tabs tabs={tabs} defaultSelectedTab={100} />)
