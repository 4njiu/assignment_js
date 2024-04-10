console.log("test");

async function myFunction() {
    try {
        const response = await fetch("../data/content.json");
        const data = await response.json();

        // Extracting data from the JSON object
        const { toolbar, overviewCards, bottomLeftTable } = data;
        console.log(toolbar);
        console.log(overviewCards);
        console.log(bottomLeftTable);

        // You can perform additional operations here with the fetched data

    } catch (error) {
        console.warn(`Nope: ${error}`);
    }
}

// Call the async function
myFunction();