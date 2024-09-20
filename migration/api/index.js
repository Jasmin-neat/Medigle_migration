const express = require("express");
const router = express.Router();
var {
  facilities,
  facilityDetail,
  contractDetail,
  userData,
  userDetail,
} = require("./apis");

router.get("/facilities", facilities);
router.get("/facility", facilityDetail);
router.get("/contract", contractDetail);
router.get("/userData", userData);
router.get("/user", userDetail);

module.exports = { apiRouter: router };
