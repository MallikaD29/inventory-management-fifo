const kafka = require("./client");
const { INVENTORY_EVENTS } = require("./topics");

const consumer = kafka.consumer({
    groupId: "inventory-group",
});

const startConsumer = async () => {

    await consumer.connect();

    await consumer.subscribe({
        topic: INVENTORY_EVENTS,
        fromBeginning: true,
    });

    console.log("✅ Kafka Consumer Connected");

    await consumer.run({
        eachMessage: async ({ message }) => {

            const event = JSON.parse(message.value.toString());

            console.log("📩 Event Received");

            console.log(event);

        },
    });

};

module.exports = {
    startConsumer,
};