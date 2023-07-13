import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { ErrorBoundary } from './ErrorBoundary'

storiesOf('custom/ErrorBoundary', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({}))
  .add('no error', () => (
    <ErrorBoundary>
      <div>children content</div>
    </ErrorBoundary>
  ))
  .add('error', () => <ErrorBoundary defaultHasError>children content</ErrorBoundary>)
