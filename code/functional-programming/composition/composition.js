
// ============== COMPOSITION - COMPOSICION ============
/*
- La composicion es el arte de construir funciones grandes a traves de 
    funciones mas pequeñas

- Al manejar funciones el codigo es mas intuitivo asi sea una composicion grande

- Se podrian crear composiciones muy grandes y entenderlas ya que estan creadas de 
    otras mas pequeñas y tambien emtendibles.
*/


const _ = require('lodash')
//import { upperFirst } from 'lodash'

const users = [
    { id: 1, nombre: 'Andres', apellido: 'Giraldo' }
]


// FUNCION SIN COMPOSICION 
/* 
Codigo ejemplo de una funcion grande y poco entendible por que 
hace varias tareas dentro de ella
*/

const getNombreCompletoSinComposicion = (_users) => {
    const primero = _users[0]
    const capitalizados = {
        nombre: _.upperFirst(primero.nombre),
        apellido: _.upperFirst(primero.apellido),
    }
    return `${capitalizados.nombre} ${capitalizados.apellido}`
}

const x = getNombreCompletoSinComposicion(users)
console.log(`Nombre generado con funcion sin composicion: ${x}`);



// FUNCION CON COMPOSICION 
/* 
- Codigo ejemplo de una funcion con composicion de funciones mas pequeñas

- Funciones pequeñas
    1. Get the first value of the array
    2. Capitalized name 
    3. Generate name
    3. Get full name
    4. Printer
*/

// 1. Get the first value of the array
const head = x => x[0]

// 2. Capitalized name
const capitalized = x => ({
    nombre: _.upperFirst(x.nombre),
    apellido: _.upperFirst(x.apellido)
})

// 3. Generate name
const generateName = x => `${x.nombre} ${x.apellido}`

// 4. Get full name
const getFullName = (_users) => {
    const nombreApellido = head(_users)
    const capitalizados = capitalized(nombreApellido)
    return generateName(capitalizados)
}

// 5. Printer
const xComp = getFullName(users)
console.log(`Nombre generado con composicion: ${xComp}`);