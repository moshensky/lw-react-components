import { richTextData } from '@limsnow/core-domain/types/rich-text/rich-text.support.test'
import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { RichTextView } from './RichTextView'

storiesOf('common/RichTextView', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(
    host({
      width: '100%',
    }),
  )
  .add('RichTextVIew', () => <RichTextView data={richTextData} />)
