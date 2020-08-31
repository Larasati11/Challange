let bayar = function(p,l,harga,PPN){
    return (p*l*harga)+(p*l*harga*PPN);
            
        
    }


let p = 20.5;
console.log("Panjang:"+p);
let l = 30;
console.log("Lebar:"+l);
let harga = 1500000;
console.log("Harga per meter persegi:"+harga);
let PPN = 0.15;
console.log("PPN:"+PPN);

let jumlah = bayar(p,l,harga,PPN);
console.log("Total Bayar =" + `(${p}*${l}*${harga})+(${p}*${l}*${harga}*${PPN})
=${jumlah}`);
