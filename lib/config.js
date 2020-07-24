"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  logger: {
    name: 'automan',
    pathInfo: _path.default.join(process.cwd(), './loggers/info.log'),
    pathError: _path.default.join(process.cwd(), './loggers/error.log'),
    period: '1d',
    count: 7
  }
};
exports.default = _default;