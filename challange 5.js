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
}
console.log("----LINGKARAN----");
const phi = 3.14;
console.log("Phi:"+phi);
let d = 30;
console.log("Diameter:"+d);
let r = d/2;

let obj= new Lingkaran(phi,d,r);

console.log(`Jari Jari\t:${obj.jarijari()}`);
console.log(`Luas\t:${obj.luas()}`);
console.log(`Keliling\t:${obj.keliling()}`);

class Bola{
    constructor(phi2,d2,r2){
        this.phi = phi2;
        this.diameter = d2;
        this .jari = r2;
    }
    jarijari(){
        return this.diameter/2;
    }
    Volumebola(){
        return 4/3*this.phi*this.jari*this.jari*this.jari;
    }
    Luaspermukaan(){
        return 4*this.phi*this.jari*this.jari;
    }
}
console.log("----BOLA----");
const phi2 = 3.14;
console.log("Phi:"+phi2);
let d2 = 30;
console.log("Diameter:"+d2);
let r2 = d2/2;

let obj2= new Bola(phi2,d2,r2);

console.log(`Jari Jari\t:${obj2.jarijari()}`);
console.log(`Volume \t:${obj2.Volumebola()}`);
console.log(`Luas Permukaan\t:${obj2.Luaspermukaan()}`);

class Kerucut{
    constructor(phi3,d3,r3,t,s,p){
        this.phi = phi3;
        this.diameter = d3;
        this.jari = r3;
        this.tinggi = t;
        this.sisi = s;
        this.pelukis = p;
    }
    Jarijari(){
        return 1/2*this.diameter;
    }
    Volumekerucut(){
        return 1/3*this.phi*this.jari*this.jari*this.tinggi;
    }
    Luaspermukaan(){
        return (4*this.sisi)-(this.phi*this.jari*this.jari)+(this.phi*this.jari*this.pelukis);
    }
    Luasselimut(){
        return this.phi*this.jari*this.pelukis;
    }

}
console.log("----KERUCUT----");
const phi3 = 3.14;
console.log("Phi:"+phi3);
let d3 = 20;
console.log("Diameter:"+d3);
let r3 = d3/2;
let t = 40;
console.log("Tinggi:"+t);
let s = 20;
console.log("Sisi Alas:"+s);
let p = 41;
console.log("Pelukis:"+p);

let obj3= new Kerucut(phi3,d3,r3,t,s,p);

console.log(`Jari Jari\t:${obj3.Jarijari()}`);
console.log(`Volume \t:${obj3.Volumekerucut()}`);
console.log(`Luas Permukaan\t:${obj3.Luaspermukaan()}`);
console.log(`Luas Selimut\t:${obj3.Luasselimut()}`);

class Tabung{
    constructor(phi4,d4,r4,t4,s,p){
        this.phi = phi4;
        this.diameter = d4;
        this.jari = r4;
        this.tinggi = t4;
    }
    Jarijari(){
        return 1/2*this.diameter;
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
const phi4 = 3.14;
console.log("Phi:"+phi4);
let d4 = 15;
console.log("Diameter:"+d4);
let r4 = d4/2;
let t4 = 50;
console.log("Tinggi:"+t4);

let obj4= new Tabung(phi4,d4,r4,t4);

console.log(`Jari Jari\t:${obj4.Jarijari()}`);
console.log(`Volume \t:${obj4.Volumetabung()}`);
console.log(`Luas Permukaan\t:${obj4.Luaspermukaan()}`);
console.log(`Luas Selimut\t:${obj4.Luasselimut()}`);
