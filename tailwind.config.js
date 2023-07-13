// eslint-disable-next-line
const plugin = require('tailwindcss/plugin')
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.ejs', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
        // => @media print { ... }
      },
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      1000: 1000,
      10000: 10000,
      auto: 'auto',
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
    plugin(({ addComponents, theme }) => {
      const tableCellPadding = '0.5rem'

      const table = {
        '.lw-selected-table-row': {
          borderLeftColor: `${theme('colors.indigo.500')} !important`,
          borderLeftWidth: '3px',
        },
        '.lw-table > thead > tr > th': {
          fontWeight: theme('fontWeight.medium'),
          padding: tableCellPadding,
        },
        '.lw-table > tbody > tr > td': {
          padding: tableCellPadding,
        },
      }

      addComponents(table)
    }),
  ],
}
