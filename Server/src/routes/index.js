const {getCharById} = require ("../controllers/getCharById")
const {postFav, deleveFav} = require("../controllers/handleFavorites")
const {login} = require ("../controllers/login")

const router = require ("express").Router()

router.get("/character/:id",getCharById)
router.get("/login",login)
router.post("/fav",postFav)
router.delete("/fav/:id",deleveFav)


module.exports = router;


