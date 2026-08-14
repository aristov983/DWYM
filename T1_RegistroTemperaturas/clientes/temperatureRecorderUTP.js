import dgram from 'node:dgram';
import {Buffer} from 'node:buffer';

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomTemperature = ()=>{return Math.floor(Math.random()*60)}

console.log(getRandomTemperature())