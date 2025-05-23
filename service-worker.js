self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
  });
  
  self.addEventListener('fetch', (event) => {
  });

  // just registering a sw so it can be recognised as an actual web app not just a shortcut
  