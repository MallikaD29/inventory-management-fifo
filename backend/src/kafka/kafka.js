const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    clientId: "inventory-app",
    brokers: ["localhost:9092"]
});


module.exports = kafka;