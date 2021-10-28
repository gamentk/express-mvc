"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connection = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connection = _mysql["default"].createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'medcare_db'
});

exports.connection = connection;