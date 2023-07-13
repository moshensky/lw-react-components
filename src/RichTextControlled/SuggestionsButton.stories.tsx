import { richTextSuggestions } from '@limsnow/core-domain/types/rich-text/rich-text.support.test'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { SuggestionsButton } from './SuggestionsButton'

storiesOf('common/RichTextControlled/SuggestionsButton', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(
    host({
      width: '100%',
    }),
  )
  .add('basic', () => (
    <SuggestionsButton onSelect={action('onSelect')} suggestions={richTextSuggestions} />
  ))
  .add('shown', () => (
    <SuggestionsButton
      onSelect={action('onSelect')}
      suggestions={richTextSuggestions}
      defaultShow
    />
  ))
