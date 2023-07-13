import { TechnicalToolData } from '@limsnow/core-domain'
import { FormDefinition, LWForm, requiredValidator } from 'components'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { GuidGenerationService } from '@limsnow/utils'
import { mc } from 'intl'
import { Card, CardBody } from 'components/Card'

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
        label: (
          <h5>
            <FormattedMessage {...mc.calibrationCertificates} />
          </h5>
        ),
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
            label: <FormattedMessage {...mc.active} />,
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
