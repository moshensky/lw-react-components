import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { Pill } from './Pill'

storiesOf('common/Pill', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({}))
  .add('base', () => (
    <div>
      <div>
        <Pill value={1} type="primary" />
        <Pill value={2} type="secondary" />
        <Pill value={3} type="success" />
        <Pill value={4} type="danger" />
        <Pill value={5} type="warning" />
        <Pill value={6} type="info" />
        <Pill value={7} type="light" />
        <Pill value={8} type="dark" />
      </div>
      <div>
        <Pill style="outline" value={1} type="primary" />
        <Pill style="outline" value={2} type="secondary" />
        <Pill style="outline" value={3} type="success" />
        <Pill style="outline" value={4} type="danger" />
        <Pill style="outline" value={5} type="warning" />
        <Pill style="outline" value={6} type="info" />
        <Pill style="outline" value={7} type="light" />
        <Pill style="outline" value={8} type="dark" />
      </div>
    </div>
  ))
  .add('1234', () => <Pill value={1234} type="primary" />)
  .add('scale with parent font size', () => (
    <div style={{ fontSize: 30 }}>
      <Pill value={1234} type="primary" />
      <Pill style="outline" value={1234} type="primary" />
    </div>
  ))
