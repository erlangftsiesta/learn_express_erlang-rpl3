const express = require('express'); //Ini express buat bla bla bla
const app = express();
const PORT = 5511;

app.get('/', (req, res) => {
    res.send("INI HALAMAN");
    console.log("WOI HALAMAN")
})

app.listen(PORT, () => {
    console.log('woi konek di port: ', PORT)
})
