import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PacienteController} from "./paciente/paciente.controller";
import {PacienteService} from "./paciente/paciente.service";
import {AutorizacionController} from "./autorizacion.controller";

@Module({
  imports: [],
  controllers: [AppController, PacienteController, AutorizacionController ],
  providers: [AppService, PacienteService],
})
export class AppModule {}
