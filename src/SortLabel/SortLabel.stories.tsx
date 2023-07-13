import { SortDirection } from '@limsnow/core-domain'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { SortLabel } from './SortLabel'

storiesOf('common/SortLabel', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({ width: 300 }))
  .add('default', () => (
    <SortLabel
      label={<span>label name</span>}
      name="isAccredited"
      onChange={action('on sort label sort')}
    />
  ))

  .add('asc', () => (
    <SortLabel
      label={<span>request number</span>}
      name="requestNumber"
      sortGridBy={{
        name: 'requestNumber',
        direction: SortDirection.Asc,
      }}
      onChange={action('on sort label sort')}
    />
  ))

  .add('desc', () => (
    <SortLabel
      label={<span>label name</span>}
      name="requestNumber"
      sortGridBy={{
        name: 'requestNumber',
        direction: SortDirection.Desc,
      }}
      onChange={action('on sort label sort')}
    />
  ))
