const { Router } = require("express");
const likeRouter = require("./like.route");
const controller = require("../controllers/post.controller");

const router = Router({ mergeParams: true });

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:post_id", controller.get);
router.put("/:post_id", controller.update);
router.delete("/:post_id", controller.remove);

router.use("/:post_id/like", likeRouter);

module.exports = router;
