import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { ToggleButton, ToggleButtonOptions } from './ToggleButton'

const yesNoOptions: ToggleButtonOptions<'yes' | 'no'> = [
  { id: 'yes', selected: false, label: 'yes' },
  { id: 'no', selected: false, label: 'no' },
]

const yesNoAll: ToggleButtonOptions<'yes' | 'no' | 'all'> = [
  { id: 'yes', selected: false, label: 'yes' },
  { id: 'no', selected: false, label: 'no' },
  { id: 'all', selected: true, label: 'all' },
]

storiesOf('common/Buttons/ToggleButton', module)
  .addDecorator(host({}))
  .add('yes | no', () => <ToggleButton options={yesNoOptions} onChange={action('onChange')} />)
  .add('yes | no | all', () => <ToggleButton options={yesNoAll} onChange={action('onChange')} />)
