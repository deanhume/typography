(global => {
  'use strict';

  // Load the sw-toolbox library.
  importScripts('bower_components/sw-toolbox/sw-toolbox.js');

  // Turn on debug logging, visible in the Developer Tools' console.
  global.toolbox.options.debug = true;

  // The route for any requests from the googleapis origin
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'googleapis',
      maxEntries: 10,
      maxAgeSeconds: 604800
    },
    origin: /\.googleapis\.com$/,
    // Set a timeout threshold of 2 seconds
    networkTimeoutSeconds: 4
  });

  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'fonts',
      maxEntries: 10,
      maxAgeSeconds: 604800
    },
    origin: /\.fonts.gstatic\.com$/,
    // Set a timeout threshold of 2 seconds
    networkTimeoutSeconds: 4
  });

  // The route for any requests from the googleapis origin
  toolbox.router.get('/stylesheets/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'stylesheets',
      maxEntries: 10,
      maxAgeSeconds: 604800
    },
    // Set a timeout threshold of 2 seconds
    networkTimeoutSeconds: 4
  });

  // Ensure that our service worker takes control of the page as soon as possible.
  global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));
})(self);



// The handler for push events
self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  var title = 'Notification';
  var body = 'There is newly updated content available on the site. Click to see more.';
  var icon = 'https://raw.githubusercontent.com/deanhume/typography/gh-pages/icons/typography.png';
  var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
       body: body,
       icon: icon,
       tag: tag
     })
   );
});

// The click handler for notifications
self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  // Android doesn't close the notification when you click on it
  // See: http://crbug.com/463146
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients.matchAll({
      type: "window"
    })
    .then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url == '/' && 'focus' in client)
          return client.focus();
      }
      if (clients.openWindow) {
        return clients.openWindow('https://deanhume.github.io/typography');
      }
    })
  );
});
