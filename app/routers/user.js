const router = require("express").Router();
const user_controller = require("../controller/user_controller");

/** 회원 아이디 중복 검사
 * @swagger
 * /api/user/{id}:
 *  get:
 *    summary: "회원 아이디 중복 검사"
 *    description: "회원 아이디 중복 검사."
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: 유저 아이디
 *        schema:
 *          type: string
 *    responses:
 *      "200":
 *        description: 중복 여부를 돌려준다.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  type: object
 *                  example: [{ "check": true }]
 */

router.get("/:id", user_controller.c_UserCheck);

/** 회원 가입
 * @swagger
 *
 * /api/user:
 *  post:
 *    summary: "회원 가입"
 *    description: "POST 방식으로 회원을 등록한다."
 *    tags: [User]
 *    requestBody:
 *      description: 회원 가입 페이지.
 *      required: false
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                description: "유저 계정 (이메일주소) 글자수 제한 : 5~ 255"
 *              password:
 *                type: string
 *                description: "비밀번호  글자수 제한 : 8 ~ 20"
 *              name:
 *                  type: string
 *                  description : "회원 이름 바이트 제한 : 3~16"
 *              phone_number:
 *                  type: string
 *                  description : "휴대폰 번호 000-0000-0000"
 *              gender:
 *                  type: string
 *                  description : "남/여"
 *              birthday:
 *                  type: string
 *                  description : "0000/00/00"
 *              age:
 *                  type: int
 *                  description : "숫자만 입력"
 *    responses:
 *      "200":
 *        description: 회원등록 성공시 sueccess = true 실패시 sueccess = false
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *
 */
// router.post("/", (req, res) => {
//     //회원 가입
//     console.log(req.body);
//     res.json({ success: true });
// });
router.post("/", user_controller.c_UserJoin);

/** 회원 정보 수정
 * @swagger
 *
 * /api/user:
 *  patch:
 *    summary: "회원 정보 수정"
 *    description: "patch 방식으로 회원 정보를 수정."
 *    tags: [User]
 *    requestBody:
 *      description: 회원 정보 수정.
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                description: "변경할 유저 계정 (이메일주소) 글자수 제한 : 5~ 255"
 *              name:
 *                  type: string
 *                  description : "수정할 회원 이름 : 3~16"
 *    responses:
 *      "200":
 *        description: 유저등록 성공시 sueccess = true 실패시 sueccess = false
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *
 */
router.patch("/", (req, res) => {
    //회원 정보 수정
    console.log(req.body);
    res.json(req.body);
});

/** 회원 삭제
 * @swagger
 *
 * /api/user/delete:
 *  delete:
 *    summary: "회원 삭제"
 *    description: "Delete 방식으로 회원을 삭제."
 *    tags: [User]
 *    requestBody:
 *      description:
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                description: "삭제할 유저 계정"
 *    responses:
 *      "200":
 *        description: 유저등록 삭제시 sueccess = true 실패시 sueccess = false
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *
 */
router.delete("/delete", (req, res) => {
    // 회원 삭제
    console.log(req.body);
    res.json(req.body);
});

/** 회원 정보 가져오기
 * @swagger
 * /api/user?id={id}:
 *  get:
 *    summary: "회원 정보 가져오기 Query 방식"
 *    description: "회원 정보를 가져온다."
 *    tags: [User]
 *    parameters:
 *      - in: query
 *        name: id
 *        required: true
 *        description: 유저 아이디
 *        schema:
 *          type: string
 *    responses:
 *      "200":
 *        description: 회원 정보를 돌려준다.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  type: object
 *                  example: [{ "ok": true, "exists": false }]
 */
router.get("/", (req, res) => {
    // 회원 정보 가져오기.
    console.log(req.query);
    res.json(req.query);
});

module.exports = router;
