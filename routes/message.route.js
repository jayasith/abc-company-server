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
router.get("/getAllMessages", verifyAdminAuth, getAllMessages);
router.get("/getMessgesByWorkerId/:id", verifyWorkerAuth, getMessgeByUserId);
router.get("/getMessgesByManagerId/:id", verifyManagerAuth, getMessgeByUserId);
router.get("/getWorkerMessages/:id", verifyWorkerAuth, getMessgeById);
router.get("/getManagerMessages/:id", verifyManagerAuth, getMessgeById);
router.post("/worker/save", verifyWorkerAuth, saveMessage);
router.post("/manager/save", verifyManagerAuth, saveMessage);
router.delete(
  "/delete/:id",
  deleteMessage
);


module.exports = router;
