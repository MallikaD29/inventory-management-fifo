const kafka = require("./client");

const producer = kafka.producer();

let connected = false;

const connectProducer = async () => {
  await producer.connect();
  connected = true;
  console.log("✅ Kafka Producer Connected");
};

const publishEvent = async (topic, message) => {
  if (!connected) {
    console.log("⚠ Kafka disabled. Skipping event.");
    return;
  }

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
