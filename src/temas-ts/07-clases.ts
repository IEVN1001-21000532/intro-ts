class Persona{
nombre:string;
edad:number;
constructor(nombre1:string, edad1:number,){
    this.nombre=nombre1;
    this.edad=edad1;
}
imprimir():void{
    console.log(`holaa, me llamo: ${this.nombre} y tengo ${this.edad}`);
    
}
}
let persona1 = new Persona('Ye', 30);
console.log(persona1)
