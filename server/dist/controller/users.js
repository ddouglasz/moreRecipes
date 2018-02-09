'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv2.default.config();

var secretKey = process.env.SECRET_KEY;

var saltRounds = 10;
var usersModel = _index2.default.users;
var FavoritesModel = _index2.default.favorites;
var password = '';
/**
 * @class User
 */

var User = function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: 'signUp',

    /**
     * @returns {Object} signUp
     * @param {param} req
     * @param {param} res
     */
    value: function signUp(req, res) {
      usersModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        hashPassword: _bcrypt2.default.hashSync(req.body.password, saltRounds)
      }).then(res.status(201).send('successful')).catch(function (error) {
        return res.status(400).send(error);
      });
    }
    /**
     * @returns {Object} signIn
     * @param {param} req
     * @param {param} res
     */

  }, {
    key: 'signIn',
    value: function signIn(req, res) {
      if (!req.body.email) {
        res.status(400).send('Email is required');
      }
      if (!req.body.password) {
        res.status(400).send('Password is required');
      }
      usersModel.findOne({
        where: {
          email: req.body.email
        }
      }).then(function (user) {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found'
          });
        }
        password = _bcrypt2.default.compareSync(req.body.password, user.hashPassword);
        if (password) {
          res.json({
            jwt: _jsonwebtoken2.default.sign({
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            }, secretKey, { expiresIn: 60 * 60 })
          });
        } else {
          res.status(401).send('Invalid Password');
        }
      }).catch(function (error) {
        return res.status(401).send(error);
      });
    }
    /**
     * @returns {Object} getFavorites
     * @param {req} req
     * @param {res} res
     */

  }, {
    key: 'getFavorites',
    value: function getFavorites(req, res) {
      FavoritesModel.findAll({
        where: {
          userId: req.params.userId
        }
      }).then(function (favorites) {
        if (favorites.length < 1) {
          return res.status(404).send({
            message: 'No Favorite recipes found'
          });
        }
        console.log(req.decoded.id);
        console.log(req.params.userId);
        if (req.decoded.id !== parseFloat(req.params.userId)) {
          return res.status(403).send({
            message: 'You are not authorised to view other users favorites'
          });
        }
        return res.status(200).send(favorites);
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }
  }]);

  return User;
}();

exports.default = User;