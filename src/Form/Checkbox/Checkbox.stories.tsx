import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { StorybookForm } from '../StorybookForm.test.support'
import { Checkbox } from './Checkbox'

storiesOf('common/Form/Checkbox', module)
  .addDecorator(host({}))
  .add('unchecked', () => (
    <StorybookForm>
      <Checkbox name="some" label="Unchecked" />
    </StorybookForm>
  ))
  .add('checked', () => (
    <StorybookForm initialValues={{ some: true }}>
      <Checkbox name="some" label="Checked" />
    </StorybookForm>
  ))
