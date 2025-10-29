import { type Request,type Response} from 'express';
import type { EmpleadoRepository } from '../repository/empleado.repository.js';

export class EmpleadoService {

constructor(private empleadoRepository : EmpleadoRepository){}

async obtenerEmpleados(){
    return await this.empleadoRepository.findAllEmpleados();
 }

async obetenerEmpleado(id:number){
    return await {name:"paola", id :2};
}
}