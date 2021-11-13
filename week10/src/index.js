import express from "express";
import logger from "morgan";
import path from "path";
// import 명령어로 쓸 모듈 선언.
// express 모듈 사용 (이름 지정 시 약어 사용 가능 예를 들면 express -> ex)
// node_modules 에서 불러오는 것임.
import loginRouter from "../routes/login";
import selectRouter from "../routes/select";
import deleteRouter from "../routes/delete";
// user가 만든 다른 폴더에서 파일에서 기능 불러올 때
// 현재 폴더 기준으로 쓰려고 하는 파일 위치를 나타내주면 된다.
// 굳이 .js 안붙여도 됨.
const PORT = 3000;      // 3000 PORT 사용 (고정)
const app = express();  // express 기능을 쓸 것
// 서버를 알아서 연결

app.use(express.urlencoded({ extended: false }));
app.use(express.json());        // 데이터를 다루기 편하게..

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')       // 웹화면에 어떤 것을 가져가서 무엇을 띄울 것인지

app.use(logger("dev"));

app.use('/', loginRouter);
app.use('/select', selectRouter);
app.use('/delete', deleteRouter);
// 기본적인 router 주소 설정. 옆의 넘겨주는 함수는 사용하는 router
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
// listen해서 서버를 실행.
// router 선언하고 마지막에 작성.
// 작성하고 npm run start 하면 서버 실행하게 되는 것.