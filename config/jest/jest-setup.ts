jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl')
  const intl = reactIntl.createIntl({
    locale: 'en',
  })

  return {
    ...reactIntl,
    useIntl: () => intl,
  }
})

// https://github.com/facebook/jest/issues/3251
if (!process.env.LISTENING_TO_UNHANDLED_REJECTION) {
  process.on('unhandledRejection', (reason) => {
    // fail fast
    throw reason
  })

  // Avoid memory leak by adding too many listeners
  process.env.LISTENING_TO_UNHANDLED_REJECTION = 'true'
}
