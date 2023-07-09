const { Connnection } = require('../index');
const  KEYS  = require('../../_config/keys'); 
const RequestLogsService = require('../../app/modules/requestLogger/services/requestLogs.services');

const RequestLoggerConsumer = new Connnection(KEYS.AMQP_URI, KEYS.REQUEST_LOGGER_QUEUE,
  async (msg) => {
    const channel = await RequestLoggerConsumer.getChannel();
    if (msg !== null) {
      const message = msg.content.toString();
      console.info(` [x] Consumed : ${message}`);

      const {
        bodyData
      } = JSON.parse(message);

      try {
    //    save logs
    const userRequestLogs = await new RequestLogsService().createRecord(bodyData);
        return channel.ack(msg);
      } catch (error) {
        console.error(`Error while saving request logs: ${error}`);
        return channel.ack(msg);
      }
    }
    process.on('exit', (code) => {
      channel.close();
      console.log(`Closing ${channel} channel`);
   });
    return null;
  });

  module.exports = RequestLoggerConsumer;
