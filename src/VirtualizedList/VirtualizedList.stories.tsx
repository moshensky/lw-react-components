import { storiesOf } from '@storybook/react'
import { indicatorsSyncModel } from 'components/appViews/Administration/Indicators/indicators-data.support.test'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { VirtualizedList } from './VirtualizedList'
import { ListChildComponentProps } from 'react-window'

const data = indicatorsSyncModel.data

const itemToString = (index: number) => {
  const item = data[index]
  return item ? item.name : ''
}

const render: (itemInfo: ListChildComponentProps) => React.ReactElement = ({ index, style }) => (
  <div style={style} key={`${data[index].indicatorId}`}>
    {itemToString(index)}
  </div>
)

storiesOf('common/VirtualizedList', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({ width: 400 }))
  .add('default', () => (
    <VirtualizedList itemToString={itemToString} renderItem={render} itemCount={data.length} />
  ))
  .add('height', () => (
    <VirtualizedList
      itemToString={itemToString}
      height={500}
      renderItem={render}
      itemCount={data.length}
    />
  ))
  .add('custom style and render', () => (
    <VirtualizedList
      itemCount={data.length}
      itemToString={itemToString}
      applyMeasureDivStyle={() => ({
        paddingBottom: '8px',
        fontSize: '24px',
      })}
      renderItem={({ index, style }) => (
        <div
          style={{ ...style, fontSize: 24 }}
          key={`${indicatorsSyncModel.data[index].indicatorId}`}
        >
          {itemToString(index)}
        </div>
      )}
    />
  ))
