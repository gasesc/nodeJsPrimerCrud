import {Router} from "express";
import { EmpleadoController } from "../../conrtollers/empleado.controller.js";
//import { EmpleadoController } from "../../controllers/empleado.controller.js";

const empleadoRouter =Router();
const empleadoController=new EmpleadoController;

empleadoRouter.get('/',empleadoController.getEmpleados.bind(empleadoController));
empleadoRouter.get('/:id',empleadoController.getEmpleado.bind(empleadoController));
export default empleadoRouter;