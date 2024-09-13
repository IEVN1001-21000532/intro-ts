class Persona3{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log("nombre:" + this.nombre+ "edad: " + this.edad);
    }
}

class Empleado extends Persona3{
    private sueldo:number;
    constructor(nombre:string,edad:number,sueldo:number){
        {
            super(nombre,edad);
            this.sueldo=sueldo;
        }
    }
    imprimir():void{
        console.log(`sueldo ${this.sueldo}`)
    }
    pagarImpuesto(){
        if(this.sueldo >5000)
            console.log(`${this.nombre} debe pagar `);
        else
        console.log(`${this.nombre} no paga`);
    }
}

const persona3=new Persona3('ye',20);
persona3.imprimir();

const empleado1=new Empleado('oli',20,2003)
empleado1.imprimir();
empleado1.pagarImpuesto();
//en este codigo se pasa del hijo al padre 

//una clase que permite calcular la area del rectangulo, cuadrado y circulo, despues en otro archivo
// usando herencia otra clase que calcule el volumen prisma, piramide y cilindro 
//donde el padre sea la clase que calcule el area y el hijo el volumen

