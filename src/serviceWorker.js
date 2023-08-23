self.addEventListener('push', function (event) {
    if (event && event.data) {
        const pushData = event.data.json();
        console.log(pushData);
        if (pushData) {
            event.waitUntil(
                self.registration.showNotification(pushData.title, {
                    body: pushData.body,
                    icon: pushData.data ? pushData.data.icon : null
                })
            );
        }
    }
});
