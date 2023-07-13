import { TechnicalToolModel } from '@limsnow/core-domain'
import { Card, CardBody, FormDefinition, LWForm, requiredValidator } from 'components'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  FetchTechnicalToolsWorkLoadReportPayload,
  initState,
} from 'redux-store/reducers/technical-tools'
import { mc } from 'intl'

type Props = Readonly<{
  filterModel: FetchTechnicalToolsWorkLoadReportPayload
  technicalTools: ReadonlyArray<TechnicalToolModel>
  onFilter: (model: any) => void
}>

export function ColumnSample({ filterModel, onFilter, technicalTools }: Props) {
  const formDefinition: LWForm<FetchTechnicalToolsWorkLoadReportPayload> = {
    model: filterModel,
    mkEmpty: () => initState().workLoadReportingFilter,
    viewType: 'column',
    items: [
      {
        name: 'fromDate',
        type: 'DateField',
        label: <FormattedMessage {...mc.fromDate} />,
        required: true,
        validate: requiredValidator,
      },
      {
        name: 'toDate',
        type: 'TextField',
        label: <FormattedMessage {...mc.toDate} />,
        required: true,
        validate: requiredValidator,
      },
      {
        name: 'technicalToolIds',
        type: 'VirtualizedMultiSelect',
        label: 'Technical tools',
        required: true,
        options: technicalTools.map((x) => ({
          id: x.technicalToolId,
          name: x.description,
        })),
        validate: requiredValidator,
      },
    ],
  }

  return (
    <Card style={{ minWidth: 500 }}>
      <CardBody>
        <h5>
          <FormattedMessage {...mc.filter} />
        </h5>
        <FormDefinition formDefinition={formDefinition} onSave={onFilter} />
      </CardBody>
    </Card>
  )
}
