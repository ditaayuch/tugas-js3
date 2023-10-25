

const cekAnggotaTim = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const teamMembers = [
                { userId: 1, name: "dita", team: "tim 1 IT" },
                { userId: 2, name: "guntur", team: "tim 1 IT" },
                { userId: 3, name: "dzaki", team: "tim 1 IT" },
                { userId: 4, name: "fauzi", team: "tim 1 IT" }
            ];
            const user = teamMembers.find((user) => user.name === name);
            if (user && user.team === "tim 1 IT") {
                resolve(name);
            } else {
                reject(new Error("Anda bukan anggota tim 1 IT"));
            }
        }, 1000);
    });
}

cekAnggotaTim("dita")
    .then((res) => {
        console.log(`Selamat datang ${res}!`);
    })
    .catch((error) => {
        console.error(`Terjadi kesalahan: ${error.message}`);
    });