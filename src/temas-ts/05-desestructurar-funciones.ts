export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto={
    desc:"telefono N",
    precio:1000
}
const tablet:Producto={
    desc:"table N",
    precio:500
}
function calcularIVA( productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}
const articulos1=[telefono,tablet];
const iva1=calcularIVA(articulos1)
console.log(iva1)


//ES UN USO NORMAL DE LA FUNCION, NO ES DESTRUCTURACION
//se hacen las mismas propiedades y los mismos objetos 
//despues una funcion para sacar el iva con un arreglo de objetos
//se tiene una variable y se pone un foreach

//abajo se crea un arreglo con los objetos, le pasamos la funcion para que nos
//regrese el monto de la variable 


//DESTRUCTURACION
export function calcularIVA2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total,total*0.16]
}
const articulos2=[telefono,tablet]
const [total,iva2]=calcularIVA2(articulos2)
console.log(`total: ${total}`)
console.log(`IVA: ${iva2}`)
