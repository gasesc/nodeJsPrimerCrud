import { request } from "http";
import {type Request,type Response}  from "express";
import { EmpleadoRepository } from "../repository/empleado.repository";
import { EmpleadoService } from "../service/empleado.service";
;


const empleadoRepository= new EmpleadoRepository();
const empleadoService =new EmpleadoService(empleadoRepository);

export class EmpleadoController{

    constructor(){}



    public getEmpleados = async(req:Request,res:Response)=>{

        try {
            const empleados=await empleadoService.obtenerEmpleados();
            res.status(200).json(empleados);
        }catch (error){
            res.status(500).json({message: "error al obtener empleados",error})
        }

    }

    public getEmpleado=async(req:Request,res:Response)=>{
        
           try {
            const id=Number(req.params.id);
            if(isNaN(id)){
                return res.status(400).json("ID invalido");
            }
            const empleado=empleadoService.obetenerEmpleado(id);
            if(!empleado){
                res.status(404).json({message: "empleado no encontrado"});
            }

            res.status(200).json(empleado);

            
        }catch (error){
            res.status(500).json({message: "error al obtener empleados",error})
        }

    }
}
