const {Queue} = require('bullmq')

const notificationQueue = new Queue('email-queue', {
    connection: {
        host: '127.0.0.1',
        port: '6379'
    }
});

async function init() {
    const res = await notificationQueue.add('email to shivam', { email: 'shivamkumar7965@gmail.com', 
        subject: "Welcome Mess",
        body: "Hey Shivam, Welcome",
    });
    console.log("Job added to queue",res.id);
}
init();