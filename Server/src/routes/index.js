const getCharById = require ("../controllers/getCharById")
const  deleveFav = require ("../controllers/deleteFav")
const login = require ("../controllers/login")
const postFav = require("../controllers/postFav")
const postUser =require("../controllers/postUser")



const router = require ("express").Router()

router.get("/character/:id",getCharById)
router.get("/login", login)
router.post("/login",postUser)
router.post("/fav",postFav)
router.delete("/fav/:id",deleveFav)



module.exports = router;


