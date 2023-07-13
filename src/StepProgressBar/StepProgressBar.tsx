import cn from 'classnames'
import React from 'react'
import { Pill } from '../Pill'
import './step-progress-bar.css'

export type StepProgressBarItem = Readonly<{
  title: React.ReactNode
  selected?: boolean
  completed?: boolean
}>

type Props = Readonly<{
  steps: ReadonlyArray<StepProgressBarItem>
  stepClassName?: string
}>

export function StepProgressBar({ steps, stepClassName }: Props) {
  return (
    <div className="lw-step-progress-bar-root">
      {steps.map(({ completed, selected, title }, idx) => (
        <div
          key={`${idx}-${title}`}
          className={cn({
            ['lw-step-progress-bar-active']: completed || selected,
            ['lw-step-progress-bar-step']: true,
          })}
          style={{ width: `${100 / steps.length}%` }}
        >
          {title}
          <div className={cn('lw-step-progress-bar-dot', stepClassName || 'bg-white')}>
            <Pill
              className={selected ? undefined : 'lw-step-progress-bar-pill'}
              value={idx + 1}
              type={selected || completed ? 'primary' : 'secondary'}
              style={selected ? 'fill' : 'outline'}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
