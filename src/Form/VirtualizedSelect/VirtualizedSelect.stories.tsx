import { IndicatorViewModel } from '@limsnow/core-domain'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { indicatorsSyncModel } from 'components/appViews/Administration/Indicators/indicators-data.support.test'
import React from 'react'
import host from 'storybook-host'
import { DelayedData, setIntlDecorator, themeDecorator } from 'utils/storybook'
import { StorybookForm } from '../StorybookForm.test.support'
import { VirtualizedSelectElement } from './components/VirtualizedSelectElement'
import { VirtualizedSelect } from './VirtualizedSelect'

const data = [...indicatorsSyncModel.data]
const smallData = indicatorsSyncModel.data.slice(0, 30)

const itemToString = (item: IndicatorViewModel | null) => {
  return item ? item.name : ''
}

storiesOf('common/Form/VirtualizedSelect', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({ width: 400 }))
  .add('with initial empty state and then updated with data (m)', () => (
    <DelayedData
      data={data}
      timeout={1000}
      render={(items) => (
        <VirtualizedSelectElement<IndicatorViewModel>
          itemToString={itemToString}
          items={[...items]}
          keyName="indicatorId"
          placeholder="select something..."
          onChange={action('onChange')}
        />
      )}
    />
  ))
  .add('select (m)', () => (
    <VirtualizedSelectElement<IndicatorViewModel>
      itemToString={itemToString}
      items={data}
      keyName="indicatorId"
      placeholder="select something..."
      onChange={action('onChange')}
    />
  ))
  .add('select not clearable (m)', () => (
    <VirtualizedSelectElement<IndicatorViewModel>
      itemToString={itemToString}
      items={smallData}
      keyName="indicatorId"
      placeholder="select something..."
      onChange={action('onChange')}
      selectedItem={2195}
      notClearable
    />
  ))
  .add('select with default value (m)', () => (
    <VirtualizedSelectElement<IndicatorViewModel>
      itemToString={itemToString}
      items={smallData}
      keyName="indicatorId"
      placeholder="select something..."
      onChange={action('onChange')}
      selectedItem={2195}
    />
  ))
  .add('default (m)', () => (
    <div style={{ width: 200 }}>
      <StorybookForm>
        <VirtualizedSelect<IndicatorViewModel>
          name="some"
          label="Active"
          options={indicatorsSyncModel.data}
          keyName="indicatorId"
          itemToString={itemToString}
        />
      </StorybookForm>
    </div>
  ))
  .add('required (m)', () => (
    <StorybookForm>
      <VirtualizedSelect<IndicatorViewModel>
        name="some"
        label="Active"
        required
        options={smallData}
        keyName="indicatorId"
        itemToString={itemToString}
      />
    </StorybookForm>
  ))
  .add('disabled (m)', () => (
    <StorybookForm>
      <VirtualizedSelect<IndicatorViewModel>
        name="some"
        label="Active"
        disabled
        options={smallData}
        keyName="indicatorId"
        itemToString={itemToString}
      />
    </StorybookForm>
  ))
  .add('selected (m)', () => (
    <StorybookForm initialValues={{ some: 2195 }}>
      <VirtualizedSelect<IndicatorViewModel>
        name="some"
        label="Active"
        options={indicatorsSyncModel.data}
        keyName="indicatorId"
        itemToString={itemToString}
      />
    </StorybookForm>
  ))
  .add('placeholder (m)', () => (
    <StorybookForm>
      <VirtualizedSelect<IndicatorViewModel>
        name="some"
        label="Active"
        options={smallData}
        keyName="indicatorId"
        itemToString={itemToString}
        placeholder="select something..."
      />
    </StorybookForm>
  ))
  .add('error (m)', () => (
    <StorybookForm error>
      <VirtualizedSelect<IndicatorViewModel>
        name="some"
        label="Active"
        required
        options={smallData}
        keyName="indicatorId"
        itemToString={itemToString}
      />
    </StorybookForm>
  ))
