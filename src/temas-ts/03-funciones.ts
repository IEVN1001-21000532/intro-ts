function suma(){
   let x=2;
   let y=4;
   let d=x+y
   console.log(d)
}



function resta(a:number, b:number):number{
    return a-b;
}
const res:number=resta(10,3)
console.log(`la resta es  ${res}`);
//CUANDO SE TRANSPILA NO SE PUEDE AVANZAR SI UN ARCHIVO ESTA MAL
//FUNCIONAN COMO UNO MISMO


//tambien podemos pasarles funciones a los objetos 

interface Mascotas{
    name:string;
    edad:number;
    raza:string;
    mostrar:()=>void;
}

function calcular(mascota:Mascotas, x:number):void{
    mascota.edad += x;
    console.log(mascota);
}
const nuevaMascota:Mascotas={
    name:"maicol",
    edad:2,
    raza:"ovejero",
    mostrar(){
        console.log(`hola soy ${nuevaMascota.name} y tengo ${nuevaMascota.edad} años`);
    }
}
calcular(nuevaMascota,4)