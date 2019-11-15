/* eslint-env meteor */
Package.describe({
  name: 'leaonline:oauth-lea-config-ui',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Configuration package for lea oauth and accounts-ui',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:leaonline/meteor-accounts-oauth-lea-config-ui.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(api => {
  api.use('ecmascript@0.12.7', 'client')
  api.use('templating@1.3.2', 'client')

  api.addFiles(
    ['lea_configure.html', 'lea_configure.js'],
    'client')
})
