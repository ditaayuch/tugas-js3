// const inventory = {
//     sepatu: 10,
//     sandal: 5,
//     tas: 3,
// };

checkInventory = async (item, quantity) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const inventory = {
                sepatu: 10,
                sandal: 5,
                tas: 3,
            };
            if (inventory[item] >= quantity) {
                resolve(`Stok barang ${item} mencukupi.`);
            } else {
                reject(`Stok barang ${item} tidak mencukupi.`);
            }
        }, 1000);
    });
}

purchaseItem = async (item, quantity) => {
    try {
        const message = await checkInventory(item, quantity);
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

purchaseItem('sepatu', 3);
purchaseItem('sandal', 7);
purchaseItem('tas', 2);