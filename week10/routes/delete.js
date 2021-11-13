import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

// 기존의 입력 값 불러오기
router.get('/', async (req, res) => {
    const ICT = await selectSql.getICT();

    res.render('delete', {
        title: "삭제 기능",
        ICT
    })
});
/*
// 기존의 입력 값 불러오기
router.get('/ICT', async (req, res) => {
    const dept_res = await selectSql.getICT();
    res.render('updateICT', {
        title: "부서 테이블 갱신",
        dept_res
    })
});
*/
// 수정 버튼을 눌렀을 경우 delete query를 실행하며 조회 페이지로 이동
router.post('/', async (req, res) => {
    console.log('delete', req.body.delBtn);

    const data = {
        Number: req.body.delBtn,
    };

    await deleteSql.deleteICT(data);

    res.redirect('/delete');
});

module.exports = router;