const router = require("express").Router();
const {
  saveMessage,
  getAllMessages,
  getMessgeById,
  getMessgeByUserId,
  deleteMessage,
} = require("../controllers/message.controller");   

const { verifyAdminAuth } = require("../middleware/auth.admin.middleware")
const { verifyManagerAuth } = require("../middleware/auth.manager.middleware");
const { verifyWorkerAuth } = require("../middleware/auth.worker.middleware")

router.get("/", verifyAdminAuth, getAllMessages);
router.get("/worker/:id", verifyWorkerAuth, getMessgeByUserId);
router.get("/manager/:id", verifyManagerAuth, getMessgeByUserId);
router.get("/woker/get/:id", verifyWorkerAuth, getMessgeById);
router.get("/manager/get/:id", verifyManagerAuth, getMessgeById);
router.post("/woker", verifyWorkerAuth, saveMessage);
router.post("/manager", verifyManagerAuth, saveMessage);
router.delete(
  "/:id",
  deleteMessage
);


module.exports = router;
