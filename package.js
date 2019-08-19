Package.describe({
  name: 'leaonline:oauth-lea-config-ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(api => {
  api.use('ecmascript', 'client');
  api.use('templating', 'client');

  api.addFiles(
    ['lea_configure.html', 'lea_configure.js'],
    'client');
});