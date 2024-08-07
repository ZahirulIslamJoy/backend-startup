import express from "express"
import { StudentControllers } from "./student.controller";

const router = express.Router();


router.get("/",StudentControllers.getAllStudents)

router.get("/:id",StudentControllers.getSingleStudents)

router.patch("/:id",StudentControllers.updateStudent)

router.delete("/:id",StudentControllers.deleteStudents)

export const StudentRoutes=router