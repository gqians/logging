"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "dealLog", {
  enumerable: true,
  get: function () {
    return _loggerMemory.dealLog;
  }
});
exports.loggerPlugin = void 0;

var _loggerMemory = require("./logger/loggerMemory");

const loggerPlugin = {
  name: 'logger',
  version: '1.0.0',
  register: async function (server, options) {
    const ServerProto = Object.getPrototypeOf(server);
    const log = (0, _loggerMemory.dealLog)(options);
    Object.defineProperty(ServerProto, 'log', {
      get() {
        return log;
      }

    });
    server.log.debug({
      path: 'logger/index.js'
    }, '插件logger启动');
  }
};
exports.loggerPlugin = loggerPlugin;