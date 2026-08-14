import dgram from 'node:dgram';
import {Buffer} from 'node:buffer';

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const datos = {
    temperatura: 21,
    hora:0,
    minuto:0,
    segundo:0,
    dia:0,
    mes:0,
    anio:0,
}

function actualizarDatos(){
    const tiempo = new Date(); //Nota: Esto va adentro de la función porque se actualiza cuando se invoca.
    datos.temperatura+=Math.random() * 0.2-0.1;
    datos.hora = tiempo.getHours();
    datos.minuto = tiempo.getMinutes();
    datos.segundo = tiempo.getSeconds();
    datos.dia = tiempo.getDate(); //getDay() devuelve el día de la semana, es getDate()
    datos.mes = tiempo.getMonth()+1;
    datos.anio = tiempo.getFullYear();
}

actualizarDatos();
console.log(datos);