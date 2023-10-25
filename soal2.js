const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["January", "February", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000);
}

function displayMonths(error, months) {
    if (error) {
        console.error('Error:', error.message);
    } else {
        const monthNames = months.map(month => month);
        console.log('List of Months:');
        monthNames.forEach((month, index) => {
            console.log(`${index + 1}. ${month}`);
        });
    }
}

getMonth(displayMonths);