const router = require('express').Router()
// const uuidv4 = require('uuid/v4')

const createdata = require('./api/create-data/index')
const auth = require('./api/auth/index')
const user = require('./api/user/index')
<<<<<<< HEAD
const manageprogress = require('./api/manage-progress/index')
=======
const piechart = require('./api/piechart/index')
const management = require('./api/management/index')
>>>>>>> 4c65bcdfe3d802090e9b494b9d0a032b07606067

router.use('/create-data', createdata) // 데이터 생성 관련 api
router.use('/', auth) // 회원가입, 로그인, 로그아웃
router.use('/mypage', user) // 마이페이지
<<<<<<< HEAD
router.use('/manage-progress', manageprogress) // 관리 진행 현황
=======
router.use('/piechart', piechart) // jy: 메인페이지 파이차트
router.use('/management', management) // jy : 운영 관리 페이지
>>>>>>> 4c65bcdfe3d802090e9b494b9d0a032b07606067

module.exports = router
