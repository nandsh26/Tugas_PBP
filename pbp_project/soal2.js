var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy' 
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
];

let groupedData = {};

for (let data of motoGP) {
    let negara = data.winner.country;
    let namaLengkap = data.winner.firstName + " " + data.winner.lastName;
    let lokasiMenang = data.circuit + ", " + data.location;

    if (!groupedData[negara]) {
        groupedData[negara] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    groupedData[negara].winningCircuits.push({
        name: namaLengkap,
        winLocation: lokasiMenang
    });

    groupedData[negara].totalWin++;
}

console.log("{");
for (let negara in groupedData) {
    console.log(`    ${negara}: {`);
    console.log(`        winningCircuits: [`);
    
    groupedData[negara].winningCircuits.forEach((pemenang, index) => {
        let koma = index === groupedData[negara].winningCircuits.length - 1 ? "" : ",";
        console.log(`            { name: '${pemenang.name}', winLocation: '${pemenang.winLocation}' }${koma}`);
    });

    console.log(`        ],`);
    console.log(`        totalWin: ${groupedData[negara].totalWin}`);
    console.log(`    },`);
}
console.log("}");