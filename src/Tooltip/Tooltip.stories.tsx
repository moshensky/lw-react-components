import { mdiTrashCanOutline } from '@mdi/js'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Button } from 'components'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { Tooltip } from './Tooltip'

const button = (
  <Button
    outline
    variant="danger"
    icon={mdiTrashCanOutline}
    title={'delete'}
    onClick={action('onClick')}
  />
)

const body = (
  <div style={{ width: 150 }}>
    <Button variant="primary" onClick={action('onClick')} label="cancel" />
    <Button
      className="ml-1"
      variant="secondary"
      outline
      onClick={action('confirm')}
      label="confirm"
    />
  </div>
)

storiesOf('common/Tooltip', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({}))
  .add('default', () => <Tooltip tooltip="this is tooltip">{button}</Tooltip>)
  .add('complex', () => <Tooltip tooltip={body}>{button}</Tooltip>)
