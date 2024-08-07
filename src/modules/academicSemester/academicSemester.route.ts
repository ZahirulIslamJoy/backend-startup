import express from "express"
import { AcademicSemesterControllers } from "./academicSemester.controller";
import validateRequest from "../../app/middleware/validateRequest";
import { AcademicSemesterValidations } from "./academicSemester.validation";


const router = express.Router();

router.post("/create-academic-semester", validateRequest(AcademicSemesterValidations.createAcdemicSemesterValidationSchema), AcademicSemesterControllers.createAcademicSemester)
router.get("/:semesterId",AcademicSemesterControllers.getSingleAcademicSemester)


export const AcademicSemesterRoutes= router;