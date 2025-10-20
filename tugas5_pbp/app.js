const readline = require('readline'); //untuk menampung input dari user

//mengimpor modul konversi
const {abjadKeAngka} = require('./konversi/folder1/abjadKeAngka');
const {angkaKeBiner} = require('./konversi/folder1/folder2/angkaKeBiner');
const {binerKeHexa} = require('./konversi/folder1/folder2/folder3/binerKeHexa');
const {hexaKeAscii} = require('./konversi/folder1/folder2/folder3/folder4/hexaKeAscii');

//membuat interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//menanyakan inputan kepada user
rl.question("Masukkan teks yang ingin dikonversi: ", (input) => {
  const angka = abjadKeAngka(input);
  const biner = angkaKeBiner(angka);
  const hex = binerKeHexa(biner);
  const ascii = hexaKeAscii(hex);

//menampilkan hasil konversi
  console.log("\n~~~ HASIL KONVERSI ~~~");
  console.log("Input:", input);
  console.log("Abjad ke Angka:", angka);
  console.log("Angka ke Biner:", biner);
  console.log("Biner ke Hexa:", hex);
  console.log("Hexa ke ASCII:", ascii);

  rl.close(); //menutup interface readline
});