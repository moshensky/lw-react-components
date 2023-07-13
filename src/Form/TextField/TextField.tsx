import classNames from 'classnames'
import { RequiredSymbol, TextArea, Input } from 'components'
import React from 'react'
import { Field } from 'react-final-form'

export type TextFieldVariant = 'text' | 'multiline' | 'password' | 'number'

type Props = Readonly<{
  id?: string
  className?: string
  inputClassName?: string
  variant?: TextFieldVariant
  label?: React.ReactNode
  help?: React.ReactNode
  name: string
  placeholder?: string
  autocomplete?: string
  required?: boolean
  multiline?: boolean
  rows?: number
  disabled?: boolean
  style?: React.CSSProperties
}>

export function TextField({
  id,
  name,
  label,
  help,
  required,
  placeholder,
  autocomplete,
  multiline,
  rows,
  disabled,
  style,
  variant,
  className,
  inputClassName,
}: Props) {
  return (
    <Field
      name={name}
      render={({ input, meta: { touched, error } }) => (
        <div className={classNames('form-group', className)} style={style}>
          {label && (
            <label htmlFor={id || name}>
              {label}
              {required && <RequiredSymbol />}
            </label>
          )}
          {multiline ? (
            <TextArea
              {...input}
              className={inputClassName}
              id={id || name}
              rows={rows || 2}
              invalid={error && touched}
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              autoComplete={autocomplete}
            />
          ) : (
            <Input
              {...input}
              className={inputClassName}
              id={id || name}
              type={variant || 'text'}
              invalid={error && touched}
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              autoComplete={autocomplete}
            />
          )}
          <div
            className="invalid-feedback"
            style={{ display: error && touched ? 'block' : 'none' }}
          >
            {error}
          </div>
          {help && <small className="form-text text-muted">{help}</small>}
        </div>
      )}
    />
  )
}
