import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { TableFilter } from './TableFilter'

storiesOf('common/Table/TableFilter', module)
  .addDecorator(host({}))
  .add('default', () => <TableFilter>table filter</TableFilter>)
