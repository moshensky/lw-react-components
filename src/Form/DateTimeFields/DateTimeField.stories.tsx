import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { StorybookForm } from '../StorybookForm.test.support'
import { DateTimeField } from './DateTimeField'

storiesOf('common/Form/DateTimeField', module)
  .addDecorator(host({ width: 400 }))
  .add('default', () => (
    <StorybookForm>
      <DateTimeField name="some" label="Some label" timeCaption="Time" />
    </StorybookForm>
  ))
  .add('placeholder', () => (
    <StorybookForm>
      <DateTimeField name="some" label="Some label" timeCaption="Time" placeholder="Select date" />
    </StorybookForm>
  ))
  .add('required', () => (
    <StorybookForm>
      <DateTimeField name="some" label="Some label" timeCaption="Time" required />
    </StorybookForm>
  ))
  .add('disabled', () => (
    <StorybookForm>
      <DateTimeField name="some" label="Some label" timeCaption="Time" disabled />
    </StorybookForm>
  ))
  .add('preselected value ISO8061', () => (
    <StorybookForm initialValues={{ some: '2001-11-29T17:33Z' }}>
      <DateTimeField name="some" label="Some label" timeCaption="Time" />
    </StorybookForm>
  ))
  .add('error', () => (
    <StorybookForm error>
      <DateTimeField name="some" label="Some label" timeCaption="Time" />
    </StorybookForm>
  ))
