import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'week10',
    password: 'qwer2468',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);
// 위는 mysql과 연결하기 위한 정보이다.
// async / await 사용
const promisePool = pool.promise();

// select query
// export 는 외부에서 값을 불러온다.
export const selectSql = {
  getUsers : async () => {
    const [rows] = await promisePool.query(`select * from user`);

    return rows
  },
  getICT : async () => {
    const [rows] = await promisePool.query(`select * from ICT`);  // ICT에서 정보를 가져오는 select문

    return rows
  },
}

// delete query
export const deleteSql = {
  deleteICT : async (data) => {
    console.log('deleteSql.deleteICT:', data.Number); 
    const sql = `delete from ICT where Number = "${data.Number}"`;
    // ``를 쓰면 변수를 받을 수 있다.
    // 데이터를 받고 쿼리문 작성하고, promisePool로 호출하고 값을 넘겨준다.
    // where 조건을 만족하는 행에 대해 delete 진행 Number가 일치하는 행을 삭제한다.
    await promisePool.query(sql); // 쿼리 실행

  },
}