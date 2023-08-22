import express from 'express';
import webpush from 'web-push';

const PORT = 8080;

const privateKey = process.env.PUSH_KEY;
const publicKey = 'BJWOr0bLzHMagR5J1VR1oJlebCrmLeJB9GEM_dGoMFNyd0DInTU1SQfF4mmPTX8N_NyGfQNPEQRAm362-9PPpKg';

webpush.setVapidDetails('https://kuchengames.de/', publicKey, privateKey);

const endpoints = new Map();

const app = express();

app.use(express.json());

app.post('/api/pushEndpoint', async (req, res) => {
    let { endpoint } = req.body;
    // console.log('Registering: ', req.body);
    if (!endpoint) return res.status(404).json({ message: 'invalid' });
    if (!endpoint.includes('updates.push.services.mozilla.com')) return res.status(404).json({ message: 'invalid endpoint' });
    if (endpoints.has(endpoint)) {
        console.log('Already Registered: ', endpoint);
        return res.status(200).json({ message: 'ok' });
    }
    console.log('Registered: ', endpoint);
    endpoints.set(endpoint, {
        endpoint,
        keys: {
            auth: privateKey,
            p256dh: publicKey
        }
    });
    res.status(200).json({ message: 'ok' });
});

app.use('/', express.static('dist'));

app.listen(PORT, () => console.log('Server running on port:', PORT));

var i = 1;

const push = () => {
    const payload = {
        title: 'New Notification',
        body: 'You have a new message! ' + i
    };

    console.warn('Sending: ', payload);

    endpoints.forEach((e, key) => {
        webpush
            .sendNotification(e, JSON.stringify(payload))
            .then(console.log)
            .catch(() => {
                endpoints.delete(key);
                console.warn('Removed: ', e);
            });
    });

    i++;
};
setInterval(push, 30000);
