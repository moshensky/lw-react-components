import { useOnClickOutside } from 'hooks'
import React from 'react'
import classNames from 'classnames'

type Width = 'small' | 'medium' | 'large' | 'xlarge'

const widthClassNames: { [key in Width]: string } = {
  small: 'w-48',
  medium: 'w-64',
  large: 'w-80',
  xlarge: 'w-96',
}

export type Props = Readonly<{
  className?: string
  btnClassName?: string
  width?: Width
  srText: string
  buttonContent: React.ReactElement
  dropdownContent: React.ReactElement
}>

export function ButtonWithDropdown({
  className,
  btnClassName,
  width,
  srText,
  buttonContent,
  dropdownContent,
}: Props) {
  const [showDropdown, setShowDropdown] = React.useState(false)
  const userMenuContainerRef = React.createRef<HTMLDivElement>()
  useOnClickOutside(showDropdown, [userMenuContainerRef], () => setShowDropdown(false))

  return (
    <div className={classNames('relative', className)}>
      <div>
        <button
          className={classNames(
            'bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white',
            btnClassName,
          )}
          id="user-menu"
          onClick={() => setShowDropdown(!showDropdown)}
          aria-haspopup={showDropdown}
        >
          <span className="sr-only">{srText}</span>
          {buttonContent}
        </button>
      </div>
      {/**
          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
          */}
      {showDropdown && (
        <div
          ref={userMenuContainerRef}
          className={classNames(
            'origin-top-right absolute right-0 bg-white ring-1 ring-black ring-opacity-5',
            widthClassNames[width ?? 'small'],
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          {dropdownContent}
        </div>
      )}
    </div>
  )
}
