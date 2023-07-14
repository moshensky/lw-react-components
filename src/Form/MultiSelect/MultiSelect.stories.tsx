import { storiesOf } from '@storybook/react'
import React from 'react'
import { MultiSelect } from './MultiSelect'
import { options, basic } from '../../MultiSelect/MultiSelect.stories'
import { StorybookForm } from '../StorybookForm.test.support'

storiesOf('common/Form/MultiSelect', module)
  .add('default', () => (
    <StorybookForm>
      <MultiSelect name="some" label="Select values" options={options} />
    </StorybookForm>
  ))
  .add('required', () => (
    <StorybookForm>
      <MultiSelect name="some" label="Select values" required options={options} />
    </StorybookForm>
  ))
  .add('disabled', () => (
    <StorybookForm>
      <MultiSelect name="some" label="Select values" disabled options={options} />
    </StorybookForm>
  ))
  .add('selected items', () => (
    <StorybookForm initialValues={{ tags: basic }}>
      <MultiSelect name="tags" label="Select values" options={options} />
    </StorybookForm>
  ))
  .add('error', () => (
    <StorybookForm error>
      <MultiSelect name="some" label="Select values" required options={options} />
    </StorybookForm>
  ))
