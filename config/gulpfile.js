// FIXME
/* eslint-disable */
const gulp = require('gulp')
const ts = require('gulp-typescript')
const babel = require('gulp-babel')
const manageTranslations = require('react-intl-translations-manager').default
const { header, subheader, footer } = require('react-intl-translations-manager/dist/printer')
const { yellow, red, green } = require('chalk')
const printResults = require('react-intl-translations-manager/dist/printResults').default
const rimraf = require('rimraf')
const { resolve } = require('path')

const PATH = {
  nodeModules: resolve(__dirname, '..', 'node_modules'),
  src: resolve(__dirname, '..', 'src'),
  base: resolve(__dirname, '..', ''),
}

const tsProject = ts.createProject(`${PATH.base}/tsconfig.json`, {
  jsx: 'preserve',
  module: 'es2015',
  noEmit: false,
  typeRoots: [`${PATH.nodeModules}/@types`],
})

// TODO: use temp dir
const messagesDirectory = `${PATH.base}/dist/translations/extracted`
const translationsDirectory = `${PATH.src}/assets/locales/`

gulp.task('intl:extract', () => {
  rimraf.sync(messagesDirectory)
  return (
    tsProject
      .src()
      .pipe(tsProject())
      // To prevent crashing the build, even outside of watch mode
      .on('error', () => {})
      .js.pipe(
        babel({
          presets: [['@babel/env', { targets: { chrome: 60 }, modules: false }], '@babel/react'],
          // presets: [['@babel/env', { targets: { chrome: 60 }, modules: false }]],
          plugins: [
            [
              'react-intl',
              {
                messagesDir: messagesDirectory,
                // For custom function
                // moduleSourceName: '../utils',
              },
            ],
          ],
        }),
      )
  )
})

gulp.task('intl:manage', (cb) => {
  let exitCode = 0
  manageTranslations({
    messagesDirectory,
    translationsDirectory,
    languages: ['bg'], // don't include the default 'en' language
    overridePrinters: {
      printDuplicateIds: (duplicateIds) => {
        header('Duplicate ids:')
        if (duplicateIds.length) {
          exitCode = 1
          duplicateIds.forEach((id) => {
            console.log('  ', `Duplicate message id: ${red(id)}`)
          })
        } else {
          console.log(green('  No duplicate ids found, great!'))
        }
        footer()
      },

      printLanguageReport: (langResults) => {
        const { untranslated, added } = langResults.report
        if (untranslated.length > 0 || added.length > 0) {
          exitCode = 1
        }
        header(`Maintaining ${yellow(langResults.languageFilename)}:`)
        printResults(Object.assign({}, langResults.report, { sortKeys: true }))
      },

      printNoLanguageFile: (langResults) => {
        exitCode = 1
        subheader(`
          No existing ${langResults.languageFilename} translation file found.
          A new one is created.
          Please translate!
        `)
      },

      printNoLanguageWhitelistFile: (langResults) => {
        subheader(`
          No existing ${langResults} file found.
          A new one is created.
        `)
      },
    },
  })

  cb()
  process.exit(exitCode)
})
