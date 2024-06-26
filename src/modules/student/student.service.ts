import { StudentModel } from './student.models';




const getAllStudentsFromDB=async()=>{
    const result=await StudentModel.find();
    return result;
}

const getSingleStudentFromDB=async(id:string)=>{
    //const result=await StudentModel.findOne({id:id});
    const result=await StudentModel.aggregate([
        {$match:{id:id}}
    ])
    return result;
}


const deleteStudentFromDB=async(id:string)=>{
    const result=await StudentModel.updateOne({id:id} , {isDeleted:true});
    return result;
}

export const StudentServices={
   getAllStudentsFromDB,getSingleStudentFromDB,deleteStudentFromDB
}