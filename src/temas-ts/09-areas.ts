export class Area{
   protected areaRec(base: number, altura:number):number{
        return base * altura;
    }
   protected areaCuadrado(lado:number):number{
        return lado * lado;
    }
   protected areaCir(radio: number):number{
        return Math.PI * radio * radio;
    }
}

const area = new Area();
console.log(`el area del rectangulo es: ${area.areaRec(2,13)}`);
console.log(`el area del cuadrado es: ${area.areaCuadrado(20)}`);
console.log(`el area del circulo es: ${area.areaCir(5)}`);
