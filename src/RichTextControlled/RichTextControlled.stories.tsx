import { RichText, RichText as RichTextT } from '../types'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import host from 'storybook-host'
import { DelayedData } from '../utils'
import { RichTextControlled } from './RichTextControlled'
import { Symbols } from './Symbols'
import { richTextData, richTextSuggestions } from 'types/rich-text/rich-text.support.test'

const richTextSample1: RichTextT = [
  {
    type: 'p',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const WithState = ({
  defaultValue,
  render,
}: {
  defaultValue?: RichText
  render: (setState: (x: RichText) => void, state?: RichText) => JSX.Element
}) => {
  const [value, setValue] = useState(defaultValue)

  return render(setValue, value)
}

storiesOf('common/RichTextControlled', module)
  .addDecorator(
    host({
      width: '100%',
    }),
  )
  .add('basic', () => (
    <WithState
      render={(set, val) => (
        <RichTextControlled
          value={val}
          onChange={(x) => {
            action('onChange')(x)
            set(x)
          }}
        />
      )}
    />
  ))
  .add('disable rich text', () => (
    <WithState
      render={(set, val) => (
        <RichTextControlled
          disableRichText
          value={val}
          onChange={(x) => {
            action('onChange')(x)
            set(x)
          }}
        />
      )}
    />
  ))
  .add('default value', () => (
    <WithState
      defaultValue={richTextSample1}
      render={(set, val) => (
        <RichTextControlled
          value={val}
          onChange={(x) => {
            action('onChange')(x)
            set(x)
          }}
        />
      )}
    />
  ))
  .add('with initial empty state and then updated with data', () => (
    <DelayedData
      data={richTextSample1}
      timeout={1000}
      render={(items) => <RichTextControlled value={items} onChange={action('onChange')} />}
    />
  ))
  .add('suggestions: empty', () => (
    <WithState
      render={(set, val) => (
        <RichTextControlled
          suggestions={richTextSuggestions}
          value={val}
          onChange={(x) => {
            action('onChange')(x)
            set(x)
          }}
        />
      )}
    />
  ))
  .add('suggestions: with value', () => (
    <WithState
      defaultValue={richTextSample1}
      render={(set, val) => (
        <RichTextControlled
          suggestions={richTextSuggestions}
          value={val}
          onChange={(x) => {
            action('onChange')(x)
            set(x)
          }}
        />
      )}
    />
  ))
  .add('suggestions: rich text disabled', () => (
    <WithState
      render={(set, val) => (
        <RichTextControlled
          disableRichText
          suggestions={richTextSuggestions}
          value={val}
          onChange={(x) => {
            action('onChange')(x)
            set(x)
          }}
        />
      )}
    />
  ))
  .add('single line', () => (
    <WithState
      defaultValue={richTextSample1}
      render={(set, val) => (
        <RichTextControlled
          singleLine
          value={val}
          onChange={(x) => {
            action('onChange')(x)
            set(x)
          }}
        />
      )}
    />
  ))
  .add('disabled', () => (
    <WithState
      defaultValue={richTextSample1}
      render={(set, val) => (
        <RichTextControlled
          disabled
          value={val}
          onChange={(x) => {
            action('onChange')(x)
            set(x)
          }}
        />
      )}
    />
  ))
  .add('various styles of rich text', () => (
    <WithState
      defaultValue={richTextData}
      render={(set, val) => (
        <RichTextControlled
          value={val}
          onChange={(x) => {
            action('onChange')(x)
            set(x)
          }}
        />
      )}
    />
  ))
  .add('symbols', () => <Symbols onSymbolSelect={action('onSymbolClick')} />)
  .add('symbols disabled rich text', () => (
    <Symbols onSymbolSelect={action('onSymbolClick')} disableRichText />
  ))
