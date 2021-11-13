
import express from "express";
import { selectSql } from "../database/sql";
// {} 는 사용자가 만든 모듈을 가져온다.
const router = express.Router();

router.get('/', async function(req, res) {  
    const ICT = await selectSql.getICT();

    res.render('select', {          // select.hbs
        title: '정보통신공학과',
        ICT                         // 위에 선언한 것
    });    
});

module.exports = router;