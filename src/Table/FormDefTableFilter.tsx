import { mdiClose, mdiMagnify } from '@mdi/js'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from '../Buttons'
import { FormDefinition, LWForm } from '../Form'
import { TableFilter } from './TableFilter'
import { mc } from 'intl'

type Props<T> = Readonly<{
  formDefinition: LWForm<T>
  className?: string
  onFilter: (filter: T) => void
  onReset: () => void
}>

export function FormDefTableFilter<T>({ formDefinition, className, onFilter, onReset }: Props<T>) {
  return (
    <TableFilter className={className}>
      <FormDefinition
        formDefinition={formDefinition}
        onSave={onFilter}
        render={({ formControls }) => {
          return (
            <div className="shadow sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="lw-form-row">{formControls.map(({ node }) => node)}</div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <Button
                  type="reset"
                  outline
                  onClick={onReset}
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
              </div>
            </div>
          )
        }}
      />
    </TableFilter>
  )
}
