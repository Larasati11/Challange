class Lingkaran{
    constructor(phi,d,r){
        this.phi = phi;
        this.diameter = d;
        this .jari = r;
    }
    jarijari(){
        return this.diameter/2;
    }
    luas(){
        return this.phi*this.jari*this.jari;
    }
    keliling(){
        return 2*this.phi*this.jari;
    }

    cetakPropert(){
        console.log(`phi\t:${this.phi}`);
        console.log(`Diameter\t:${this.diameter}`);
        console.log(`Jari jari\t:${this.jari}`);

    }
}
class Tabung extends Lingkaran{
    constructor(phi,d,r,t,){
        super(phi,d,r);
        this.tinggi = t;  
    }
    cetakPropert(){
        super.cetakPropert();
    }
    Volumetabung(){
        return 1/3*this.phi*this.jari*this.jari*this.tinggi;
    }
    Luaspermukaan(){
        return (this.phi*this.jari*this.jari)+(2*this.phi*this.jari*this.tinggi);
    }
    Luasselimut(){
        return 2*this.phi*this.jari*this.tinggi;

}   
}
console.log("----TABUNG----");
const phi = 3.14;
console.log("Phi:"+phi);
let d = 15;
console.log("Diameter:"+d);
let r = d/2;
let t = 50;
console.log("Tinggi:"+t);

let obj= new Tabung(phi,d,r,t);

console.log(`Jari Jari\t:${obj.jarijari()}`);
console.log(`Volume \t:${obj.Volumetabung()}`);
console.log(`Luas Permukaan\t:${obj.Luaspermukaan()}`);
console.log(`Luas Selimut\t:${obj.Luasselimut()}`);

        
