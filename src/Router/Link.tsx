import React from 'react'
import { useAppDispatch } from 'redux-store/hooks'
import { RouterAction } from 'redux-store/reducers/router'

type Props = Readonly<{
  to: string
  className?: string
  title?: string
  replace?: boolean
  stopPropagation?: boolean
  children: React.ReactNode
}>

export function Link({ to, className, replace, stopPropagation, children, title }: Props) {
  const dispatch = useAppDispatch()
  const onPush = React.useCallback((to: string) => dispatch(RouterAction.push(to)), [dispatch])
  const onReplace = React.useCallback(
    (to: string) => dispatch(RouterAction.replace(to)),
    [dispatch],
  )

  const handleOnClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    // Ignore any click other than a left click
    if (
      (ev.button && ev.button !== 0) ||
      ev.metaKey ||
      ev.altKey ||
      ev.ctrlKey ||
      ev.shiftKey ||
      ev.defaultPrevented === true
    ) {
      return
    }

    if (stopPropagation) {
      ev.stopPropagation()
    }

    // Prevent the default behavior (page reload, etc.)
    ev.preventDefault()
    // Dispatch the appropriate navigation action
    if (replace) {
      onReplace(to)
    } else {
      onPush(to)
    }
  }
  const href = `/${location.pathname.split('/')[1] || ''}/${to}`

  return (
    <a href={href} onClick={handleOnClick} className={className} title={title}>
      {children}
    </a>
  )
}
