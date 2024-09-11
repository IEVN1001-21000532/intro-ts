interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles; //podemos crear interfaz con otra interfaz dentro
    //una interfaz y una creacion de un objeto normal 
}
interface Detalles{
    autor:string;
    year:number;
}
const reproductor:Reproductor={
    volumen:50,
    segundo:30,
    cancion:"Navigating",
    detalles:{
        autor:"Twenty one Pilots",
        year:1500
    }
}
//para ver el objeto, nombre y su propiedad 
//la propiedad pertenece a otra itefaz
// si hay una tercera, solo se agregan mas puntos hasta llegar 
//hay otra forma: restructuracion de objetos ::
//esta es la normal

/* console.log(`el volumen actual es: ${reproductor.volumen}`)
console.log(`los segundos son: ${reproductor.segundo}`)
console.log(`la cancion es: ${reproductor.cancion}`)
console.log(`el cantante es: ${reproductor.detalles.autor}`)
console.log(`el año es: ${reproductor.detalles.year}`) */

//esta es la desstructura, asi ya no se usan tantos puntos 
const {volumen,segundo, cancion, detalles}=reproductor;
const {autor, year}=detalles;
console.log(`el volumen actual es: ${volumen}`)
console.log(`los segundos son: ${segundo}`)
console.log(`la cancion es: ${cancion}`)
console.log(`el cantante es: ${autor}`)
console.log(`el año es: ${year}`)

//tambien se puede aplicar a los arreglos

const dbz:string[]=['Coraline','Veldam','Bobisky','spink']
console.log(`personaje 1: ${dbz[0]}`)
console.log(`personaje 2: ${dbz[1]}`)
console.log(`personaje 3: ${dbz[2]}`)
console.log(`personaje 4: ${dbz[3]}`)

const[a,,b,c]=dbz;
console.log(`personaje 1: ${a}`)
console.log(`personaje 2: ${b}`)
console.log(`personaje 3: ${c}`)
