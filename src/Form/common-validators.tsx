import React from 'react'
import { mc } from 'intl'
import { FormattedMessage } from 'react-intl'
import { pipe } from 'fp-ts/lib/function'
import * as E from 'fp-ts/lib/Either'
import { ValuePath, Validator } from './validate'
import { isValid as dfIsValid, isDate } from 'date-fns'
import { isNil, not } from '@limsnow/utils'
import { unreachable } from '@limsnow/core-domain/utils'
import { isRichTextEmpty, RichText } from '@limsnow/core-domain'

function isEmpty(variable: unknown): boolean {
  if (variable === null) {
    return true
  }

  if (Array.isArray(variable)) {
    if (variable.length === 0) {
      return true
    }
    const isRichTextAndIsEmpty = pipe(
      RichText.decode(variable),
      E.map(isRichTextEmpty),
      E.getOrElse(() => false),
    )

    return isRichTextAndIsEmpty
  }

  const type = typeof variable
  switch (type) {
    case 'bigint': {
      return false
    }
    case 'boolean': {
      return false
    }
    case 'function': {
      return !variable
    }
    case 'number': {
      return isNaN(variable as number)
    }
    case 'object': {
      if (isDate(variable)) {
        return false
      } else if (variable instanceof File) {
        return variable.size === 0
      }

      return Object.keys(variable as object).length === 0
    }
    case 'string': {
      return (variable as string).trim().length === 0
    }
    case 'symbol': {
      return !variable
    }
    case 'undefined': {
      return true
    }
    default: {
      return unreachable(type)
    }
  }
}

export const isNotEmpty = (value: any): boolean => not(isNil(value) || isEmpty(value))

export const isDateValid = (value: any): boolean => isDate(value) && dfIsValid(value)

export const isNumberGreaterThan =
  (num: number) =>
  (value: any): boolean =>
    isNotEmpty(value) && value > num

export const isEmail = (value: any): boolean => {
  // eslint-disable-next-line no-useless-escape
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return isNotEmpty(value) && re.test(value)
}

export const requiredValidator = {
  errorMsg: <FormattedMessage {...mc.requiredFiledErrorMessage} />,
  validator: isNotEmpty,
}

export const emailValidator = {
  errorMsg: <FormattedMessage {...mc.invalidEmail} />,
  validator: isEmail,
}

export const isNumberValidator = {
  errorMsg: <FormattedMessage {...mc.isNaN} />,
  validator: (x: any) => !isNaN(x),
}

export const isOptionalNumberValidator = {
  errorMsg: <FormattedMessage {...mc.isNaN} />,
  validator: (x: any) => isEmpty(x) || !isNaN(x),
}

export const isNumberSmallerValidator = (max: number) => ({
  errorMsg: <FormattedMessage {...mc.numberMustBeBetweenRange} values={{ max }} />,
  validator: (x: any) => isNumberValidator.validator(x) && x > 0 && x < max,
})

export const mkRequiredValidator = (path: ValuePath): Validator =>
  Validator.of(path, <FormattedMessage {...mc.requiredFiledErrorMessage} />, isNotEmpty)

export const passwordValidator = {
  errorMsg: <FormattedMessage {...mc.passwordsMismatch} />,
  validator: (password: any, values: any) =>
    isNotEmpty(password) && password === values.password_confirm,
}
