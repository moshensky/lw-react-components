import { storiesOf } from '@storybook/react'
import React from 'react'
import { StorybookForm } from '../StorybookForm.test.support'
import { RadioGroup, RadioGroupOptions } from './RadioGroup'

const options: RadioGroupOptions = [
  { label: 'first', value: 'first value' },
  { label: 'second', value: 'second value' },
  { label: 'third', value: 'third value' },
]

storiesOf('common/Form/RadioGroup', module)
  .add('default', () => (
    <StorybookForm>
      <RadioGroup name="some" label="Active" options={options} />
    </StorybookForm>
  ))
  .add('selected', () => (
    <StorybookForm initialValues={{ some: 'second value' }}>
      <RadioGroup name="some" label="Active" options={options} />
    </StorybookForm>
  ))
  .add('required', () => (
    <StorybookForm>
      <RadioGroup name="some" label="Active" options={options} required />
    </StorybookForm>
  ))
  .add('disabled', () => (
    <StorybookForm>
      <RadioGroup name="some" label="Active" disabled options={options} />
    </StorybookForm>
  ))
  .add('single option disabled', () => (
    <StorybookForm>
      <RadioGroup
        name="some"
        label="Active"
        options={[
          options[0],
          {
            ...options[1],
            disabled: true,
          },
          options[2],
        ]}
      />
    </StorybookForm>
  ))
  .add('error', () => (
    <StorybookForm error>
      <RadioGroup name="some" label="Active" required options={options} />
    </StorybookForm>
  ))
