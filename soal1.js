const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja('minggu')
    .then((hasil) => {
        console.log(`Semangat kerja! Hari ini ${hasil}!`);
    })
    // jika parameter yang dimasukkan ada dalam array dataDay, 
    // maka akan menjalankan proses resolve dan menampilkan message "Semangat kerja! Hari ini senin"
    
    .catch((error) => {
        console.error(`Terjadi kesalahan: ${error.message}`);
    });
    //jika parameter yang dimasukkan tidak ada dalam array dataDay, 
    // maka program akan menangkap error dan menampilkan message "Terjadi kesalahan"

// cekHari = async (hari) => {
//     try {
//         const hasil = await cekHariKerja(hari);
//         console.log(`Semangat Kerja! Hari ini ${hasil}`);
//     } 
//         // jika parameter yang dimasukkan ada dalam array dataDay, 
//         // maka akan menjalankan proses resolve dan menampilkan message "Semangat kerja! Hari ini senin"

//     catch (error) {
//         console.log(`Terjadi kesalahan: ${error.message}`);
//     }
//         //jika parameter yang dimasukkan tidak ada dalam array dataDay,
//         // maka program akan menangkap error dan menampilkan message "Terjadi kesalahan"
// }

// cekHari('senin');