import express from "express"
import { UserControllers } from "./user.controllers";
import validateRequest from "../../app/middleware/validateRequest";
import { studentValidations } from "../student/student.validation";
import { createFacultyValidationSchema } from "../faculty/faculty.validation";
import { createAdminValidationSchema } from "../admin/admin.validation";
import auth from "../../app/middleware/auth";
import { USER_ROLE } from "./user.constant";

const router = express.Router();


router.post("/create-student", auth(USER_ROLE.admin), validateRequest(studentValidations.createStudentValidationSchema), UserControllers.createStudent)
router.post(
    '/create-faculty',
    auth(USER_ROLE.admin),
    validateRequest(createFacultyValidationSchema),
    UserControllers.createFaculty,
  );

  router.post(
    '/create-admin',
    //auth(USER_ROLE.admin),
    validateRequest(createAdminValidationSchema),
    UserControllers.createAdmin,
  );

export const UserRouters = router;