import { mdiLogout } from '@mdi/js'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Avatar } from '../Comments/Avatar'
import { FaIcon } from '../FaIcon'
import { Link } from '../Router'
import { NavMenuItem } from './types'
import { m } from './nav-bar-messages'
import { ButtonWithDropdown } from './ButtonWithDropdown'

export type Props = Readonly<{
  name: string
  avatar?: string
  menuItems: ReadonlyArray<NavMenuItem>
  onLogout: () => void
}>

export function UserProfile({ name, avatar, menuItems, onLogout }: Props) {
  return (
    <ButtonWithDropdown
      className="ml-3"
      btnClassName="flex text-sm rounded-full"
      srText="Open user menu"
      buttonContent={<Avatar name={name} avatar={avatar} />}
      dropdownContent={
        <>
          {menuItems.map(({ path, icon, label }) => (
            <Link
              key={path}
              to={path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FaIcon icon={icon} className="inline mr-1" />
              <FormattedMessage {...label} />
            </Link>
          ))}
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            type="button"
            onClick={onLogout}
          >
            <FaIcon icon={mdiLogout} className="inline mr-1" />
            <FormattedMessage {...m.signOut} />
          </button>
        </>
      }
    />
  )
}
