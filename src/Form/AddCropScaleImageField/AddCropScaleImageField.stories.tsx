import { storiesOf } from '@storybook/react'
import React from 'react'
import { StorybookForm } from '../StorybookForm.test.support'
import { AddCropScaleImageField } from './AddCropScaleImageField'

storiesOf('common/Form/AddCropScaleImageField', module)
  .add('default', () => (
    <StorybookForm>
      <AddCropScaleImageField name="some" label="Active" />
    </StorybookForm>
  ))
  .add('required', () => (
    <StorybookForm>
      <AddCropScaleImageField name="some" label="Active" required />
    </StorybookForm>
  ))
  .add('disabled', () => (
    <StorybookForm>
      <AddCropScaleImageField name="some" label="Active" disabled />
    </StorybookForm>
  ))
  .add('error', () => (
    <StorybookForm error>
      <AddCropScaleImageField name="some" label="Active" required />
    </StorybookForm>
  ))
