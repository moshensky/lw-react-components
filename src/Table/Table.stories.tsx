import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Props, Table } from './Table'

export type CustomerViewModel = {
  id: number
  name: string
  uic: string | null
}

const customerNames: ReadonlyArray<string> = [
  'SIGMA-ALDRICH',
  'FARMA VET LTD',
  'YANGZHOU TIANHE PHARMACEUTICAL CO., LTD',
  'FUJIAN FUKANG PHARMACEUTICAL CO., LTD',
  'NANJING BAIJINGIU PHARMACEUTICALS CO., LTD',
  'САМЕКС ЕООД',
  'ZAHARN ZAVODI AD',
  'ПАРМАШ АД',
  'ФАРМАЦЕВТИЧНИ ЗАВОДИ МИЛВЕ АД',
  'КОДАП ЕООД',
  'МЕГЛЕ БЪЛГАРИЯ ЕООД',
  'БСС ХАНДЕЛ ООД',
  'BULGARIAN YOGHURT LTD',
  'LGC Standards Proficiency Testing',
  'ИЛИЯНА МАТОВА',
  'ЧИПОЛИНО ЕООД',
  'МОНСИ - 52 ЕООД',
  'АУРИМЕТРИЯ ЕООД',
  'ХЕПИ ФУУД 1 ЕООД',
  'СЛАДКА ВЕСТ 5 ЕООД',
  'АРОМЕНА ЕООД',
  'ДЖИ ЕНД ВИ ЕООД',
  'Кауфланд България ЕООД енд КО КД, Филиал 25 (РЦ 4600)',
  'Кауфланд България ЕООД енд КО КД, Филиал 3 (РЦ 1900)',
  'CHEH OOD',
  'СУДАХИМ ЕООД',
  'ShinEtsu',
  'ЛОМСКО ПИВО АД',
  'СЕВЕРЕН ВЕТЕРИНАРЕН ДИЛЪР - СВД ЕООД ',
  'МАКСИТУР АД',
  'ФАВОРИТ СОФИЯ ЕООД',
  'ПЪЗЛ УЕБ ОФИС ЕООД ',
  'ШАТО КГВ ЕООД',
  'МАКСИМУМ 69 ООД',
  'ГЕОРГИ БОРИСЛАВОВ СОФИЯНСКИ',
  'North aegean sea canneries S.A.',
  'ULKER BISKUVI SANAYI AS',
  'Nutracorp Ltd.',
  'HaYa Labs LLC',
  'Gadot Biochemical Ind. Ltd.',
  'ТПК Михалково',
  'ФОРЕЛ ООД',
  'А И Д КОМЕРСИАЛ ЕООД',
  'ВЪЛЧЕВ ООД',
  'ДОБРУДЖАНСКИ ХЛЯБ АД',
  'Шрайбер Фуудс България ЕООД',
  'Енергийна агенция - Пловдив',
]

export const customers: ReadonlyArray<CustomerViewModel> = customerNames.map((name, idx) => ({
  id: idx,
  name,
  uic: `${idx}`,
}))

const baseProps: Props<CustomerViewModel> = {
  type: 'cells',
  thead: (
    <tr>
      <th>Customer</th>
      <th>UIC</th>
    </tr>
  ),
  data: customers,
  getUniqKey: (datum) => `${datum.id}`,
  render: (x) => (
    <>
      <td>{x.name}</td>
      <td>{x.uic}</td>
    </>
  ),
}

storiesOf('common/Table/Table', module)
  // .addDecorator(host({ width: 650 }))
  .add('default', () => <Table<CustomerViewModel> {...baseProps} />)
  .add('on row click', () => (
    <Table<CustomerViewModel>
      {...baseProps}
      onRowSelect={action('on row click')}
      render={(x) => (
        <>
          <td>{x.name}</td>
          <td>{x.uic}</td>
        </>
      )}
    />
  ))
  .add('selectable', () => (
    <Table<CustomerViewModel>
      {...baseProps}
      render={(x) => (
        <>
          <td>{x.name}</td>
          <td>{x.uic}</td>
        </>
      )}
      selectable={(x) => x.id === 3}
    />
  ))
  .add('pagination local', () => (
    <Table<CustomerViewModel> {...baseProps} pagination={{ type: 'local' }} />
  ))
  .add('pagination remote', () => (
    <Table<CustomerViewModel>
      {...baseProps}
      pagination={{
        type: 'remote',
        onGridPagerChange: action('onGridPagerChange'),
        itemsPerPage: 50,
        pageNumber: 3,
        totalItemsCount: 3001,
      }}
    />
  ))
  .add('row class', () => (
    <Table<CustomerViewModel>
      {...baseProps}
      setRowClassName={(x) => (x.id % 2 === 0 ? 'bg-green-500' : 'bg-red-500')}
    />
  ))
  .add('loadable loading', () => (
    <Table<CustomerViewModel> {...baseProps} data={{ status: 'loading' }} />
  ))
  .add('loadable updating', () => (
    <Table<CustomerViewModel>
      {...baseProps}
      data={{ status: 'updating', item: customers.slice(0, 10) }}
      filter={
        <div>
          <h1>Filter body</h1>
        </div>
      }
    />
  ))
  .add('loadable loaded', () => (
    <Table<CustomerViewModel> {...baseProps} data={{ status: 'loaded', item: customers }} />
  ))
  .add('loadable error', () => (
    <Table<CustomerViewModel>
      {...baseProps}
      data={{
        status: 'failure',
        failure: 'failure reasons is some failure',
      }}
    />
  ))
