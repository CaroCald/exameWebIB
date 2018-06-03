import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PacienteController} from "./paciente/paciente.controller";
import {PacienteService} from "./paciente/paciente.service";
import {AutorizacionController} from "./autorizacion.controller";
import {MedicamentoController} from "./medicamentos/medicamentos.controlller";
import {MedicamentoService} from "./medicamentos/medicamentos.service";

@Module({
  imports: [],
  controllers: [AppController, PacienteController, AutorizacionController , MedicamentoController],
  providers: [AppService, PacienteService, MedicamentoService],
})
export class AppModule {}
