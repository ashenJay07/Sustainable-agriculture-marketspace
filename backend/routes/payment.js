const express = require("express");
const router = express.Router();

const {
  processPayment,
  successMail,
  sendStripApi,
} = require("../controllers/paymentController");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/payment/successmail").post(isAuthenticatedUser, successMail);
router.route("/stripeapi").get(isAuthenticatedUser, sendStripApi);

module.exports = router;
