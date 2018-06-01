import {Body, Controller, Get, Param, Post, Put, Query, Req, Res} from "@nestjs/common";
import {Paciente, PacienteService} from "./paciente.service";

@Controller('Usuario')
export class PacienteController {
    constructor(private _pacienteService: PacienteService){
    }
    @Get()
    mostrarTodos(){
        return this._pacienteService.arregloPacientes;
    }

    @Post()
    crearPacientes(@Body() bodyParams, @Res() res){
        const paciente = new  Paciente(bodyParams.idPaciente, bodyParams.nombre, bodyParams.apellido, bodyParams.fechaNacimiento, bodyParams.hijos, bodyParams.tieneSeguro);
        return res.send(this._pacienteService.crearPaciente(paciente));

    }


    @Get('mostrar/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros) {
        const paciente=this._pacienteService.obtenerUno(parametros.id);
        return res.send(paciente);
    }

    @Put('modificar/:id')
    editarUno(@Body() bodyParams, @Res() res, @Param () parametro){
        const respuesta=this._pacienteService.editarUno(parametro.id,bodyParams.nombre, bodyParams.apellido, bodyParams.fecha, bodyParams.hijos, bodyParams.seguro);
        return res.send(respuesta);
    }



}