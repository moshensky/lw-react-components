import React from 'react'
import { BackgroundStyle, UXSemanticType } from '../types'
// FIXME! https://github.com/limsnow/lims/issues/41
import { theme } from 'theme'

type Props = Readonly<{
  value: React.ReactNode
  type: UXSemanticType
  style?: BackgroundStyle
  className?: string
}>

export function Pill({ value, className, type, style }: Props) {
  const styles: React.CSSProperties = {
    display: 'inline-flex',
    height: '1.6em',
    minWidth: '1.6em',
    borderRadius: '0.8em',
    ...theme.elementColors[style || 'fill'][type],
    lineHeight: '1em',
    borderWidth: 2,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 0.4em',
  }
  return (
    <div className={className} style={styles}>
      {value}
    </div>
  )
}
