//untuk mengonversi array heksa ke abjad ASCII
function hexaKeAscii(arrayHexa) {
  return arrayHexa.map(hexa => {
    const num = parseInt(hexa, 16);
    return String.fromCharCode(num + 64); 
  });
}

module.exports = {hexaKeAscii};
