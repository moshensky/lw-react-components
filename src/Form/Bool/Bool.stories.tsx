import { storiesOf } from '@storybook/react'
import React from 'react'
import { StorybookForm } from '../StorybookForm.test.support'
import { Bool } from './Bool'

storiesOf('common/Form/Bool', module)
  .add('default', () => (
    <StorybookForm>
      <Bool name="some" label="Active" />
    </StorybookForm>
  ))
  .add('required', () => (
    <StorybookForm>
      <Bool name="some" label="Active" required />
    </StorybookForm>
  ))
  .add('disabled', () => (
    <StorybookForm>
      <Bool name="some" label="Active" disabled />
    </StorybookForm>
  ))
  .add('yes selected', () => (
    <StorybookForm initialValues={{ some: true }}>
      <Bool name="some" label="Active" />
    </StorybookForm>
  ))
  .add('no selected', () => (
    <StorybookForm initialValues={{ some: false }}>
      <Bool name="some" label="Active" />
    </StorybookForm>
  ))
  .add('error', () => (
    <StorybookForm error>
      <Bool name="some" label="Active" required />
    </StorybookForm>
  ))
