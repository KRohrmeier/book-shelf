import { Router } from "express";
import bookkeepersCtrl from "./bookkeepers.controller";

const router = new Router();

// associate put, delete, and get(id)
router.route("/register").post(bookkeepersCtrl.register);
router.route("/login").post(bookkeepersCtrl.login);
router.route("/logout").post(bookkeepersCtrl.logout);
router.route("/delete").delete(bookkeepersCtrl.delete);
router.route("/update-preferences").put(bookkeepersCtrl.save);
// router.route("/make-admin").post(usersCtrl.createAdminUser);

export default router;
