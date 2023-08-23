if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js', { scope: '.' })
            .then(function () {
                return navigator.serviceWorker.ready;
            })
            .then(function (registration) {
                return registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: 'BJWOr0bLzHMagR5J1VR1oJlebCrmLeJB9GEM_dGoMFNyd0DInTU1SQfF4mmPTX8N_NyGfQNPEQRAm362-9PPpKg'
                });
            })
            .then((subscription) => {
                // fetch('/api/pushEndpoint', {
                //     method: 'POST',
                //     headers: {
                //         Accept: 'application/json',
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({ endpoint: subscription.endpoint })
                // }).catch(console.error);
                console.log('WebPush Subscribed: ' + subscription.endpoint);
            })
            .catch(function (error) {
                if (error.name === 'NotAllowedError') {
                    // User denied push notification permission
                    console.warn('Push notification permission denied by user.');
                } else {
                    console.error('Service Worker registration failed:', error);
                }
            });

        // navigator.serviceWorker.addEventListener('message', function (event) {
        //     console.log(event.data.message);
        // });
    });
}
