window.cronitor = window.cronitor || function() { (window.cronitor.q = window.cronitor.q || []).push(arguments); };
cronitor('config', { clientKey: '6a88f88b1c577341fca211e79dd01e49' });

function redirectTo(channel) {
  window.location.href = `https://nichotv.pages.dev/ver/${channel}/`;
}

function openMovistar() {
  window.open("https://www.directv.com.ar/guia/guia.aspx");
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('Service Worker registrado con éxito con el alcance: ', registration.scope);
    }, function(err) {
      console.log('El registro del Service Worker falló: ', err);
    });
  });
}
