const { format } = require("data-fns");
const { v4: uuid } = require("uuid");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message, logFileName) => {
  //fecha hora -minutos-segundos
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  //nueva linea para cada elemento de registro
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
};
