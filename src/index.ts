import express, { type Request, type Response } from "express";
import { AppRoutes } from "./routes/routes.js";

const app =express();
const PORT =3000;
//con esto le digo vas a soportar json unicamente
app.use(express.json());

app.use(AppRoutes.routes);
//esto es la ruta
/*app.get('/',(req:Request,res:Response)=>{
    res.send("hola gaston escobar");
})*/
//inicia servidor
app.listen(PORT,()=>{
    console.log("servidor corriendo");
})