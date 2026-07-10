require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

const { connectProducer } = require("./kafka/producer");
const { startConsumer } = require("./kafka/consumer");

(async () => {
    try {

        if (process.env.ENABLE_KAFKA === "true") {

            await connectProducer();
            await startConsumer();

            console.log("✅ Kafka Enabled");

        } else {

            console.log("⚠️ Kafka Disabled");

        }

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });

    } catch (err) {
        console.error("Startup Error:", err);
    }
})();