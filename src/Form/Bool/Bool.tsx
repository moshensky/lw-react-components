import classNames from 'classnames'
import { RequiredSymbol, ToggleButtonOptions, ToggleButton } from 'components'
import React from 'react'
import { Field } from 'react-final-form'
import { FormattedMessage } from 'react-intl'
import { m } from './boolWithAllMessages'

type Props = Readonly<{
  name: string
  label?: React.ReactNode
  required?: boolean
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}>

export function Bool({ name, label, required, disabled, className, style }: Props) {
  return (
    <Field
      name={name}
      render={({ input: { value, onChange }, meta: { touched, error } }) => {
        const options: ToggleButtonOptions<boolean> = [
          { id: true, selected: value, label: <FormattedMessage {...m.yes} /> },
          { id: false, selected: !value, label: <FormattedMessage {...m.no} /> },
        ]

        return (
          <div className={classNames('mb-4', className)} style={style}>
            {label && (
              <label className="d-inline mb-1 whitespace-nowrap">
                {label}
                {required && <RequiredSymbol />}
              </label>
            )}
            <ToggleButton options={options} disabled={disabled} onChange={onChange} />
            <div
              className="invalid-feedback"
              style={{ display: error && touched ? 'block' : 'none' }}
            >
              {error}
            </div>
          </div>
        )
      }}
    />
  )
}
