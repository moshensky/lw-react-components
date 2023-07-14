import { storiesOf } from '@storybook/react'
import React from 'react'
import { StorybookForm } from '../StorybookForm.test.support'
import { TagsSelect } from './TagsSelect'

const options = ['first', 'second', 'third']

storiesOf('common/Form/TagsSelect', module)
  .add('default', () => (
    <StorybookForm>
      <TagsSelect name="some" label="Select values" options={options} />
    </StorybookForm>
  ))
  .add('required', () => (
    <StorybookForm>
      <TagsSelect name="some" label="Select values" required options={options} />
    </StorybookForm>
  ))
  .add('disabled', () => (
    <StorybookForm>
      <TagsSelect name="some" label="Select values" disabled options={options} />
    </StorybookForm>
  ))
  .add('selected items', () => (
    <StorybookForm initialValues={{ tags: ['first'] }}>
      <TagsSelect name="tags" label="Select values" options={options} />
    </StorybookForm>
  ))
  .add('error', () => (
    <StorybookForm error>
      <TagsSelect name="some" label="Select values" required options={options} />
    </StorybookForm>
  ))
