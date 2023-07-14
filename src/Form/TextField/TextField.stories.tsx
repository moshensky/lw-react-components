import { storiesOf } from '@storybook/react'
import React from 'react'
import { StorybookForm } from '../StorybookForm.test.support'
import { TextField } from './TextField'

storiesOf('common/Form/TextField', module)
  // .addDecorator(
  //   host({
  //     width: 300,
  //     height: 300,
  //   }),
  // )
  .add('text field', () => (
    <StorybookForm>
      <TextField name="some_text" label="text input field" />
    </StorybookForm>
  ))
  .add('text field full width', () => (
    <StorybookForm>
      <TextField name="some_text" inputClassName="w-full" />
    </StorybookForm>
  ))
  .add('text area 3 rows', () => (
    <StorybookForm>
      <TextField name="some_text" multiline variant="multiline" rows={3} label="text area field" />
    </StorybookForm>
  ))
  .add('text area full width', () => (
    <StorybookForm>
      <TextField name="some_text" multiline variant="multiline" inputClassName="w-full" />
    </StorybookForm>
  ))
