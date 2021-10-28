"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = require("../db.config");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Prefix = /*#__PURE__*/function () {
  function Prefix() {
    _classCallCheck(this, Prefix);

    _defineProperty(this, "prf_id", void 0);

    _defineProperty(this, "prf_name", void 0);
  }

  _createClass(Prefix, [{
    key: "getData",
    value: function getData(cb) {
      _db.connection.query('SELECT * FROM tbl_prefix_names', function (error, results) {
        if (error) cb(true, error);
        cb(false, results);
      });
    }
  }]);

  return Prefix;
}();

var _default = Prefix;
exports["default"] = _default;