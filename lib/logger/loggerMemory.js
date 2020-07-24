"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dealLog = void 0;

var _bunyan = _interopRequireDefault(require("bunyan"));

var _loggerConsole = _interopRequireDefault(require("./loggerConsole"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeLogger = options => {
  return _bunyan.default.createLogger({
    name: options.logger.name,
    time: new Date().toLocaleString(),
    serializers: {
      req: _bunyan.default.stdSerializers.req,
      res: _bunyan.default.stdSerializers.res,
      err: _bunyan.default.stdSerializers.err
    },
    streams: [{
      // stream: process.stdout
      type: 'rotating-file',
      level: 'info',
      path: options.logger.pathInfo,
      period: options.logger.period,
      // daily rotation
      count: options.logger.count // keep 7 back copies

    }, {
      type: 'rotating-file',
      level: 'error',
      path: options.logger.pathError,
      period: options.logger.period,
      // daily rotation
      count: options.logger.count // keep 7 back copies

    }]
  });
};

const dealLog = (config = _config.default) => {
  const logger = makeLogger(config);
  return {
    debug: (infoObj, msg) => {
      _loggerConsole.default.debug(msg, infoObj);
    },
    error: (infoObj, msg) => {
      logger.error(infoObj, msg);

      _loggerConsole.default.error(msg, infoObj);
    },
    info: (infoObj, msg) => {
      logger.info(infoObj, msg);

      _loggerConsole.default.info(msg, infoObj);
    }
  };
};

exports.dealLog = dealLog;