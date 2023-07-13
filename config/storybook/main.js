// eslint-disable-next-line no-undef
module.exports = {
  stories: ['../../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport/register',
  ],
  core: {
    builder: 'webpack5',
  },
}
