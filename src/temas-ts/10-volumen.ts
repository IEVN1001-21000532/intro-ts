

/*import {Area} from "./09-areas.ts";

class Volumen extends Area{
    volumenPris(base:number,altura:number, profundidad:number): number{
        return this.areaRec(base, altura) * profundidad;

    }
    volumenPira(base:number, altura:number, profundidad:number):number{
        return (this.areaRec(base,altura)*profundidad)/3;
    }
    volumenCili(radio:number, altura:number):number{
        return this.areaCir(radio) * altura;
    }

}
const volumen = new Volumen();
console.log(`volumen del prisma: ${volumen.volumenPris(4,10,4)}`);
console.log(`volumen del cilindro: ${volumen.volumenCili(3,5)}`);
console.log(`volumen de la piramide: ${volumen.volumenPira(4,7,10)}`);
AQUI SE HACE LA HERENCIA PERO FALTAN LOS CONSTRUCTORES */

import {FigurasA} from "./09-areas.ts";
class Volumen extends FigurasA{
    private altura2:number;
   constructor(base:number, altura:number, lado:number, radio:number, altura2:number){
    super(base, altura, lado, radio); //aqui se pasan los valores de la herencia 
    this.altura2=altura2;
     //solo se ponen los parametros ya que se estan 
    //poniendo primero en el constructor
   }
   volumenP():void{
    let volPr = this.areaRectangulo() * this.altura2;
    console.log(`area del prisma: ${volPr}`)
   }
   volumenPira():void{
    let volPi = this.areaCuadrado() * this.altura2;
    console.log(`area de la piramide: ${volPi}`)
   }
   volumenCili():void{
    let volCil = this.areaCirculo() * this.altura2;
    console.log(`area de la piramide: ${volCil}`)
   }

}

console.log("areas");
const area = new FigurasA(4,7,8,10);
console.log(`area del rectangulo: ${area.areaRectangulo()}`);
console.log(`area del cuadrado: ${area.areaCuadrado()}`);
console.log(`area del circulo: ${area.areaCirculo()}`);



const volumenes = new Volumen (10,8,5,1,7);
volumenes.volumenPira();
volumenes.volumenP();
volumenes.volumenCili();
/*const prisma = new Figuras2('prisma', rectangulo, 10);
console.log(`Volumen del prisma: ${volumen.areaRectangulo()}`);

const piramide = new Figuras2('piramide', cuadrado, 6);
console.log(`Volumen de la piramide: ${piramide.calcularVolumen()}`);

const cilindro = new Figuras2('cilindro', circulo, 7);
console.log(`Volumen del cilindro: ${cilindro.calcularVolumen()}`);

*/


