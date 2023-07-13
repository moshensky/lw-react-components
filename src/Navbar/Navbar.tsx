import cn from 'classnames'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { NavLink } from './NavLink'
import { FaIcon } from '../FaIcon'
import { UserProfile } from './UserProfile'
import { NavMenuItem } from './types'
import { Button } from '../Buttons'
import { Input } from '../Input'
import { mdiMagnify } from '@mdi/js'
import { NotificationsIconButton } from './NotificationsIconButton'
import { UINotification } from '../Notifications'

export type Props = Readonly<{
  userName: string
  userAvatar?: string
  brand?: React.ReactElement
  menuItems: ReadonlyArray<NavMenuItem>
  userProfileMenu: ReadonlyArray<NavMenuItem>
  currentPath: string
  notifications: ReadonlyArray<UINotification>
  onDismissNotification: (id: string) => void
  onLogout: () => void
  onSearch?: (searchTerm: string) => void
}>

export function Navbar({
  brand,
  menuItems,
  currentPath,
  userName,
  userAvatar,
  userProfileMenu,
  notifications,
  onDismissNotification,
  onLogout,
  onSearch,
}: Props) {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [show, setShow] = React.useState(false)
  const brandEl = brand && <a href="/">{brand}</a>
  const menu = menuItems.map(({ path, icon, label }) => (
    <NavLink key={path} to={path} active={currentPath.startsWith(path)}>
      <FaIcon icon={icon} size="1.2rem" className="inline mr-1" />
      <span className="leading-none">
        <FormattedMessage {...label} />
      </span>
    </NavLink>
  ))

  const handleOnSearch = () => {
    if (onSearch) {
      onSearch(searchTerm)
      setSearchTerm('')
    }
  }

  const handleOnSearchInputKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>): void => {
    if (ev.key === 'Enter') {
      ev.preventDefault()
      handleOnSearch()
    }
  }

  return (
    <nav className="fixed left-0 top-0 right-0 bg-gray-800 z-1000 do-not-print">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setShow(!show)}
              aria-expanded={show}
            >
              <span className="sr-only">Open main menu</span>
              {show ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">{brandEl}</div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {onSearch && (
                  <div className="flex">
                    <Input
                      value={searchTerm}
                      className="w-48 border-r-0 rounded-r-none"
                      onChange={(x) => setSearchTerm(x.currentTarget.value)}
                      onKeyDown={handleOnSearchInputKeyDown}
                    />
                    <Button
                      className="rounded-l-none"
                      outline
                      variant="secondary"
                      icon={mdiMagnify}
                      onClick={handleOnSearch}
                    />
                  </div>
                )}
                {menu}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NotificationsIconButton
              notifications={notifications}
              onDismiss={onDismissNotification}
            />
            <UserProfile
              name={userName}
              avatar={userAvatar}
              onLogout={onLogout}
              menuItems={userProfileMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('sm:hidden', { block: show, hidden: !show })}>
        <div className="px-2 pt-2 pb-3 space-y-1">{menu}</div>
      </div>
    </nav>
  )
}
