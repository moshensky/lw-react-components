import { NavItem } from 'appRoutes'
import { RouterLocation, NavLink } from 'components'
import { AppRoute } from 'components/domain'
import React from 'react'
import { FormattedMessage } from 'react-intl'

type Props = Readonly<{
  location: RouterLocation
  primary: ReadonlyArray<NavItem>
  secondary: ReadonlyArray<NavItem>
}>

export function SideNavWithContent({ location, primary, secondary }: Props) {
  const nav = [...primary, ...secondary]

  return (
    <div className="flex print:justify-center">
      <div className="do-not-print shadow-sm w-64 h-full p-3 bg-gray-50 fixed z-50 overflow-y-auto">
        <div className="flex flex-col space-y-1">
          {primary.map(({ path, message, skipFromNav }) =>
            skipFromNav ? null : (
              <NavLink key={path} to={path} active={location.pathname.startsWith(path)}>
                <FormattedMessage {...message} />
              </NavLink>
            ),
          )}
        </div>
        {secondary.length > 0 && (
          <>
            <hr className="my-4" />

            <div className="flex flex-col space-y-1">
              {secondary.map(({ path, message, skipFromNav }) =>
                skipFromNav ? null : (
                  <NavLink key={path} to={path} active={location.pathname.startsWith(path)}>
                    <FormattedMessage {...message} />
                  </NavLink>
                ),
              )}
            </div>
          </>
        )}
      </div>
      <div className="ml-64 w-full print:m-0">
        {nav.map(({ path, component }) => (
          <AppRoute key={path} path={path} render={() => component} />
        ))}
      </div>
    </div>
  )
}
