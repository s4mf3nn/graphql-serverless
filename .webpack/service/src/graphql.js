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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "axios");

async function getAllLaunches() {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/launches");
    return response.data.map(launch => launchReducer(launch));
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

async function getLaunch({
  id
}) {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/launches/" + id);
    return launchReducer(response.data);
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

function launchReducer(launch) {
  return {
    id: launch.flight_number || 0,
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

module.exports = {
  getAllLaunches,
  getLaunch
};

/***/ }),

/***/ "./src/api/rockets.js":
/*!****************************!*\
  !*** ./src/api/rockets.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "axios");

async function getAllRockets() {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/rockets");
    return response.data.map(rocket => rocketReducer(rocket));
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

async function getRocket({
  id
}) {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/rockets/" + id);
    return rocketReducer(response.data);
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

function rocketReducer(rocket) {
  return {
    id: rocket.rocket_id || 0,
    name: rocket.rocket_name,
    type: rocket.rocket_type
  };
}

module.exports = {
  getAllRockets,
  getRocket
};

/***/ }),

/***/ "./src/graphql.js":
/*!************************!*\
  !*** ./src/graphql.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  ApolloServer
} = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");

const typeDefs = __webpack_require__(/*! ./schema */ "./src/schema/index.js");

const resolvers = __webpack_require__(/*! ./resolvers */ "./src/resolvers/index.js");

const server = new ApolloServer({
  debug: false,
  typeDefs,
  resolvers
});
const main = server.createHandler();

module.exports.main = (event, context, callback) => {
  function callbackFilter(error, output) {
    output.headers["Access-Control-Allow-Origin"] = "*";
    callback(error, output);
  }

  main(event, context, callbackFilter);
};

/***/ }),

/***/ "./src/libs/dynamodb.js":
/*!******************************!*\
  !*** ./src/libs/dynamodb.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const AWS = __webpack_require__(/*! aws-sdk */ "aws-sdk");

AWS.config.update({
  region: process.env.awsRegion
});

const call = (action, params) => {
  if (process.env.IS_OFFLINE === "true") {
    const dynamoDb = new AWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8080"
    });
    return dynamoDb[action](params).promise();
  } else {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    return dynamoDb[action](params).promise();
  }
};

module.exports = {
  call
};

/***/ }),

/***/ "./src/repositories/users.js":
/*!***********************************!*\
  !*** ./src/repositories/users.js ***!
  \***********************************/
/*! exports provided: getAllUsers, getUser, getFollowing, getFollowers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowing", function() { return getFollowing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowers", function() { return getFollowers; });
/* harmony import */ var _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/dynamodb */ "./src/libs/dynamodb.js");
/* harmony import */ var _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__);

const usersTable = process.env.usersTable;
const followersTable = process.env.followersTable;
async function getAllUsers() {
  const results = await _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__["call"]("scan", {
    TableName: usersTable,
    ScanIndexForward: false
  });
  return results.Items;
}
async function getUser(userId) {
  const params = {
    TableName: usersTable,
    Key: {
      id: userId
    }
  };

  try {
    const result = await _libs_dynamodb__WEBPACK_IMPORTED_MODULE_0__["call"]("get", params);
    return result.Items;
  } catch (e) {
    console.log(e);
  }
}
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
  }
}

/***/ }),

/***/ "./src/resolvers/index.js":
/*!********************************!*\
  !*** ./src/resolvers/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  mergeResolvers
} = __webpack_require__(/*! @graphql-tools/merge */ "@graphql-tools/merge");

const launches = __webpack_require__(/*! ./launches */ "./src/resolvers/launches.js");

const rockets = __webpack_require__(/*! ./rockets */ "./src/resolvers/rockets.js");

const users = __webpack_require__(/*! ./users */ "./src/resolvers/users.js");

const resolvers = [launches, rockets, users];
module.exports = mergeResolvers(resolvers);

/***/ }),

/***/ "./src/resolvers/launches.js":
/*!***********************************!*\
  !*** ./src/resolvers/launches.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  getAllLaunches,
  getLaunch
} = __webpack_require__(/*! ../api/launches */ "./src/api/launches.js");

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

/***/ "./src/resolvers/rockets.js":
/*!**********************************!*\
  !*** ./src/resolvers/rockets.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  getAllRockets,
  getRocket
} = __webpack_require__(/*! ../api/rockets */ "./src/api/rockets.js");

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

/***/ "./src/resolvers/users.js":
/*!********************************!*\
  !*** ./src/resolvers/users.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  getAllUsers,
  getFollowing,
  getFollowers
} = __webpack_require__(/*! ../services/users */ "./src/services/users.js");

module.exports = {
  Query: {
    getAllUsers: () => getAllUsers()
  },
  User: {
    following: getAllUsers => getFollowing(getAllUsers),
    followers: getAllUsers => getFollowers(getAllUsers)
  }
};

/***/ }),

/***/ "./src/schema/index.js":
/*!*****************************!*\
  !*** ./src/schema/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  mergeTypeDefs
} = __webpack_require__(/*! @graphql-tools/merge */ "@graphql-tools/merge");

const launches = __webpack_require__(/*! ./launches */ "./src/schema/launches.js");

const rockets = __webpack_require__(/*! ./rockets */ "./src/schema/rockets.js");

const users = __webpack_require__(/*! ./users */ "./src/schema/users.js");

const typeDefs = [launches, rockets, users];
module.exports = mergeTypeDefs(typeDefs, {
  all: true
});

/***/ }),

/***/ "./src/schema/launches.js":
/*!********************************!*\
  !*** ./src/schema/launches.js ***!
  \********************************/
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

/***/ "./src/schema/rockets.js":
/*!*******************************!*\
  !*** ./src/schema/rockets.js ***!
  \*******************************/
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

/***/ "./src/schema/users.js":
/*!*****************************!*\
  !*** ./src/schema/users.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  gql
} = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    following: [User]!
    followers: [User]!
  }

  type Query {
    getAllUsers: [User!]!
    following: [User]!
    followers: [User]!
  }
`;
module.exports = typeDefs;

/***/ }),

/***/ "./src/services/users.js":
/*!*******************************!*\
  !*** ./src/services/users.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  getAllUsers: usersRepo,
  getUser: userRepo,
  getFollowing: followingRepo,
  getFollowers: followersRepo
} = __webpack_require__(/*! ../repositories/users */ "./src/repositories/users.js");

async function getAllUsers() {
  try {
    const resUser = await usersRepo();
    return resUser;
  } catch (e) {
    console.log("ERROR : ", e.message);
    return e.message;
  }
}

async function getUser(userId) {
  try {
    const resUser = await userRepo(userId);
    return resUser;
  } catch (e) {
    console.log("ERROR : ", e.message);
    return e.message;
  }
}

async function getFollowing(parent) {
  const followingList = [];

  try {
    const following = await followingRepo(parent.id);

    if (!following) {
      return followingList;
    } // TODO Faire un getBatchItem


    following.map(following => {
      const user = getUser(following.follower);
      followingList.push(user);
    });
    return followingList;
  } catch (e) {
    console.log("ERROR : ", e.message);
    return e.message;
  }
}

async function getFollowers(parent) {
  const followersList = [];

  try {
    const followers = await followersRepo(parent.id);

    if (!followers) {
      return followersList;
    } // TODO Faire un getBatchItem


    followers.map(follower => {
      const user = getUser(follower.following);
      followersList.push(user);
    });
    return followersList;
  } catch (e) {
    console.log("ERROR : ", e.message);
    return e.message;
  }
}

module.exports = {
  getAllUsers,
  getUser,
  getFollowing,
  getFollowers
};

/***/ }),

/***/ "@graphql-tools/merge":
/*!***************************************!*\
  !*** external "@graphql-tools/merge" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@graphql-tools/merge");

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

/***/ })

/******/ })));
//# sourceMappingURL=graphql.js.map