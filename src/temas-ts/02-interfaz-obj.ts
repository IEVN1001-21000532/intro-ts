
//clase con caracteristicas compartidas
interface Alumno{
    nombre:string;
    edad:number;
    apellido:string;
    genero:string;
    calificacion?:number; //con el ? es opcional el campo 
}
const alumno:Alumno={
    nombre:"ye",
    apellido:"gru",
    edad:20,
    genero:"M",
   
}
console.table(alumno)

let mascotas=['perro','gato','lobo'];

console.log(mascotas[1]);
mascotas[1]='nuevo gato';
console.log(mascotas[1]);
mascotas.push('hamster');
console.log(mascotas);

let tem:(string|number)[]=[];  //declarar arreglos vacios

tem.push(11)
tem.push('YE')

console.log(tem)