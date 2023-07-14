import { storiesOf } from '@storybook/react'
import React from 'react'
import { EditableRichTextWithTooltip, Props } from './EditableRichTextWithTooltip'
import { action } from '@storybook/addon-actions'
import { mkRichText } from '../types'

const baseProps: Props = {
  data: mkRichText('text'),
  tooltip: mkRichText('tooltip text'),
  onTextUpdate: action('onTextUpdate'),
}

storiesOf('common/EditableRichTextWithTooltip', module)
  .add('base', () => <EditableRichTextWithTooltip {...baseProps} disabled={false} />)
  .add('disabled rich text', () => <EditableRichTextWithTooltip {...baseProps} disableRichText />)
  .add('disabled', () => <EditableRichTextWithTooltip {...baseProps} disabled />)
