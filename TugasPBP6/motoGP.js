const http = require('http');
const port = 8000;

const motoGP = [
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
    }
];

// Membuat server HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200);
    //menampilkan semua data motoGP
    if (req.url == '/') {
        res.end(JSON.stringify(motoGP, null, 2));
    } 
    //menampilkan data berdasarkan negara pemenang
    else if (req.url == '/country') {
        const kelomNegara = {};
        motoGP.forEach(item => {
            const country = item.winner.country;
            if (!kelomNegara[country]) kelomNegara[country] = [];
            kelomNegara[country].push(item);
        });
        res.end(JSON.stringify(kelomNegara, null, 2));
    } 
    //menampilkan data berdasarkan nama pemenang
    else if (req.url == '/name') {
        const kelomNama = {};
        motoGP.forEach(item => {
            const name = `${item.winner.firstName} ${item.winner.lastName}`;
            if (!kelomNama[name]) kelomNama[name] = [];
            kelomNama[name].push(item);
        });
        res.end(JSON.stringify(kelomNama, null, 2));
    } 
    //url tidak sesuai
    else {
        res.end('Bad Request');
    }
}).listen(port,() => {
    console.log(`Server is listening on port ${port}`);
});