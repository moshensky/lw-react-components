import { storiesOf } from '@storybook/react'
import React from 'react'
import { StorybookForm } from '../StorybookForm.test.support'
import { FileField } from './FileField'

storiesOf('common/Form/FileField', module)
  .add('append', () => (
    <StorybookForm>
      <FileField
        name="some"
        label="Active"
        append={(files) => <button type="submit">Press to submit {files.length} files</button>}
      />
    </StorybookForm>
  ))
  .add('required', () => (
    <StorybookForm>
      <FileField name="some" label="Active" required />
    </StorybookForm>
  ))
  .add('disabled', () => (
    <StorybookForm>
      <FileField name="some" label="Active" disabled />
    </StorybookForm>
  ))
  .add('error', () => (
    <StorybookForm error>
      <FileField name="some" label="Active" required />
    </StorybookForm>
  ))
