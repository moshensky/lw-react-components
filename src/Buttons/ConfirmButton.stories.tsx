import { mdiTrashCanOutline } from '@mdi/js'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { ConfirmButton } from './ConfirmButton'

storiesOf('common/Buttons/ConfirmButton', module)
  .addDecorator(host({}))
  .add('default (m)', () => (
    <ConfirmButton
      domId="test-id"
      outline
      variant="danger"
      icon={mdiTrashCanOutline}
      title={'delete'}
      onClick={action('on delete')}
    />
  ))
