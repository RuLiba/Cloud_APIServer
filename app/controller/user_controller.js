const user_model = require("../model/user_model");

module.exports = {
    async c_UserJoin(req, res) {
        const [id, password, name, phone_number, gender, birthday, age] = req.body;

        let [result, err_message] = await user_model.m_UserJoin(
            id,
            password,
            name,
            phone_number,
            gender,
            birthday,
            age
        );

        if (result) {
            console.log(result);
        } else {
            // 409 Conflict 리소스의 현재 상태와 충돌해서 해당 요청을 처리할 수 없기때문에
            // 클라이언트에서 충돌을 수정해서 다시 요청을 보내야함.
            res.status(409);
            res.send(err_message);
        }
    },

    async c_UserCheck(req, res) {
        const [id] = req.body.id;
        let [result, err] = await user_model.m_UserCheck(id);
        if (result) {
            console.log(result);
        } else {
            res.status(409);
            res.send(err);
        }
    },
};
