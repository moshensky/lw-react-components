import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { MultiSelect } from './MultiSelect'
import { MultiselectOptions } from './types'
import { Tag } from './Tag'
import { indicatorsSyncModel } from 'components/appViews/Administration/Indicators/indicators-data.support.test'

export const basic: MultiselectOptions = ['first', 'second', 'third'].map((x) => ({
  id: `id_${x}`,
  label: x,
}))

export const options: MultiselectOptions = indicatorsSyncModel.data
  .slice(0, 300)
  .map((x) => ({
    id: `${x.indicatorId}`,
    label: x.name,
  }))
  .concat(basic)

const DelayedData = () => {
  const [items, setItems] = React.useState<MultiselectOptions>([])
  React.useEffect(() => {
    setTimeout(() => setItems(options))
  })

  return <MultiSelect initialSelected={[]} options={items} onChange={action('onChange')} />
}

storiesOf('common/MultiSelect', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({}))
  .add('Tag', () => <Tag label={basic[0].label} onRemoveTag={action('onRemoveTag')} />)
  .add('Tag disabled', () => (
    <Tag label={basic[0].label} disabled onRemoveTag={action('onRemoveTag')} />
  ))

storiesOf('common/MultiSelect', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({}))
  .add('invalid', () => (
    <MultiSelect initialSelected={basic} options={options} invalid onChange={action('onChange')} />
  ))
  .add('disabled', () => (
    <MultiSelect initialSelected={basic} options={options} disabled onChange={action('onChange')} />
  ))
  .add('100% width', () => (
    <MultiSelect initialSelected={basic} options={options} onChange={action('onChange')} />
  ))

storiesOf('common/MultiSelect', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({ width: 160 }))
  .add('fixed width', () => (
    <MultiSelect initialSelected={basic} options={options} onChange={action('onChange')} />
  ))
  .add('disabled empty', () => (
    <MultiSelect initialSelected={[]} options={options} disabled onChange={action('onChange')} />
  ))
  .add('select with initial empty state and then updated with data (m)', () => <DelayedData />)
  .add('selected items should not be present in options', () => {
    const selected: MultiselectOptions = ['second'].map((x) => ({
      id: `id_${x}`,
      label: x,
    }))
    const options: MultiselectOptions = ['first', 'second', 'third'].map((x) => ({
      id: `id_${x}`,
      label: x,
    }))
    return (
      <MultiSelect initialSelected={selected} options={options} onChange={action('onChange')} />
    )
  })
