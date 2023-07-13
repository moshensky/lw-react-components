import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { RichTextView } from './RichTextView'
import { richTextData } from 'types/rich-text/rich-text.support.test'

storiesOf('common/RichTextView', module)
  .addDecorator(
    host({
      width: '100%',
    }),
  )
  .add('RichTextVIew', () => <RichTextView data={richTextData} />)
