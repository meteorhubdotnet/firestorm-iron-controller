Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-controller',
  summary: 'Fork of iron:controller for Firestorm',
  version: '1.0.10',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-controller'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.7.3');

  api.use('underscore');
  api.use('tracker'); // reactivity
  api.use('reactive-dict'); // reactive state variables
  api.use('templating@1.4.2');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.10');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.10');

  api.use('meteorhubdotnet:firestorm-iron-layout@1.0.10');
  api.use('meteorhubdotnet:firestorm-iron-dynamic-template@1.0.10');

  api.addFiles('lib/wait_list.js', 'client');
  api.addFiles('lib/controller.js');
  api.addFiles('lib/controller_server.js', 'server');
  api.addFiles('lib/controller_client.js', 'client');
});

Package.onTest(function (api) {
  api.use('meteorhubdotnet:firestorm-iron-controller@1.0.10');
  api.use('meteorhubdotnet:firestorm-iron-layout@1.0.10');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('tracker');
  api.use('templating@1.4.2');

  api.addFiles('test/controller_test.html', 'client');
  api.addFiles('test/wait_list_test.js', 'client');
  api.addFiles('test/controller_test.js', 'client');
});
