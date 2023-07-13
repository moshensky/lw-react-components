import { mkRichText } from '@limsnow/core-domain'
import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { StorybookForm } from '../StorybookForm.test.support'
import { RichTextField } from './RichTextField'

storiesOf('common/Form/RichTextField', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .add('default', () => (
    <StorybookForm>
      <RichTextField name="some_text" />
    </StorybookForm>
  ))
  .add('required', () => (
    <StorybookForm>
      <RichTextField name="some" label="Select values" required />
    </StorybookForm>
  ))
  .add('disabled', () => (
    <StorybookForm>
      <RichTextField name="some" label="Select values" disabled />
    </StorybookForm>
  ))
  .add('initial value', () => (
    <StorybookForm
      initialValues={{
        some: [
          {
            type: 'paragraph',
            children: [{ text: 'initial value' }],
          },
        ],
      }}
    >
      <RichTextField name="some" label="Select values" />
    </StorybookForm>
  ))
  .add('error', () => (
    <StorybookForm error>
      <RichTextField name="some" label="Select values" />
    </StorybookForm>
  ))

storiesOf('common/Form/RichTextField', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({ width: 320 }))
  .add('in a fixed width container', () => (
    <StorybookForm
      initialValues={{
        some: mkRichText(
          'asdf asdfasdff asdfasdff asdfasdff asdfasdff asdfasdff asdfasdff asdfasdff asdfasdff asdf ;lkjasdf. asdf ',
        ),
      }}
    >
      <RichTextField name="some" />
    </StorybookForm>
  ))
