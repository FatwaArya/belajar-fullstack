const { connect } = require("amqplib/callback_api");

const config = {
  url: "amqp://guest:guest@localhost:5672",
  exchangeName: "order",
};

const produceQueue = (queueName, data, cb) => {
  connect(config.url, (err, conn) => {
    conn.createChannel((err, ch) => {
      ch.assertQueue(queueName, { durable: true });
      ch.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
      cb();
    });
  });
};

const consumeQueue = (queueName, cb) => {
  connect(config.url, (err, conn) => {
    conn.createChannel((err, ch) => {
      ch.assertQueue(queueName, { durable: true });
      ch.consume(queueName, (msg) => {
        cb(ch, msg);
      });
    });
  });
};

module.exports = {
  produceQueue,
  consumeQueue,
};
