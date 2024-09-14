/*export class Area{
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
FALTAN LOS CONSTRUCTURES E IMPRIMIR, CON UNOS PROTECTED*/
// Clase para calcular el área de diferentes figuras

/*export class Figuras{
   
    constructor(private tipo: string, private area: number, private cal?: number) {
        //super();//lleva un super el constructor porque asi va la estructura 
    }

    calcularArea(): number {
        switch (this.tipo) {
            case 'rectangulo':
                return this.area * (this.cal ?? 0); 
                //aqui si la area2 es 0 o no tiene valor se ponen los ??
                //porque son valores nulos 
            case 'cuadrado':
                return this.area * this.area;
            case 'circulo':
                return Math.PI * this.area * this.area;
            default:
                return 0;
        }
    }
}
*/

export class FigurasA{
    protected base:number;
    protected altura:number; //solo se separan los protected, primero es el pro, despues la funcion de cada figura 
    protected radio:number;
    protected lado:number;

    constructor(base:number, altura:number, lado:number, radio:number) {
        this.base = base;
        this.altura = altura;
        this.radio = radio;
        this.lado = lado;
    }

    areaRectangulo(){
        let areaR; //se declara
        areaR = this.base * this.altura; //aqui se hace el calculo usando los protected
        return areaR;
    }
    areaCirculo(){
        let areaC; //se declara 
        areaC = Math.PI * (this.radio * this.radio); //aqui se hace el calculo usando los protected
        return areaC;
    }
    areaCuadrado(){
        let areaC2; 
        areaC2 = this.lado * this.lado; //aqui se hace el calculo usando los protected
        return areaC2; //por eso se manda a regresar con el return 
    }
}









