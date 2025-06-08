const Router = require("express");
const constroller = require("../controllers/user.controller");

const router = Router({ mergeParams: true });

router.get("/:user_id/followers", constroller.getFollowers);
router.get("/:user_id/followed", constroller.getFollowed);
router.get("/:user_id", constroller.getProfile);
router.patch("/:user_id", constroller.updateProfile);

module.exports = router;
