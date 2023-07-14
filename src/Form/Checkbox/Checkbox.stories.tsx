import { storiesOf } from '@storybook/react'
import React from 'react'
import { StorybookForm } from '../StorybookForm.test.support'
import { Checkbox } from './Checkbox'

storiesOf('common/Form/Checkbox', module)
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
