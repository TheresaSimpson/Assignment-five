const router = require ("express").Router();
const studentController = require("../controllers/studentController");

router.get("/", studentController.allStudents);
router.get( "/:id", studentController.getStudent);
router.post("/", studentController.createStudent);
router.patch("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;