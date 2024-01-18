import mqtt from 'mqtt';

export const home = (req, res) => {
    res.render('home');
};

export const on = async (req, res) => {
    const client = await mqtt.connect('mqtt://localhost')
    await client.on('connect',() => {
        client.publish('thai','on')
        client.end()
    })
    res.json({ message: 'On Success' });
};

export const off = async(req, res) => {
    const client = await mqtt.connect('mqtt://localhost')
    await client.on('connect',() => {
        client.publish('thai','off')
        client.end()
    })
    
    res.json({ message: 'Off Success' });
};
