console.log("test");

async function myFunction() {
    try {
        const response = await fetch("../data/content.json");
        const data = await response.json();

        // Extracting data from the JSON object
        // const { toolbar, overviewCards, bottomLeftTable } = data;
        // console.log(overviewCards);
        // console.log(bottomLeftTable);

        // You can perform additional operations here with the fetched data
    // const toolBarz = document.querySelector("");
    const name = document.getElementById('name');
    const graphContainer = document.querySelector("overviewcardsZ");
    // var OverviewDiv = document.createElement("div");
    // overviewcards.appendChild(OverviewDiv);
    // console.log(data.graphContainer.overviewCards[0].class)
    // OverviewDiv.setAttribute("class", data.graphContainer.overviewCards[0].class);

    //current status, ruins my layout

    // const overviewcards = document.createElement("div"); 
    // graphContainer.appendChild(overviewcards);
    // overviewcards.setAttribute("class", "row");
    // overviewcards.setAttribute("id", "overviewcards");

// ******************4 Overview Cards******************

    data.graphContainer.overviewCards.forEach(item=>{
        console.log(item)
        const div = document.createElement('div');
        div.className = 'card text-center mb-3 mx-3';
        div.style.width = '15rem';
        div.innerHTML = ` <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-number">${item.number}</p>
        </div>`
        overviewcards.appendChild(div);
    
    
    
    
    }
        );
    data.bottomLeftTable.statuses.forEach(item=>{
    }
        
        )

    // var bottomcards = document.getElementById("bottomcards");
    // var bottomDiv = document.createElement("div"); 
    // bottomcards.appendChild(bottomDiv);
    // bottomDiv.setAttribute("class", "bottomLeftTable  mb-3");





    // var cardBody = document.createElement("div");
    // cardBody



    // foobar.mainNav.forEach(menuitem =>{
    //     console.log(menuitem);
    //     var listItem = document.createElement('li');

    //     listItem.innerHTML = `<a href="${menuitem.url}>" ${menuitem.text}</a>`;
    //     navHolder.appendChild(listItem)

    // })

    } catch (error) {
        console.warn(`Nope: ${error}`);
    }
}

// Call the async function
myFunction();