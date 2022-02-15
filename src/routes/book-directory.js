const { Router } = require("express");
const { getDirectory, postDirectory, deleteDirectory, putDirectory } = require("../controllers/book-directory");


const router = Router();


    router.get("/:id", getDirectory);
    router.post("/", postDirectory);
    router.delete("/:id", deleteDirectory);
    router.put("/", putDirectory);


module.exports = router;