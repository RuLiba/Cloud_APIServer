// const mysql = require("mysql2/promise"); // mysql 모듈 promise 방식으로 가져오기

// const pool = mysql.createPool({
//     host: "127.0.0.1", // 데이터베이스 ip 주소
//     port: 3306, // mysql 포트 번호
//     user: "root", // 접속 아이디
//     password: "1234", // 접속 비밀번호
//     database: "web_user", // 데이터베이스 이름 mysql은 스키마 이름
//     waitForConnections: true, // 풀에 여유 커넥션이 없는경우 대기 할 것인지 옵션
//     connectionLimit: 10, // 커넥션풀에 미리 생성할 커넥션 개수
// });

const user_db = require("../model/db/user_db");

console.log("서버 생성시에 시작..");

module.exports = {
    async m_UserJoin(id, password, name, phone_number, gender, birthday, age) {
        const query =
            "INSERT INTO user_info set id = ?,password = ?, name = ? , phone_number = ? , gender = ?, birthday = ?, age = ?";

        const data = [id, password, name, phone_number, gender, birthday, age];

        return user_db.ReadDb(query, data);
    },

    async m_UserCheck(id) {
        const query = "SELECT id FROM user_info WHERE id = ?";
        const [result, err] = user_db.ReadDb(query, id);
        if (result.length > 0) {
            return [true, null];
        } else {
            return [null, err];
        }
    },
};
