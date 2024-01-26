const redis = require("redis");


const client = redis.createClient({
    password: "CrEuLEmpBYgTEfhWeRSn6RngoyFSFV1X",
    socket: {
        host: 'redis-18718.c292.ap-southeast-1-1.ec2.cloud.redislabs.com',
        port: 18718
    }
});
client.on("error", (error) => {
    console.log(error)
});

client.connect();

module.exports = client;