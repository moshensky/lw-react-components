import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { steps } from '../StepProgressBar/StepProgressBar.stories'
import { Wizard } from './Wizard'

storiesOf('common/Wizard', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .add('default', () => (
    <Wizard
      title="wizard title"
      steps={steps}
      cancel={{
        disabled: false,
        label: 'Cancel',
        onClick: action('on cancel clicked'),
      }}
      prev={{
        disabled: true,
        onClick: action('on prev clicked'),
      }}
      next={{
        disabled: false,
        onClick: action('on next clicked'),
      }}
    >
      Wizard Content
    </Wizard>
  ))
  .add('additional buttons', () => (
    <Wizard
      title="wizard title"
      steps={steps}
      cancel={{
        disabled: false,
        label: 'Cancel',
        onClick: action('on cancel clicked'),
      }}
      prev={{
        disabled: true,
        onClick: action('on prev clicked'),
      }}
      next={{
        disabled: false,
        onClick: action('on next clicked'),
      }}
      additionalButtons={[
        {
          disabled: false,
          onClick: action('on first additional button clicked'),
          label: 'first additional button',
        },
        {
          disabled: false,
          onClick: action('on second additional button clicked'),
          label: 'second additional button',
          variant: 'primary',
        },
      ]}
    >
      Wizard Content
    </Wizard>
  ))
