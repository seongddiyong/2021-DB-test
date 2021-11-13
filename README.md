# 2021-DB-test

<br>

## **3주차 DB table**
1. DATABASE = user
2. Table = STUDENT
3. Table::Student
    - 이 테이블의 필드에는 학번, 이름, 전공, 학년, 입학날짜, e-mail이 들어가있고, 2명에 대한 정보가 입력이 돼있다.
- 단순한 사용자 정보를 나타내주는 테이블.

<span style="color:red">**STUDENT**</span>

id|name|major|grade|ad_date|email
---|---|---|---|---|---|
12184885|박성훈|정보통신공학과|4|NULL|12184885@inha.edu
12164585|김창식|정보통신공학과|4|NULL|12164585@inha.edu

<br><br>

## **8주차 DB TABLE**
1. DATABASE = week8
2. Table = employee / department / projects / works_on / dept_location / dependent
- 사원 정보, 부서 정보, 프로젝트, 업무시간, 부서위치, 부양가족 등이 있음.
- 하나의 mini world를 표현한 DB이고, 각 테이블은 PK, FK로 연결되어있다.

<span style="color:red">**DEPARTMENT**</span>
Dname|Dnumber|Mgr_ssn|Mgr_start_date
---|---|---|---|
Headquarters|1|12345678|1981-06-19
Administration|4|22222222|1985-01-01
Research|5|44444444|1988-05-22

<span style="color:red">**EMPLOYEE**</span>
Fname | Minit | Lname | Ssn      | Bdate | Address | Sex  | Salary | Super_ssn | Dno
---|---|---|---|---|---|---|---|---|---|
Choi|NULL|Wong|12345678|NULL|NULL|NULL|NULL|NULL|4
John  | NULL  | Smith | 22222222 | NULL  | NULL    | NULL |   NULL | NULL      |   1
Kim   | NULL  | Wong  | 33333333 | NULL  | NULL    | NULL |   NULL | NULL      |   5
HWANG | NULL  | Wong  | 44444444 | NULL  | NULL    | NULL |   NULL | NULL      |   1
Ahmad | NULL  | Ali   | 55555555 | NULL  | NULL    | NULL |   NULL | NULL      |   1

<span style="color:green">**WORKS_ON**</span>
Essn | Pno | Hours
---|---|---|
12345678 |   3 |   1.0
22222222 |   1 |   3.0
33333333 |   2 |   6.0
44444444 |   5 |   5.0
55555555 |   4 |   4.0

<span style="color:green">**PROJECTS**</span>
| Pname       | Pnumber | Plocation | Dnum |
---|---|---|---
| DBproject   |       1 | NULL      |    1 |
| Cplus       |       2 | NULL      |    1 |
| JavaProject |       3 | NULL      |    5 |
| Nodejs      |       4 | NULL      |    4 |
| UMCproject  |       5 | NULL      |    5 |

<span style="color:green">**DEPT_LOCATIONS**</span>
| Dnumber | Dlocation |
---|---
|       1 | incheon   |
|       1 | seoul     |
|       4 | busan     |
|       5 | cheonan   |
|       5 | ulsan     |

<span style="color:green">**DEPENDENT**</span>
| Essn     | Dependent_name | Sex  | Bdate | Relationship |
---|---|---|---|---
| 12345678 | 이든           | M    | NULL  | NULL         |
| 22222222 | 도리스         | M    | NULL  | NULL         |
| 22222222 | 성띠용         | M    | NULL  | NULL         |
| 33333333 | 아가사         | W    | NULL  | NULL         |
| 33333333 | 창식           | M    | NULL  | NULL         |

<br><br>

## **10 주차 DB TABLE**

1. DATABASE = week10
2. Table = department / ict / user
    - department - 과, 과번호
    - ict - 정통과 학생들
    - user - ID와 Password, 권한이 있음.
- 로그인하여 각 권한이 있는 계정으로 무언가를 삭제하거나 수정할 수 있고, 학과와 과에 해당하는 학생들을 보여줌.

<span style="color:red">**DEPARTMENT**</span>
| Dname          | Dnumber |
---|---
| 산업공학과     |       4 |
| 전기공학과     |       2 |
| 전자공학과     |       3 |
| 정보통신공학과 |       0 |
| 컴퓨터공학과   |       1 |

<span style="color:red">**ICT**</span>
| Number | Name     |
---|---
| 이지수 | 12090909 |
| 구미범 | 12160001 |
| 박규원 | 12161234 |
| 박성훈 | 12184885 |

<span style="color:red">**USER**</span>
| Id    | Password  | Role  |
---|---|---
| admin | admin1234 | admin |
| test  | test1234  | users |

<br><br><br>

## ***아래는 수업시간에 한 내용.*
<br>

## 10주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:seongddiyong/2021-DB-test.git
    - (token을 사용하는 경우) git clone https://github.com/seongddiyong/2021-DB-test.git
2. week3 폴더로 이동
    > cd week3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js 에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.creatPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',   // 본인의 mysql user id
        database: 'week10', // 본인이 만든 데이터베이스 이름
        password: 'qwer2468',   // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111
홍길동|컴퓨터공학과|데이터베이스|12191111
이순신|인공지능학과|인공지능|12181111

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.