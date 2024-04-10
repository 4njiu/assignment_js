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
    const profileContainer = document.getElementById("profilecontainer");
    const graphContainer = document.querySelector("overviewcardsZ");
    const bottonLeftContainer = document.getElementById("leftcard");
    const bottonRightContainer = document.getElementById("rightcard");
    const tableDataContainer = document.getElementById("tableDataContainer");
    // var OverviewDiv = document.createElement("div");
    // overviewcards.appendChild(OverviewDiv);
    // console.log(data.graphContainer.overviewCards[0].class)
    // OverviewDiv.setAttribute("class", data.graphContainer.overviewCards[0].class);

    //current status, ruins my layout

    // const overviewcards = document.createElement("div");
    // graphContainer.appendChild(overviewcards);
    // overviewcards.setAttribute("class", "row");
    // overviewcards.setAttribute("id", "overviewcards");

    // *********** Profile text and pic ***********
    const fullName = document.createElement("div");
    fullName.classList.add("p-2");
    fullName.textContent = data.name;
    profileContainer.appendChild(fullName);
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("p-2");
    const profileImage = document.createElement("img");
    profileImage.setAttribute("src", data.photo);
    profileImage.setAttribute("alt", `profile image of ${data.name}`);
    imageContainer.appendChild(profileImage);
    profileContainer.appendChild(imageContainer);

    // ***********4 Overview Cards***********

    data.graphContainer.overviewCards.forEach((item) => {
      console.log(item);
      const div = document.createElement("div");
      div.className = "card text-center mb-3 mx-3";
      div.style.width = "15rem";
      div.innerHTML = ` <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-number">${item.number}</p>
        </div>`;
      overviewcards.appendChild(div);
    });

    // ***********bottom left card***********

    bottonLeftContainer.innerHTML += `<div class="card-body d-flex flex-column">
        <div class="c-details d-flex d-flex justify-content-between align-items-end">
        <h5 class="mb-0">${data.leftcardtitle}</h5>
         <p class="card-link">View details</p>
        </div>
        <h6>Group:${data.group}</h6>
        </div>`;

    data.bottomLeftTable.forEach((item) => {
      const tableRow = document.createElement("tr");

      tableRow.innerHTML = `
            <td class="pl-0">${item.status}</td>
            <td class="pr-0 text-right">
                <div class="rightsideText">${item.count}</div>
            </td>
        `;
      tableDataContainer.appendChild(tableRow);
    });

    // ***********bottom right card***********
    rightcard.innerHTML += `<div class="card-body d-flex flex-column ">
                            <div class="c-details d-flex d-flex justify-content-between align-items-end">
                                <h5 class="mb-0">${data.bottomRightTable.title}</h5>
                                <p class="card-link">${data.bottomRightTable.btn}</p>
                            </div>
                            <h6>${data.bottomRightTable.day}</h6>
                        </div>`;

    const unorderList = document.createElement("ul");
    unorderList.classList.add("list-group");

    data.bottomRightTable.tasklist.forEach((item) => {
      if (item.status == "inactive") {
        unorderList.innerHTML += `<li class="list-group-item">
                                <p>${item.task}</p>
                                <img src=${item.src} alt="create button">
            </li>`;
      } else {
        let cardStatus = "";
        if (item.status == "URGENT") {
          cardStatus = "text-bg-warning";
        }
        if (item.status == "NEW") {
          cardStatus = "text-bg-success";
        }
        if (item.status == "DEFAULT") {
          cardStatus = "text-bg-light";
        }
        unorderList.innerHTML += `<li class="list-group-item">
        <div>
            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                id="firstRadio" checked>
            <label class="form-check-label" for="firstRadio">${item.task}</label>
        </div>

        <span class="badge ${cardStatus}">${item.status}</span>
    </li>`;
      }
    });
    bottonRightContainer.appendChild(unorderList);
  } catch (error) {
    console.warn(`Nope: ${error}`);
  }
}

// Call the async function
myFunction();
