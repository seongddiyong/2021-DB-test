// views 폴더의 login.hbs 파일과 연동.

import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

// 기존의 입력값을 불러온다.
router.get('/', (req, res) => {
    res.render('login');        // login.hbs에서 웹브라우저에 뿌려주겠다(render)
});

router.post('/', async (req, res) => {      // 값을 받아 저장하는 곳으로 보냄
    const vars = req.body;                  // req.body에 저장된다.
    const users = await selectSql.getUsers();
    let whoAmI = '';
    let checkLogin = false;

    users.map((user) => {

        console.log(user.Id);
        if(vars.id === user.Id && vars.password === user.Password) {
            console.log('login success!');
            checkLogin = true;
            if (vars.id === 'admin') {
                whoAmI = 'admin';
            } else {
                whoAmI = 'user';
            }
        }
    })
    // 로그인이 어떻게 되냐에 따라 보여주는 화면이 바뀐다.
    // 조건문을 통해 login의 정보를 확인한다.
    if (checkLogin && whoAmI === 'admin') {     // admin은 삭제가능
        res.redirect('/delete');                // 입력 후 어떤 페이지로 갈 것인가? = delete
    } else if (checkLogin && whoAmI === 'user') {   //user는 select문을 본다.
        res.redirect('/select');
    } else {
        console.log('login failed!');       // 정보 없으면 실패
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})

module.exports = router;