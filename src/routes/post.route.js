const { Router } = require("express");
const likeRouter = require("./like.route");

const router = Router({ mergeParams: true });

router.use("/:post_id/like", likeRouter);

module.exports = router;
