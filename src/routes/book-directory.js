const { Router } = require("express");
const { getDirectory, postDirectory, deleteDirectory, putDirectory } = require("../controllers/book-directory");


const router = Router();


router.get("/", getDirectory);
router.post("/", postDirectory);
router.delete("/", deleteDirectory);
router.put("/", putDirectory);

module.exports = router;