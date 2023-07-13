import classNames from 'classnames'
import React from 'react'
import { Link } from '../Router'

type Props = Readonly<{
  to: string
  active?: boolean
  disabled?: boolean
  children: React.ReactNode
}>

export function NavLink({ to, active, disabled, children }: Props) {
  return (
    <Link
      to={to}
      className={classNames(
        'inline-flex items-center px-2 py-1 text-sm font-medium transition rounded ripple',
        {
          'text-white bg-blue-500 shadow hover:bg-blue-500': active,
          'hover:bg-blue-100': !disabled,
          'text-gray-500 cursor-not-allowed hover:bg-transparent': disabled,
        },
      )}
    >
      {children}
    </Link>
  )
}
