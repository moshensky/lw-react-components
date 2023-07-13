import { Button } from 'components'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { m } from './error-boundary-messages'
import { appRoute } from 'appRoutes'

type Props = Readonly<{
  children: React.ReactNode
  defaultHasError?: boolean
}>

type State = Readonly<{
  hasError: boolean
}>

export class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: this.props.defaultHasError ? this.props.defaultHasError : false,
  }

  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true })
    // You can also log the error to an error reporting service
    // TODO:!!!!
    // logErrorToMyService(error, info)
    console.info('ERROR', error, info)
  }

  render() {
    const { children } = this.props

    return this.state.hasError ? (
      <div className="container text-center">
        <h1 className="text-3xl mt-5">
          <FormattedMessage {...m.somethingWentWrong} />
        </h1>
        <div className="mt-5">
          <Button
            className="text-uppercase"
            variant="primary"
            label={<FormattedMessage {...m.pleasePressToReload} />}
            onClick={() => {
              localStorage.clear()
              location.replace(appRoute.login)
            }}
          />
        </div>
      </div>
    ) : (
      children
    )
  }
}
