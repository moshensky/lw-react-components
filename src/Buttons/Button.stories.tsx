import { mdiContentSaveOutline, mdiPlusThick, mdiTrashCanOutline } from '@mdi/js'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { Button, Variant } from './Button'

const variants: Variant[] = ['primary', 'secondary', 'success', 'danger', 'warning']
const mkButtons = (outline?: boolean) =>
  variants.map((x) => (
    <Button
      className="mr-1"
      key={`${x}${outline ? 'outline' : ''}`}
      outline={outline}
      variant={x}
      icon={mdiPlusThick}
      title={x}
      label={x}
      onClick={action('onClick')}
    />
  ))

storiesOf('common/Buttons/Button', module)
  .addDecorator(host({}))
  .add('all (m)', () => (
    <>
      {mkButtons()}
      <br />
      <div className="mt-1">{mkButtons(true)}</div>
      <br />
      <Button
        outline
        variant="primary"
        icon={mdiContentSaveOutline}
        title="just icon"
        onClick={action('onClick')}
      />
    </>
  ))
  .add('delete button', () => (
    <Button
      outline
      variant="danger"
      icon={mdiTrashCanOutline}
      title={'delete'}
      onClick={action('on delete')}
    />
  ))
  .add('delete button with label', () => (
    <Button
      outline
      label="delete"
      variant="danger"
      icon={mdiTrashCanOutline}
      title={'delete'}
      onClick={action('on delete')}
    />
  ))
  .add('add', () => (
    <Button
      className="ml-3"
      onClick={action('onClick')}
      variant="success"
      label="Add"
      icon={mdiPlusThick}
    />
  ))
