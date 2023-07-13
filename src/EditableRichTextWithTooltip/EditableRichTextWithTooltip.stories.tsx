import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { EditableRichTextWithTooltip, Props } from './EditableRichTextWithTooltip'
import { action } from '@storybook/addon-actions'
import { mkRichText } from '@limsnow/core-domain'

const baseProps: Props = {
  data: mkRichText('text'),
  tooltip: mkRichText('tooltip text'),
  onTextUpdate: action('onTextUpdate'),
}

storiesOf('common/EditableRichTextWithTooltip', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({}))
  .add('base', () => <EditableRichTextWithTooltip {...baseProps} disabled={false} />)
  .add('disabled rich text', () => <EditableRichTextWithTooltip {...baseProps} disableRichText />)
  .add('disabled', () => <EditableRichTextWithTooltip {...baseProps} disabled />)
