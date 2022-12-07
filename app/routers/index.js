const router = require("express").Router();
const user = require("./user");
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 회원 정보 관리
 */
router.use("/user", user);

module.exports = router;
