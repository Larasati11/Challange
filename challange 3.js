var b = 90;
console.log("Berat Badan ="+b);
var t = 1.7;
console.log("Tinggi Badan ="+t);
var BMI;
BMI = b/(t*t);
console.log(`${b}/(${t}*${t})=${BMI}`);

if (BMI<18.5){
    console.log('Kekurangan Berat Badan');
}else if (BMI<=24.9){
    console.log('Ideal');
}else if (BMI<=29.9){
    console.log('Kelebihan Berat Badan');
}else (BMI>=30.0)
    console.log('Obesitas');
