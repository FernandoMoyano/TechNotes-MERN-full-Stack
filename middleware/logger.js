const { format } = require("data-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const { log } = require("console");

const logEvents = async (message, logFileName) => {
  //fecha hora -minutos-segundos
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  //nueva linea para cada elemento de registro
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "'..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logFileName),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log");
  console.log(`${req.method}${req.path}`);
  next();
};

module.exports(logEvents, logger);
