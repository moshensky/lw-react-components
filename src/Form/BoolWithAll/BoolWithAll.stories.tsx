import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { StorybookForm } from '../StorybookForm.test.support'
import { BoolWithAll } from './BoolWithAll'

storiesOf('common/Form/BoolWithAll', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({}))
  .add('default', () => (
    <StorybookForm>
      <BoolWithAll name="some" label="Active" />
    </StorybookForm>
  ))
  .add('required', () => (
    <StorybookForm>
      <BoolWithAll name="some" label="Active" required />
    </StorybookForm>
  ))
  .add('disabled', () => (
    <StorybookForm>
      <BoolWithAll name="some" label="Active" disabled />
    </StorybookForm>
  ))
  .add('all selected', () => (
    <StorybookForm initialValues={{ some: 'all' }}>
      <BoolWithAll name="some" label="Active" />
    </StorybookForm>
  ))
  .add('yes selected', () => (
    <StorybookForm initialValues={{ some: 'yes' }}>
      <BoolWithAll name="some" label="Active" />
    </StorybookForm>
  ))
  .add('no selected', () => (
    <StorybookForm initialValues={{ some: 'no' }}>
      <BoolWithAll name="some" label="Active" />
    </StorybookForm>
  ))
  .add('error', () => (
    <StorybookForm error>
      <BoolWithAll name="some" label="Active" required />
    </StorybookForm>
  ))
