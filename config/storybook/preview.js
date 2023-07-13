/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * ES6 imports are not used because of sotryshots tests and jest not being able to load them.
 * It might be just a case of not good enough jest configuration.
 */
const { addParameters } = require('@storybook/react')
const { create } = require('@storybook/theming/create')
require('loki/configure-react')

addParameters({
  options: {
    // showRoots: true,
    theme: create({
      base: 'light',
      brandTitle: 'LIMS NOW',
      brandUrl: '#',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
  },
})
