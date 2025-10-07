let selProg = (nilaiCod, nilaiInter) => {
    let hasilCod;
    let hasilInter;
    let hasilAkhir;

    if (nilaiCod >= 80 && nilaiCod <= 100) {
        hasilCod = "LOLOS";
    } else if (nilaiCod >= 60 && nilaiCod < 80) {
        hasilCod = "DIPERTIMBANGKAN";
    } else if (nilaiCod >= 0 && nilaiCod < 60) {
        hasilCod = "GAGAL";
    } else {
        hasilCod = "NILAI TIDAK VALID";
    }

    if (nilaiInter == "A" || nilaiInter == "B") {
        hasilInter = "LOLOS";
    } else if (nilaiInter == "C" || nilaiInter == "D") {
        hasilInter = "GAGAL";
    } else {
        hasilInter = "NILAI TIDAK VALID";
    }

    if (hasilCod == "LOLOS" || hasilCod == "DIPERTIMBANGKAN") {
        if (hasilInter == "LOLOS") {
            hasilAkhir = `Hasil tes coding kamu ${hasilCod} dan hasil interview ${hasilInter}. Maka dari itu kami ucapkan "Selamat Kamu Berhasil Menjadi Calon Programmer!!"`;
        } else {
            hasilAkhir = `Karena hasil tes coding kamu ${hasilCod} dan hasil interview ${hasilInter}. Maka dari itu "Maaf Kamu Belum Berhasil Menjadi Calon Programmer"`;
        }
    } else {
        hasilAkhir = `Karena hasil tes coding kamu ${hasilCod} dan hasil interview ${hasilInter}. Maka dari itu "Maaf Kamu Belum Berhasil Menjadi Calon Programmer"`;
    }

    return hasilAkhir;
};

console.log(selProg(85, "A"));  
console.log(selProg(70, "B"));  
console.log(selProg(55, "A"));  
console.log(selProg(90, "C"));  