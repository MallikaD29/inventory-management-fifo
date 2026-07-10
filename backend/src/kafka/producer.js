const kafka = require("./client");

const producer = kafka.producer();

const connectProducer = async () => {
    await producer.connect();
    console.log("✅ Kafka Producer Connected");
};

const publishEvent = async (topic, message) => {
    await producer.send({
        topic,
        messages: [
            {
                value: JSON.stringify(message),
            },
        ],
    });
};

module.exports = {
    connectProducer,
    publishEvent,
};