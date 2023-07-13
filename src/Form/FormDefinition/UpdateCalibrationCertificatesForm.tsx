import { FormDefinition, LWForm } from '../FormDefinition'
import { requiredValidator } from '../common-validators'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { GuidGenerationService } from '../../utils'
import { Card, CardBody } from '../../Card'

type TechnicalToolData = {
  calibrationCertificates: ReadonlyArray<{
    id: string
    certificateNumber: string
    isActive: boolean
    measurementDeviations: ReadonlyArray<{
      order: number
      deviation: number
    }>
  }>
}

type Props = Readonly<{
  technicalToolData: TechnicalToolData
  onSave: (model: TechnicalToolData) => void
}>

export function UpdateCalibrationCertificatesForm({ onSave, technicalToolData }: Props) {
  const technicalToolsFormDefinition: LWForm<TechnicalToolData> = {
    model: technicalToolData,
    viewType: 'column',
    mkEmpty: () => ({ calibrationCertificates: [] }),
    items: [
      {
        name: 'calibrationCertificates',
        type: 'Array',
        label: <h5>Calibration certificates</h5>,
        viewType: 'table',
        mkEmpty: () => ({
          id: GuidGenerationService.newGuid(),
          certificateNumber: '',
          isActive: false,
          measurementDeviations: [],
        }),
        items: [
          {
            name: 'certificateNumber',
            type: 'TextField',
            label: 'Certificate number',
            required: true,
            validate: requiredValidator,
            className: 'mb-0',
          },
          {
            name: 'isActive',
            type: 'Bool',
            label: 'Active',
            required: false,
            className: 'mb-0',
          },
        ],
        secondaryItems: [
          {
            name: 'measurementDeviations',
            type: 'Array',
            label: <h5>Calibration Levels</h5>,
            viewType: 'table',
            mkEmpty: () => ({
              deviation: 0,
              order: 0,
            }),
            items: [
              {
                name: 'order',
                type: 'TextField',
                label: 'Order',
                required: true,
                validate: requiredValidator,
                className: 'mb-0',
              },
              {
                name: 'deviation',
                type: 'TextField',
                label: 'Deviation',
                className: 'mb-0',
              },
            ],
          },
        ],
      },
    ],
  }

  return (
    <Card>
      <CardBody>
        {/* <h5>
          <FormattedMessage {...(isNew ? m.addTechnicalTool : m.updateTechnicalTool)} />
        </h5> */}
        <FormDefinition formDefinition={technicalToolsFormDefinition} onSave={onSave} />
      </CardBody>
    </Card>
  )
}
