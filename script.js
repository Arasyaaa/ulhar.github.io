//NOMOR 1

function cetakFunction (a){
    return `Halo Nama Saya` + a
}

console.log(cetakFunction(" Arasya"))

//NOMOR 2

let angka1 = 20;
let angka2 = 7;

function myFunction(a,b){
    return a + b;
}
let output = myFunction(angka1, angka2)
console.log(output)

//NOMOR 3

const hello = () =>{
    return a = "halo semua";
}
let our = hello()
console.log("soal no 3");
console.log(our);

//NOMOR 4

let obj = {
    nama : "jhon",
    umur : 22,
    bahasa : "indonesia",

}
    console.log(obj.bahasa)

//NOMOR 5

let arrayDaftarPeserta = ["Jhon doe" , "Laki-laki", "baca buku", 1992]
let objDaftarPeserta ={
    nama : arrayDaftarPeserta[0],
    kelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3],
}
console.log(objDaftarPeserta)

//NOMOR 6

let buah = [
{
    nama: "Nanas",
    warna: "Kuning",
    adaBijinya: "tidak",
    harga: "7000"
},
{
    nama: "Jeruk",
    warna: "Orange",
    adaBijinya: "ada",
    harga: "8000",
},
{
    nama: "Semangka",
    warna: "Kuning",
    adaBijinya: "ada",
    harga: "9000",
},
{
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: "tidak",
    harga: "10000",
}

];

let filterBuah = buah.filter((buah) => buah.adaBijinya === "tidak");
console.log("soal no 6");
console.log(filterBuah);