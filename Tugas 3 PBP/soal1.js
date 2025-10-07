let anggota = (nama, umur, tempat, tabungan) => {
    let pangkat = "";

    if (umur > 40 && (tempat == "Nevada" || tempat == "New York" || tempat == "Havana") && tabungan > 10000000) {
        pangkat = "Don";
    }
    else if (umur >= 25 && umur <= 40 && (tempat == "New Jersey" || tempat == "Manhattan" || tempat == "Nevada") && (tabungan >= 1000000 && tabungan <= 2000000)) {
        pangkat = "Underboss";
    }
    else if (umur >= 18 && umur <= 24 && (tempat == "California" || tempat == "Detroit" || tempat == "Boston") && tabungan < 1000000) {
        pangkat = "Capo";
    }

    if (pangkat != "") {
        return `${nama} kemungkinan adalah seorang anggota mafia dengan pangkat ${pangkat}.`;
    } else {
        return `${nama} tidak mencurigakan.`;
    }
};

console.log(anggota("Nanda", 21, "Indonesia", 1000000));   
console.log(anggota("Memey", 19, "Boston", 12500)); 
console.log(anggota("Ucup", 53, "New York", 50000000));
console.log(anggota("Acep", 38, "Manhattan", 1600000)); 