import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Form } from 'react-final-form'
import host from 'storybook-host'
import { themeDecorator, setIntlDecorator } from 'utils/storybook'
import { DateField } from './DateTimeField'

storiesOf('common/Form/DateField', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({ width: 400 }))
  .add('default', () => (
    <Form
      onSubmit={action('on form submit')}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <DateField name="some" label="Some label" />
        </form>
      )}
    />
  ))
  .add('placeholder', () => (
    <Form
      onSubmit={action('on form submit')}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <DateField name="some" label="Some label" placeholder="Select date" />
        </form>
      )}
    />
  ))
  .add('required', () => (
    <Form
      onSubmit={action('on form submit')}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <DateField name="some" label="Some label" required />
        </form>
      )}
    />
  ))
  .add('disabled', () => (
    <Form
      onSubmit={action('on form submit')}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <DateField name="some" label="Some label" disabled />
        </form>
      )}
    />
  ))
  .add('preselected value ISO8061', () => (
    <Form
      onSubmit={action('on form submit')}
      initialValues={{ some: '2001-11-29T17:33Z' }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <DateField name="some" label="Some label" />
        </form>
      )}
    />
  ))
  .add('error', () => (
    <Form
      onSubmit={action('on form submit')}
      validate={() => ({ some: 'some error' })}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <DateField name="some" label="Some label" />
          <button type="submit">Press me to see error</button>
        </form>
      )}
    />
  ))
