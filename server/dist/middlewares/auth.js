'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret = _config2.default.JWT_SECRET;

/**
  * @returns {Object} recipes
  * @param {*} req
  * @param {*} res
  */
var verifyToken = function verifyToken(req, res, next) {
  var token = req.headers.auth || req.headers['x-access-token'] || req.body.token;
  if (token) {
    _jsonwebtoken2.default.verify(token, secret, function (err, decoded) {
      if (err) {
        return res.status(400).send({ error: 'Invalid token' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({ error: 'Access Denied! Login required' });
  }
};
exports.default = verifyToken;