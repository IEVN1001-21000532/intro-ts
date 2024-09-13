

import {Area} from "./09-areas.ts";

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

