import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { SuggestionsButton } from './SuggestionsButton'
import { richTextSuggestions } from 'types/rich-text/rich-text.support.test'

storiesOf('common/RichTextControlled/SuggestionsButton', module)
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
