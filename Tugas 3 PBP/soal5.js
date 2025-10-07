let disneyIsland = (umur, tinggi) => {
    let tarif;

   if (umur <=1){
            tarif = `Karena umur Anda ${umur} tahun dan tinggi ${tinggi} cm. Maka, mohon maaf Anda Dilarang Masuk!!`;
        }
        else if(umur <=3 ){
            tarif = 30000;
            if ((umur >=2 && umur <=3)&& tinggi >=70){
            tarif += 10000;
            tarif = `Karena umur Anda ${umur} tahun dan tinggi ${tinggi} cm. Tarif Anda Telah Bertambah, Karena Tinggi Badan Anda Melebihi 70 cm. Maka, total tarif Anda: Rp. ${tarif}.`;
        }
            else{
                tarif = `Karena umur Anda ${umur} tahun dan tinggi ${tinggi} cm. Maka, tarif Anda: Rp. ${tarif}.`;
            }   
        }
        else if (umur <=7){
            tarif = 40000;
            if ((umur >=4 && umur <=7)&& tinggi>=120){
            tarif += 15000;
            tarif = `Karena umur Anda ${umur} tahun dan tinggi ${tinggi} cm. Tarif Anda Telah Bertambah, Karena Tinggi Badan Anda Melebihi 120 cm. Maka, total tarif Anda: Rp. ${tarif}.`;
        }
            else{
                tarif = `Karena umur Anda ${umur} tahun dan tinggi ${tinggi} cm. Maka, tarif Anda: Rp. ${tarif}.`;
            }
        }
        else if (umur <=10){
            tarif = 50000;
            if ((umur >=8 && umur <=10) && tinggi>=150){
            tarif += 20000;
            tarif = `Karena umur Anda ${umur} tahun dan tinggi ${tinggi} cm. Tarif Anda Telah Bertambah, Karena Tinggi Badan Anda Melebihi 150 cm. Maka, total tarif Anda: Rp. ${tarif}.`;
        }
            else{
                tarif = `Karena umur Anda ${umur} tahun dan tinggi ${tinggi} cm. Maka, tarif Anda: Rp. ${tarif}`;
            }
        }
        else if (umur > 10){
            tarif = 80000;
            tarif = `Karena umur Anda ${umur} tahun dan tinggi ${tinggi} cm. Maka, Tarif Anda: Rp. ${tarif}`;
        }
        return tarif;
    }

console.log(disneyIsland(0.5, 60));
console.log(disneyIsland(2, 75));
console.log(disneyIsland(12, 140));