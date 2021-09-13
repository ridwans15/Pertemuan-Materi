//.let namaKamu = prompt ('Masukkan Nama Kamu ya!')
//.console.log(namaKamu);

//.let asalDaerah = prompt('Masukkan Asal Daerah kamu!')
//.console.log(asalDaerah);

//.let konfirmasi = confirm ("Apakah data yang kamu masukkan sudah benar?")
//.if (konfirmasi = true) {
    //.alert("Terimakasih " + namaKamu)
//.}


function tokoOnline(namaPembeli, namaProduk) {
   return "Terimakasih" + namaPembeli + " telah membeli produk " + namaProduk ;
}
let namaPembeli = prompt("Masukkan nama kamu!")
console.log(namaPembeli)

let namaProduk = prompt("Masukkan nama barang yang kamu beli!")
console.log(namaProduk)

alert(tokoOnline(namaPembeli, namaProduk))