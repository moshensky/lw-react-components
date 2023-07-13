import React from 'react'

export type RouterLocation = Readonly<{
  pathname: string
  search: string
  queries: {
    [index: string]: string | undefined
  }
  hash: string
}>

type Props = Readonly<{
  location: RouterLocation
  path: string
  render: (location: RouterLocation, ...rest: string[]) => React.ReactElement
}>

export function Route({ path, render, location }: Props): React.ReactElement | null {
  const pathFragments = path.split('/').filter(Boolean)
  const locationFragments = location.pathname.split('/').filter(Boolean)

  if (pathFragments[0] !== locationFragments[0]) {
    return null
  }

  if (locationFragments.length === 1 && pathFragments.length === 1) {
    return render(location)
  }

  if (locationFragments.length === 1 && pathFragments.length === 2 && pathFragments[1] === '*') {
    return render(location)
  }

  if (locationFragments.length === 2 && pathFragments.length === 2) {
    if (pathFragments[1] === '*') {
      return render(location)
    }

    if (pathFragments[1][0] === ':') {
      return render(location, locationFragments[1])
    }
  }

  if (pathFragments.length === 0 && location.pathname === '/') {
    return render(location)
  }

  // FIXME: something more fancy
  if (pathFragments[1] === '*' || path === location.pathname) {
    return render(location)
  }

  return null
}
