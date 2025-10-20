//untuk mengonversi array angka ke biner
function angkaKeBiner(arrayAngka) {
  return arrayAngka.map(num => num.toString(2));
}

module.exports = {angkaKeBiner};