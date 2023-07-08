"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers");
var router = (0, _express.Router)();
router.get("/users", _controllers.getUsers);
router.post("/users/auth", _controllers.Login);
router.post("/users/create", _controllers.createUser);

// router.post("/users", createUser);
var _default = router;
exports["default"] = _default;