"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.router"));

var _prefix = _interopRequireDefault(require("./routes/prefix.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000;
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
/* Routes */

app.use('/api/v1', _index["default"]);
app.use('/api/v1/prefix', _prefix["default"]);
app.listen(PORT, function () {
  console.log("Server start on port ".concat(PORT, "."));
});