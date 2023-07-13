import { TechnicalToolModel } from '@limsnow/core-domain'
import {
  Button,
  Card,
  CardBody,
  FormDefinition,
  LWForm,
  requiredValidator,
} from 'components'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  FetchTechnicalToolsWorkLoadReportPayload,
  initState,
} from 'redux-store/reducers/technical-tools'
import { mc } from 'intl'
import { mdiClose, mdiMagnify } from '@mdi/js'

type Props = Readonly<{
  filterModel: FetchTechnicalToolsWorkLoadReportPayload
  technicalTools: ReadonlyArray<TechnicalToolModel>
  onFilter: (model: any) => void
  onResetFilter: () => void
}>

export function RowSample({ filterModel, onFilter, technicalTools, onResetFilter }: Props) {
  const formDefinition: LWForm<FetchTechnicalToolsWorkLoadReportPayload> = {
    model: filterModel,
    mkEmpty: () => initState().workLoadReportingFilter,
    viewType: 'row',
    renderButtons: () => (
      <>
        <Button
          type="reset"
          outline
          onClick={onResetFilter}
          variant="secondary"
          label={<FormattedMessage {...mc.resetFilters} />}
          icon={mdiClose}
        />
        <Button
          type="submit"
          className="ml-1"
          variant="primary"
          label={<FormattedMessage {...mc.filter} />}
          icon={mdiMagnify}
        />
      </>
    ),
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
    <Card>
      <CardBody>
        <h5>
          <FormattedMessage {...mc.filter} />
        </h5>
        <FormDefinition formDefinition={formDefinition} onSave={onFilter} />
      </CardBody>
    </Card>
  )
}
