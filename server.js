const mongoose = require("mongoose");
const app = require("./src");
const KEYS = require("./src/_config/keys");
const logger  = require('./logger.conf');


mongoose.set('strictQuery', true);
mongoose
  .connect(KEYS.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    logger.info(`RequestLogger Service Database Connected......`)
    const PORT = process.env.PORT || 2106;
    const server = app.listen(PORT, () => {
      
      logger.info(`Request Logger Service Server has started!... and running on port ${PORT}`);
      
    });
  }).catch(error => console.log(error));