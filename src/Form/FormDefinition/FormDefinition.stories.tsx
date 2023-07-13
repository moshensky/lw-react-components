import { CalibrationCertificate, RichText } from '@limsnow/core-domain'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { technicalTools } from 'components/appViews/Administration/TechnicalTools/TechnicalTools.stories'
import React from 'react'
import { initState } from 'redux-store/reducers/technical-tools'
import host from 'storybook-host'
import { ColumnSample } from './ColumnSample'
import { RowSample } from './RowSample'
import { UpdateCalibrationCertificatesForm } from './UpdateCalibrationCertificatesForm'
import { LWForm, LabelWithValue } from './types'
import { passwordValidator, requiredValidator } from '../common-validators'
import { FormDefinition } from './FormDefinition'
import { range } from '../../utils'
import { MultiselectOptions } from '../../MultiSelect'

const calibrationCertificates: ReadonlyArray<CalibrationCertificate> = range(1, 4).map((x) => ({
  id: `guid-${x}`,
  certificateNumber: `cert-${x}`,
  isActive: x % 3 === 0,
  measurementDeviations: [
    {
      deviation: 10,
      order: 20,
    },
  ],
}))

storiesOf('common/Form/FormDefinition', module)
  .addDecorator(host({ width: 500 }))
  .add('Row', () => (
    <RowSample
      onFilter={action('on save')}
      technicalTools={technicalTools}
      filterModel={{
        ...initState().workLoadReportingFilter,
        fromDate: new Date('2011-11-29T10:34:44Z'),
        toDate: new Date('2011-11-29T14:34:44Z'),
      }}
      onResetFilter={action('onResetFilter')}
    />
  ))
  .add('Column', () => (
    <ColumnSample
      onFilter={action('on save')}
      technicalTools={technicalTools}
      filterModel={{
        ...initState().workLoadReportingFilter,
        fromDate: new Date('2011-11-29T10:34:44Z'),
        toDate: new Date('2011-11-29T14:34:44Z'),
      }}
    />
  ))
  .add('Array in array update calibration certificates empty state', () => (
    <UpdateCalibrationCertificatesForm
      onSave={action('on save')}
      technicalToolData={{
        calibrationCertificates: [],
      }}
    />
  ))
  .add('update calibration certificates non empty state', () => (
    <UpdateCalibrationCertificatesForm
      onSave={action('on save')}
      technicalToolData={{ calibrationCertificates }}
    />
  ))

const idWithNames: ReadonlyArray<LabelWithValue> = [
  { value: 7, label: 'seven' },
  { value: 8, label: 'eight' },
  { value: 9, label: 'nine' },
]

storiesOf('common/Form/FormDefinition/FormControl', module)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({ width: 500 }))
  .add('RadioGroup', () => {
    const formDefinition: LWForm<{ someTestId: number }> = {
      viewType: 'column',
      mkEmpty: () => ({}),
      items: [
        {
          name: 'someTestId',
          type: 'RadioGroup',
          label: 'Test label',
          options: idWithNames,
          required: true,
          validate: requiredValidator,
        },
      ],
    }
    return <FormDefinition formDefinition={formDefinition} onSave={action('onSave')} />
  })
  .add('RadioGroup with init value', () => {
    const formDefinition: LWForm<{ someTestId: number }> = {
      viewType: 'column',
      model: { someTestId: 8 },
      mkEmpty: () => ({}),
      items: [
        {
          name: 'someTestId',
          type: 'RadioGroup',
          label: 'Test label',
          options: idWithNames,
          required: true,
          validate: requiredValidator,
        },
      ],
    }
    return <FormDefinition formDefinition={formDefinition} onSave={action('onSave')} />
  })
  .add('PasswordField', () => {
    const passwordFormDefinition: LWForm<{ password: string }> = {
      viewType: 'column',
      mkEmpty: () => ({}),
      items: [
        {
          name: 'password',
          type: 'PasswordField',
          label: 'New Password',
          confirmLabel: 'Confirm Password',
          required: true,
          validate: passwordValidator,
        },
      ],
    }
    return <FormDefinition formDefinition={passwordFormDefinition} onSave={action('onSave')} />
  })
  .add('MultiSelect', () => {
    const selected: MultiselectOptions = ['second'].map((x) => ({
      id: `id_${x}`,
      label: x,
    }))
    const options: MultiselectOptions = ['first', 'second', 'third'].map((x) => ({
      id: `id_${x}`,
      label: x,
    }))
    const formDefinition: LWForm<{ tags: MultiselectOptions }> = {
      model: { tags: selected },
      viewType: 'column',
      mkEmpty: () => ({}),
      items: [
        {
          name: 'tags',
          type: 'MultiSelect',
          options,
          label: 'Tags',
          required: true,
        },
      ],
    }
    return <FormDefinition formDefinition={formDefinition} onSave={action('onSave')} />
  })
  .add('TagsSelect', () => {
    const formDefinition: LWForm<{ tags: string[] }> = {
      model: { tags: ['second'] },
      viewType: 'column',
      mkEmpty: () => ({}),
      items: [
        {
          name: 'tags',
          type: 'TagsSelect',
          options: ['first', 'second', 'third'],
          label: 'Tags',
          required: true,
        },
      ],
    }
    return <FormDefinition formDefinition={formDefinition} onSave={action('onSave')} />
  })
  .add('RichText', () => {
    const formDefinition: LWForm<{ sampleRichText: RichText }> = {
      model: { sampleRichText: [] },
      viewType: 'column',
      mkEmpty: () => ({}),
      items: [
        {
          name: 'sampleRichText',
          type: 'RichTextField',
          label: 'Enter sample rich text',
          required: true,
        },
      ],
    }
    return <FormDefinition formDefinition={formDefinition} onSave={action('onSave')} />
  })
