import httpStatus from "http-status";
import AppError from "../../app/errors/AppError";
import { SemesterRegistration } from "../semesterRegistration/semesterRegistration.model";
import { TOfferedCourse } from "./offeredCourse.interface";
import { AcademicFaculty } from "../academicFaculty/academicFaculty.model";
import { academicDepartment } from "../academicDepartment/academicDepartment.model";
import { Course } from "../course/course.model";
import { Faculty } from "../faculty/faculty.model";
import { OfferedCourse } from "./offeredCourse.model";

const createOfferdCourseIntoDB=async (payload:TOfferedCourse)=>{
    const {semesterRegistration,academicFaculty,academicDepartment:acacademicDepartments,course,faculty} = payload;

    //check if the semester registration is valid or not
    const isSemesterRegistrationValid= await SemesterRegistration.findById(semesterRegistration)

    if(!isSemesterRegistrationValid){
        throw new AppError(httpStatus.NOT_FOUND,"Semester Registration Isnt Valid")
    }

    const academicSemester=isSemesterRegistrationValid?.academicSemester;
    const isAcademicFacultyValid= await AcademicFaculty.findById(academicFaculty)

    if(!isAcademicFacultyValid){
        throw new AppError(httpStatus.NOT_FOUND,"Academic Faculty Isnt Valid")
    }

    const isAcademicDepartmentValid= await academicDepartment.findById(acacademicDepartments)

    if(!isAcademicDepartmentValid){
        throw new AppError(httpStatus.NOT_FOUND,"Academic Department Isnt Valid")
    }

    const isCourseValid= await Course.findById(course)

    if(!isCourseValid){
        throw new AppError(httpStatus.NOT_FOUND,"Course Isnt Valid")
    }

    const isFacultyValid= await Faculty.findById(faculty)

    if(!isFacultyValid){
        throw new AppError(httpStatus.NOT_FOUND,"Faculty Isnt Valid")
    }

    const result =await OfferedCourse.create({...payload,academicSemester}) 
    return result;
    
}

export const offeredCourseServices= {
    createOfferdCourseIntoDB
}