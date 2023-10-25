const getName = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        data.map((item) => {
            console.log(item.name);
        });;
    } catch (error) {
        console.error(`Error to get name: ${error}`);
    }
}

getName();