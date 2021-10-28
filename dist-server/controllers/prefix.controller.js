"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrefix = getPrefix;

var _prefix = _interopRequireDefault(require("../models/prefix.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getPrefix(req, res) {
  var prefix = new _prefix["default"]();
  prefix.getData(function (isError, results) {
    if (isError) throw results;
    res.status(200).json(results);
  });
}