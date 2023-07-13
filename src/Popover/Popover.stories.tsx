import { mdiTrashCanOutline } from '@mdi/js'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Button } from '../Buttons'
import React from 'react'
import host from 'storybook-host'
import { Popover } from './Popover'

const trigger = (show: () => void) => (
  <Button outline variant="danger" icon={mdiTrashCanOutline} title={'delete'} onClick={show} />
)
const body = (hide: () => void) => (
  <div style={{ width: 150 }}>
    <Button variant="primary" onClick={hide} label="cancel" />
    <Button
      className="ml-1"
      variant="secondary"
      outline
      onClick={action('confirm')}
      label="confirm"
    />
  </div>
)

storiesOf('common/Popover', module)
  .addDecorator(host({}))
  .add('default (m)', () => <Popover trigger={trigger} header={() => 'title'} body={body} />)
  .add('x3 (m)', () => (
    <>
      <div style={{ margin: 20 }}>
        <Popover trigger={trigger} body={body} />
      </div>
      <div style={{ margin: 20 }}>
        <Popover trigger={trigger} header={() => 'second'} body={body} />
      </div>
      <div style={{ margin: 20 }}>
        <Popover trigger={trigger} body={() => <span>third thingy</span>} />
      </div>
    </>
  ))
  .add('content only (m)', () => (
    <Popover
      trigger={(show) => <Button variant="primary" label="show" onClick={show} />}
      body={(hide) => <Button variant="primary" onClick={hide} label="hide" />}
    />
  ))
  .add('opened', () => <Popover defaultShow trigger={trigger} header={() => 'title'} body={body} />)
  .add('wide body', () => (
    <Popover
      defaultShow
      trigger={trigger}
      header={() => 'title'}
      body={() => (
        <>
          <div style={{ width: 300, backgroundColor: 'red' }}>
            300 px line 300 px line 300 px line 300 px line 300 px line 300 px line 300 px line 300
            px line
          </div>
          asdf asdf
          <br />
        </>
      )}
    />
  ))
