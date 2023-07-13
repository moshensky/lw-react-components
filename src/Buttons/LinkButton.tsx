import cn from 'classnames'
import React from 'react'
import { FaIcon } from '../FaIcon'
import { Link } from '../Router'
import { common, getVariant, Variant } from './Button'

type Props = {
  to: string
  variant: Variant
  label?: React.ReactNode
  icon?: string
  outline?: boolean
  disabled?: boolean
  className?: string
  title?: string
}

export function LinkButton({ label, icon, to, outline, variant, className, title }: Props) {
  return (
    <Link to={to} className={cn(common, getVariant(variant, outline), className)} title={title}>
      {icon && <FaIcon icon={icon} className={cn('inline', { 'mr-1': label })} />}
      {label && label}
    </Link>
  )
}
