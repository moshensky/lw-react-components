import { Button } from '../Buttons'
import { Dialog, DialogHeader, DialogFooter, DialogBody } from '../Dialog'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Variant } from '../Buttons/Button'
import { StepProgressBar, StepProgressBarItem } from '../StepProgressBar/StepProgressBar'
import { m } from './wizardMessages'

export type WizardButton = Readonly<{
  onClick: () => void
  label?: React.ReactNode
  disabled?: boolean
  variant?: Variant
  outline?: boolean
}>

export type WizardAdditionalButtons = ReadonlyArray<
  WizardButton & {
    label: React.ReactNode
  }
>

type Props = Readonly<{
  title: React.ReactNode
  children: React.ReactNode
  steps: ReadonlyArray<StepProgressBarItem>
  cancel: WizardButton
  next: WizardButton
  prev: WizardButton
  additionalButtons?: WizardAdditionalButtons
}>

const trueIfUndefined = (x: boolean | undefined): boolean => (x === undefined ? true : x)

export function Wizard({ title, children, steps, cancel, next, prev, additionalButtons }: Props) {
  return (
    <Dialog
      size="w100ph100p"
      onClose={cancel.onClick}
      header={<DialogHeader onClose={cancel.onClick} title={title} />}
      content={
        <DialogBody>
          <StepProgressBar steps={steps} stepClassName="bg-gray-100" />
          <hr className="my-4" />
          <div>{children}</div>
        </DialogBody>
      }
      footer={
        <DialogFooter>
          <div>
            {additionalButtons &&
              additionalButtons.map(({ label, variant, disabled, outline, onClick }, id) => (
                <Button
                  key={id}
                  outline={trueIfUndefined(outline)}
                  onClick={onClick}
                  disabled={disabled}
                  variant={variant || 'secondary'}
                  className="mr-3"
                  label={label}
                />
              ))}
          </div>
          <div className="ml-auto">
            <Button
              outline={trueIfUndefined(cancel.outline)}
              onClick={cancel.onClick}
              disabled={cancel.disabled}
              variant="secondary"
              className="mr-5"
              label={cancel.label || <FormattedMessage {...m.cancel} />}
            />
            <Button
              outline={trueIfUndefined(prev.outline)}
              onClick={prev.onClick}
              variant="secondary"
              className="mr-3"
              label={prev.label || <FormattedMessage {...m.back} />}
              disabled={prev.disabled}
            />
            <Button
              outline={trueIfUndefined(next.outline)}
              onClick={next.onClick}
              variant={next.variant || 'secondary'}
              label={next.label || <FormattedMessage {...m.next} />}
              disabled={next.disabled}
            />
          </div>
        </DialogFooter>
      }
    />
  )
}
