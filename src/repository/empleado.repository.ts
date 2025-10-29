import {prisma} from "../prisma.js";


export class EmpleadoRepository{

    async  findAllEmpleados(){
        return await prisma.empleado.findMany(
        {
            include :{empresa:true}
        }   
     )
    }
}