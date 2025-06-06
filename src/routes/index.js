const Router = require("express");
const authRoute = require("./auth.route");

const router = Router({ mergeParams: true });

router.use("/auth", authRoute);

module.exports = router;

