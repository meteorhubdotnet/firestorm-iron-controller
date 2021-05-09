Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-controller',
  summary: 'Fork of iron:controller for Firestorm',
  version: '1.0.0',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-controller'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@2.2');

  api.use('underscore');
  api.use('tracker'); // reactivity
  api.use('reactive-dict'); // reactive state variables
  api.use('templating');

  api.use('meteorhubdotnet:firestorm-iron-core');
  api.imply('meteorhubdotnet:firestorm-iron-core');

  api.use('meteorhubdotnet:firestorm-iron-layout');
  api.use('meteorhubdotnet:firestorm-iron-dynamic-template');

  api.add_files('lib/wait_list.js', 'client');
  api.add_files('lib/controller.js');
  api.add_files('lib/controller_server.js', 'server');
  api.add_files('lib/controller_client.js', 'client');
});

Package.on_test(function (api) {
  api.use('meteorhubdotnet:firestorm-iron-controller');
  api.use('meteorhubdotnet:firestorm-iron-layout');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('tracker');
  api.use('templating');

  api.add_files('test/controller_test.html', 'client');
  api.add_files('test/wait_list_test.js', 'client');
  api.add_files('test/controller_test.js', 'client');
});
