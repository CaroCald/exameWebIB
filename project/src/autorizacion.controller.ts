import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";

@Controller('Autorizacion')
export class  AutorizacionController {

    @Post('iniciarSesion')
    iniciarSesion(@Body() bodyParams, @Res() response, @Req() request){
        if(bodyParams.usuario=='andrianeguez' && bodyParams.password=='12345678910'){
            const valorCookie={
                valor: 'andrianeguez',
                nombre:'token'
            };
            return response.cookie(valorCookie.nombre, valorCookie.valor).send({
                mensaje: 'OK'

            });
        }
    }
    @Get('iniciarSesion')
    iniciarSesionCookie(@Res() response){
        const valorCookie={
            valor: 'andrianeguez',
            nombre:'token'
        };

        return response.cookie(valorCookie.nombre, valorCookie.valor).send();
    }

    @Post('cerrarSesion')
    cerrarSesion(@Req() request, @Res() response){
        const nombreCookie = request.cookies= 'undefined';
        console.log(nombreCookie);
        return response.cookie(nombreCookie).send({
            mensaje:'USTED SALIO DEL SISTEMA'
        });

    }
}