//untuk mengonversi array biner ke heksa
function binerKeHexa(arrayBiner) {
  return arrayBiner.map(bin => parseInt(bin, 2).toString(16).toUpperCase());
}

module.exports = {binerKeHexa};