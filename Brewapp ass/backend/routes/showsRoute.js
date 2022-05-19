import express from "express";
import { createShows, deleteShow, getAllShows, updateShow } from "../controllers/showsController";
const router = express.Router();

router.route("/").get(getAllShows)
router.route("/add").post(createShows);
router.route("/update/:id").put(updateShow);
router.route("/delete/:id").delete(deleteShow);

export default router
