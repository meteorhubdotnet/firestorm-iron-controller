Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-controller',
  summary: 'Fork of iron:controller for Firestorm',
  version: '1.0.15',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-controller'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.11.0');

  api.use('underscore');
  api.use('tracker'); // reactivity
  api.use('reactive-dict'); // reactive state variables
  api.use('templating@1.4.2');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.15');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.15');

  api.use('meteorhubdotnet:firestorm-iron-layout@1.0.15');
  api.use('meteorhubdotnet:firestorm-iron-dynamic-template@1.0.15');

  api.addFiles('lib/wait_list.js', 'client');
  api.addFiles('lib/controller.js');
  api.addFiles('lib/controller_server.js', 'server');
  api.addFiles('lib/controller_client.js', 'client');
});

