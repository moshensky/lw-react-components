import { mkRichText } from '../../types'
import { storiesOf } from '@storybook/react'
import { RichTextView } from '../../RichTextView'
import React from 'react'
import host from 'storybook-host'
import { StorybookForm } from '../StorybookForm.test.support'
import { SelectField, Props } from './SelectField'

const props: Props = {
  options: [
    { value: 'first', label: 'first value' },
    { value: 'second', label: 'second value' },
    { value: 'third', label: <RichTextView data={mkRichText('third')} /> },
  ],
  name: 'some',
  label: 'select label',
}

storiesOf('common/Form/SelectField', module)
  .addDecorator(host({ width: 150 }))
  .add('default', () => (
    <StorybookForm>
      <SelectField {...props} />
    </StorybookForm>
  ))
  .add('required', () => (
    <StorybookForm>
      <SelectField {...props} required />
    </StorybookForm>
  ))
  .add('selected', () => (
    <StorybookForm initialValues={{ some: 'second' }}>
      <SelectField {...props} />
    </StorybookForm>
  ))
  .add('rich text selected', () => (
    <StorybookForm initialValues={{ some: 'third' }}>
      <SelectField {...props} />
    </StorybookForm>
  ))
  .add('disabled', () => (
    <StorybookForm>
      <SelectField {...props} disabled />
    </StorybookForm>
  ))
  .add('selected with selected', () => (
    <StorybookForm initialValues={{ some: 'second' }}>
      <SelectField {...props} disabled />
    </StorybookForm>
  ))
  .add('error', () => (
    <StorybookForm error>
      <SelectField {...props} required />
    </StorybookForm>
  ))
