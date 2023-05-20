//add your js code here
const baseUrl = `https://jsonmock.hackerrank.com/api/football_matches`;

const tableBody = document.querySelector("tbody");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");


const apiFetchData = async () => {
    try {
        const apiResponse = await fetch(baseUrl);
        const fetchedData = await apiResponse.json();
        
        data = fetchedData.data

        displayData(data)
    } catch (error) {
        console.log(error.message);
    }
}

apiFetchData();


const displayData = (data) => {
    tableBody.innerHTML = "";

    data.forEach(el => {
        let row = document.createElement("tr");

        let competition = document.createElement("td");
        competition.textContent=el.competition;

        let year = document.createElement("td");
        year.textContent=el.year;

        let round = document.createElement("td");
        round.textContent=el.round;

        let team1 = document.createElement("td");
        team1.textContent=el.team1;

        let team2 = document.createElement("td");
        team2.textContent=el.team2;

        let team1Goals = document.createElement("td");
        team1Goals.textContent=el.team1goals;

        let team2Goals = document.createElement("td");
        team2Goals.textContent=el.team2goals;

        row.append(competition,year,round,team1,team2,team1Goals,team2Goals);

        tableBody.appendChild(row);
    });
}

// Pagination 
let count = 1;
nextButton.addEventListener("click", (e)=>{
    count++;
    prevAndNextFetchData();
})

const prevAndNextFetchData = async () => {
    try {
        const apiResponse = await fetch(`${baseUrl}?page=${count}`);
        const fetchedData = await apiResponse.json();
        data = fetchedData.data
        displayData(data);
    } catch (error) {
        console.log(error.message);
    }
}

prevButton.addEventListener("click", () =>{
    count--;
    prevAndNextFetchData();
})

// Moving Filter Page
function pageChanging () {
    window.location.href= "../filter.html";
} 
