(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/graphql.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/launches.js":
/*!*****************************!*\
  !*** ./src/api/launches.js ***!
  \*****************************/
/*! exports provided: getAllLaunches, getLaunch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLaunches", function() { return getAllLaunches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLaunch", function() { return getLaunch; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/constants */ "./src/libs/constants.js");


const API_URL = process.env.spacexApiUrl;
async function getAllLaunches() {
  const url = `${API_URL}/${_libs_constants__WEBPACK_IMPORTED_MODULE_1__["LAUNCHES"]}`;

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
    return response.data.map(launch => launchReducer(launch));
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}
async function getLaunch({
  id
}) {
  const url = `${API_URL}/${_libs_constants__WEBPACK_IMPORTED_MODULE_1__["LAUNCHES"]}/${id}`;

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
    return launchReducer(response.data);
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

function launchReducer(launch) {
  return {
    id: launch.flight_number,
    mission: launch.mission_name,
    year: launch.launch_year,
    date: launch.launch_date_local,
    success: launch.launch_success,
    rocket: {
      id: launch.rocket.rocket_id,
      name: launch.rocket.rocket_name,
      type: launch.rocket.rocket_type
    }
  };
}

/***/ }),

/***/ "./src/api/rockets.js":
/*!****************************!*\
  !*** ./src/api/rockets.js ***!
  \****************************/
/*! exports provided: getAllRockets, getRocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRockets", function() { return getAllRockets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRocket", function() { return getRocket; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/constants */ "./src/libs/constants.js");


const API_URL = process.env.spacexApiUrl;
async function getAllRockets() {
  const url = `${API_URL}/${_libs_constants__WEBPACK_IMPORTED_MODULE_1__["ROCKETS"]}`;

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
    return response.data.map(rocket => rocketReducer(rocket));
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}
async function getRocket({
  id
}) {
  const url = `${API_URL}/${_libs_constants__WEBPACK_IMPORTED_MODULE_1__["ROCKETS"]}/${id}`;

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
    return rocketReducer(response.data);
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

function rocketReducer(rocket) {
  return {
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    type: rocket.rocket_type
  };
}

/***/ }),

/***/ "./src/graphql.js":
/*!************************!*\
  !*** ./src/graphql.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/schema */ "./src/types/schema/index.js");
/* harmony import */ var _types_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/resolvers */ "./src/types/resolvers/index.js");
/* harmony import */ var _types_resolvers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types_resolvers__WEBPACK_IMPORTED_MODULE_2__);



const server = new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  debug: false,
  typeDefs: (_types_schema__WEBPACK_IMPORTED_MODULE_1___default()),
  resolvers: (_types_resolvers__WEBPACK_IMPORTED_MODULE_2___default())
});
const main = server.createHandler();

exports.main = (event, context, callback) => {
  function callbackFilter(error, output) {
    output.headers["Access-Control-Allow-Origin"] = "*";
    callback(error, output);
  }

  main(event, context, callbackFilter);
};

/***/ }),

/***/ "./src/libs/constants.js":
/*!*******************************!*\
  !*** ./src/libs/constants.js ***!
  \*******************************/
/*! exports provided: LAUNCHES, ROCKETS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAUNCHES", function() { return LAUNCHES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROCKETS", function() { return ROCKETS; });
const LAUNCHES = "launches";
const ROCKETS = "rockets";

/***/ }),

/***/ "./src/libs/dynamodb.js":
/*!******************************!*\
  !*** ./src/libs/dynamodb.js ***!
  \******************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);

aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.config.update({
  region: process.env.awsRegion
});
const call = (action, params) => {
  if (process.env.IS_OFFLINE === "true") {
    const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8080"
    });
    return dynamoDb[action](params).promise();
  } else {
    const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.DynamoDB.DocumentClient();
    return dynamoDb[action](params).promise();
  }
};

/***/ }),

/***/ "./src/repositories/followers/followers.js":
/*!*************************************************!*\
  !*** ./src/repositories/followers/followers.js ***!
  \*************************************************/
/*! exports provided: getFollowing, getFollowers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowing", function() { return getFollowing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowers", function() { return getFollowers; });
/* harmony import */ var _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/dynamodb */ "./src/libs/dynamodb.js");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__);


const followersTable = process.env.followersTable;
async function getFollowing(id) {
  const params = {
    TableName: followersTable,
    IndexName: "followingIndex",
    KeyConditionExpression: "following = :following",
    ExpressionAttributeValues: {
      ":following": id
    }
  };

  try {
    const result = await _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__["call"]("query", params);
    return result.Items;
  } catch (e) {
    console.log(e);
    return new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["ApolloError"](e, 500);
  }
}
async function getFollowers(id) {
  const params = {
    TableName: followersTable,
    IndexName: "followerIndex",
    ExpressionAttributeValues: {
      ":follower": id
    },
    KeyConditionExpression: "follower = :follower"
  };

  try {
    const result = await _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__["call"]("query", params);
    return result.Items;
  } catch (e) {
    console.log(e);
    return new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["ApolloError"](e, 500);
  }
}

/***/ }),

/***/ "./src/repositories/users/createUser.js":
/*!**********************************************!*\
  !*** ./src/repositories/users/createUser.js ***!
  \**********************************************/
/*! exports provided: createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony import */ var _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/dynamodb */ "./src/libs/dynamodb.js");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__);


const usersTable = process.env.usersTable;
async function createUser(data) {
  const params = {
    TableName: usersTable,
    Item: data,
    ConditionExpression: "attribute_not_exists(externalId)"
  };

  try {
    await _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__["call"]("put", params);
    return data;
  } catch (e) {
    console.log(e);
    return new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["ApolloError"](e, 500);
  }
}

/***/ }),

/***/ "./src/repositories/users/getAllUsers.js":
/*!***********************************************!*\
  !*** ./src/repositories/users/getAllUsers.js ***!
  \***********************************************/
/*! exports provided: getAllUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony import */ var _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/dynamodb */ "./src/libs/dynamodb.js");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__);


const usersTable = process.env.usersTable;
async function getAllUsers() {
  const params = {
    TableName: usersTable,
    ScanIndexForward: false
  };

  try {
    const results = await _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__["call"]("scan", params);
    return results.Items;
  } catch (e) {
    console.log(e);
    return new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["ApolloError"](e, 500);
  }
}

/***/ }),

/***/ "./src/repositories/users/getUser.js":
/*!*******************************************!*\
  !*** ./src/repositories/users/getUser.js ***!
  \*******************************************/
/*! exports provided: getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/dynamodb */ "./src/libs/dynamodb.js");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__);


const usersTable = process.env.usersTable;
async function getUser(userId) {
  const params = {
    TableName: usersTable,
    Key: {
      id: userId
    }
  };

  try {
    const result = await _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__["call"]("get", params);
    return result.Item;
  } catch (e) {
    console.log(e);
    return new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__["ApolloError"](e, 500);
  }
}

/***/ }),

/***/ "./src/services/followers/getAllFollowers.js":
/*!***************************************************!*\
  !*** ./src/services/followers/getAllFollowers.js ***!
  \***************************************************/
/*! exports provided: getAllFollowers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllFollowers", function() { return getAllFollowers; });
/* harmony import */ var _repositories_followers_followers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../repositories/followers/followers */ "./src/repositories/followers/followers.js");
/* harmony import */ var _repositories_users_getUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repositories/users/getUser */ "./src/repositories/users/getUser.js");


const repo = { ..._repositories_followers_followers__WEBPACK_IMPORTED_MODULE_0__,
  ..._repositories_users_getUser__WEBPACK_IMPORTED_MODULE_1__
};
const getAllFollowers = async root => {
  const followers = await repo.getFollowers(root.id);
  if (!followers) return;
  const followersList = [];
  followers.map(item => {
    const user = repo.getUser(item.following);
    followersList.push(user);
  });
  return followersList;
};

/***/ }),

/***/ "./src/services/followers/getAllFollowing.js":
/*!***************************************************!*\
  !*** ./src/services/followers/getAllFollowing.js ***!
  \***************************************************/
/*! exports provided: getAllFollowing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllFollowing", function() { return getAllFollowing; });
/* harmony import */ var _repositories_followers_followers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../repositories/followers/followers */ "./src/repositories/followers/followers.js");
/* harmony import */ var _repositories_users_getUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repositories/users/getUser */ "./src/repositories/users/getUser.js");


const repo = { ..._repositories_followers_followers__WEBPACK_IMPORTED_MODULE_0__,
  ..._repositories_users_getUser__WEBPACK_IMPORTED_MODULE_1__
};
const getAllFollowing = async root => {
  const following = await repo.getFollowing(root.id);
  if (!following) return;
  const followingList = [];
  following.map(item => {
    const user = repo.getUser(item.follower);
    followingList.push(user);
  });
  return followingList;
};

/***/ }),

/***/ "./src/services/users/createUser.js":
/*!******************************************!*\
  !*** ./src/services/users/createUser.js ***!
  \******************************************/
/*! exports provided: createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ "@hapi/joi");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuidv4 */ "uuidv4");
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _repositories_users_createUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../repositories/users/createUser */ "./src/repositories/users/createUser.js");





const userValidator = async data => {
  const schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({
    name: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),
    email: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().email().required(),
    gender: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().valid("male", "female").required()
  });
  const {
    error
  } = schema.validate(data);
  if (error) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_2__["ApolloError"](error, 400);
};

async function createUser(args) {
  await userValidator(args);
  args.id = Object(uuidv4__WEBPACK_IMPORTED_MODULE_1__["uuid"])();
  const user = await _repositories_users_createUser__WEBPACK_IMPORTED_MODULE_3__["createUser"](args);
  return user;
}

/***/ }),

/***/ "./src/services/users/getAllUsers.js":
/*!*******************************************!*\
  !*** ./src/services/users/getAllUsers.js ***!
  \*******************************************/
/*! exports provided: getAllUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_users_getAllUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repositories/users/getAllUsers */ "./src/repositories/users/getAllUsers.js");


async function getAllUsers() {
  const users = await _repositories_users_getAllUsers__WEBPACK_IMPORTED_MODULE_1__["getAllUsers"]();
  if (!users) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__["ApolloError"]("Users not found", 404);
  return users;
}

/***/ }),

/***/ "./src/services/users/getUser.js":
/*!***************************************!*\
  !*** ./src/services/users/getUser.js ***!
  \***************************************/
/*! exports provided: getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_users_getUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repositories/users/getUser */ "./src/repositories/users/getUser.js");


async function getUser(userId) {
  const user = await _repositories_users_getUser__WEBPACK_IMPORTED_MODULE_1__["getUser"](userId);
  if (!user) throw new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__["ApolloError"]("User not found", 404);
  return user;
}

/***/ }),

/***/ "./src/types/resolvers/index.js":
/*!**************************************!*\
  !*** ./src/types/resolvers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  mergeResolvers
} = __webpack_require__(/*! @graphql-tools/merge */ "@graphql-tools/merge");

const launches = __webpack_require__(/*! ./launches */ "./src/types/resolvers/launches.js");

const rockets = __webpack_require__(/*! ./rockets */ "./src/types/resolvers/rockets.js");

const users = __webpack_require__(/*! ./users */ "./src/types/resolvers/users.js");

const resolvers = [launches, rockets, users];
module.exports = mergeResolvers(resolvers);

/***/ }),

/***/ "./src/types/resolvers/launches.js":
/*!*****************************************!*\
  !*** ./src/types/resolvers/launches.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  getAllLaunches,
  getLaunch
} = __webpack_require__(/*! ../../api/launches */ "./src/api/launches.js");

module.exports = {
  Query: {
    getAllLaunches: () => getAllLaunches(),
    getLaunch: (_, {
      id
    }) => getLaunch({
      id: id
    })
  }
};

/***/ }),

/***/ "./src/types/resolvers/rockets.js":
/*!****************************************!*\
  !*** ./src/types/resolvers/rockets.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  getAllRockets,
  getRocket
} = __webpack_require__(/*! ../../api/rockets */ "./src/api/rockets.js");

module.exports = {
  Query: {
    getAllRockets: () => getAllRockets(),
    getRocket: (_, {
      id
    }) => getRocket({
      id: id
    })
  }
};

/***/ }),

/***/ "./src/types/resolvers/users.js":
/*!**************************************!*\
  !*** ./src/types/resolvers/users.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  getAllUsers
} = __webpack_require__(/*! ../../services/users/getAllUsers */ "./src/services/users/getAllUsers.js");

const {
  getUser
} = __webpack_require__(/*! ../../services/users/getUser */ "./src/services/users/getUser.js");

const {
  createUser
} = __webpack_require__(/*! ../../services/users/createUser */ "./src/services/users/createUser.js");

const {
  getAllFollowing
} = __webpack_require__(/*! ../../services/followers/getAllFollowing */ "./src/services/followers/getAllFollowing.js");

const {
  getAllFollowers
} = __webpack_require__(/*! ../../services/followers/getAllFollowers */ "./src/services/followers/getAllFollowers.js");

module.exports = {
  Query: {
    getAllUsers: () => getAllUsers(),
    getUser: (_, {
      id
    }) => getUser(id)
  },
  User: {
    following: root => getAllFollowing(root),
    followers: root => getAllFollowers(root)
  },
  Mutation: {
    createUser: async (_, args) => createUser(args)
  }
};

/***/ }),

/***/ "./src/types/schema/index.js":
/*!***********************************!*\
  !*** ./src/types/schema/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  mergeTypeDefs
} = __webpack_require__(/*! @graphql-tools/merge */ "@graphql-tools/merge");

const launches = __webpack_require__(/*! ./launches */ "./src/types/schema/launches.js");

const rockets = __webpack_require__(/*! ./rockets */ "./src/types/schema/rockets.js");

const users = __webpack_require__(/*! ./users */ "./src/types/schema/users.js");

const typeDefs = [launches, rockets, users];
module.exports = mergeTypeDefs(typeDefs, {
  all: true
});

/***/ }),

/***/ "./src/types/schema/launches.js":
/*!**************************************!*\
  !*** ./src/types/schema/launches.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  gql
} = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");

const typeDefs = gql`
  type Launch {
    id: ID!
    mission: String!
    year: String!
    date: String!
    success: Boolean
    rocket: Rocket!
  }
  type Query {
    getAllLaunches: [Launch]!
    getLaunch(id: ID!): Launch!
  }
`;
module.exports = typeDefs;

/***/ }),

/***/ "./src/types/schema/rockets.js":
/*!*************************************!*\
  !*** ./src/types/schema/rockets.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  gql
} = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");

const typeDefs = gql`
  type Rocket {
    id: ID!
    name: String!
    type: String!
  }
  type Query {
    getAllRockets: [Rocket]!
    getRocket(id: ID!): Rocket!
  }
`;
module.exports = typeDefs;

/***/ }),

/***/ "./src/types/schema/users.js":
/*!***********************************!*\
  !*** ./src/types/schema/users.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  gql
} = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    gender: Gender
    following: [User]!
    followers: [User]!
  }

  enum Gender {
    male
    female
  }

  type Query {
    getAllUsers: [User!]!
    getUser(id: ID!): User!
    following: [User]!
    followers: [User]!
  }

  type Mutation {
    createUser(name: String!, email: String!, gender: Gender): User!
  }
`;
module.exports = typeDefs;

/***/ }),

/***/ "@graphql-tools/merge":
/*!***************************************!*\
  !*** external "@graphql-tools/merge" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@graphql-tools/merge");

/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@hapi/joi");

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-lambda");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "uuidv4":
/*!*************************!*\
  !*** external "uuidv4" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuidv4");

/***/ })

/******/ })));
//# sourceMappingURL=graphql.js.map