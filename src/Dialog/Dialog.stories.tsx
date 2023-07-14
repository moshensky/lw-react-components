import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Dialog } from './Dialog'

const baseProps = {
  size: 'md' as const,
  header: 'header',
  content: 'content',
  footer: 'action',
  onClose: action('onClose'),
}

storiesOf('common/Dialog/Dialog', module)
  .add('w1200h100p', () => <Dialog {...baseProps} size="w1200h100p" />)
  .add('w100ph100p', () => <Dialog {...baseProps} size="w100ph100p" />)
