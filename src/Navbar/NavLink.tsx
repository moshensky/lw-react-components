import React from 'react'
import { Link } from '../Router'

type Props = Readonly<{
  to: string
  children: React.ReactNode
  active?: boolean
}>

export function NavLink({ to, children, active }: Props) {
  const common = 'px-3 py-2 rounded-md text-sm font-medium block flex items-center'
  const classes = `${common} ${
    active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
  }`
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}
