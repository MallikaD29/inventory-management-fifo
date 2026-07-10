require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

const { connectProducer } = require("./kafka/producer");
const { startConsumer } = require("./kafka/consumer");

(async () => {
    try {

        await connectProducer();

        await startConsumer();

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });

    } catch (err) {
        console.error("Startup Error:", err);
    }
})();