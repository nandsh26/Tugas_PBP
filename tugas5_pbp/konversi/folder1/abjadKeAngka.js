//untuk mengonversi abjad ke angka
function abjadKeAngka(teks) { 
  teks = teks.toUpperCase();
  const hasil = [];
  for (let char of teks) {
    if (char >= 'A' && char <= 'Z') {
      hasil.push(char.charCodeAt(0) - 64); 
    }
  }
  return hasil;
}

module.exports = {abjadKeAngka};
