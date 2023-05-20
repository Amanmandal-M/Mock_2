//add your js code here

const baseUrl = `https://jsonmock.hackerrank.com/api/football_matches`;

const tableBody = document.querySelector("tbody");
const yearChange = document.querySelector("#year");
const team1Change = document.querySelector("#team1");
const team2Change = document.querySelector("#team2");

const apiFetchData = async () => {
  try {
    const apiResponse = await fetch(baseUrl);
    const fetchedData = await apiResponse.json();

    data = fetchedData.data;

    displayData(data);
  } catch (error) {
    console.log(error.message);
  }
};

apiFetchData();

const displayData = (data) => {
  tableBody.innerHTML = "";

  data.forEach((el) => {
    let row = document.createElement("tr");

    let competition = document.createElement("td");
    competition.textContent = el.competition;

    let year = document.createElement("td");
    year.textContent = el.year;

    let round = document.createElement("td");
    round.textContent = el.round;

    let team1 = document.createElement("td");
    team1.textContent = el.team1;

    let team2 = document.createElement("td");
    team2.textContent = el.team2;

    let team1Goals = document.createElement("td");
    team1Goals.textContent = el.team1goals;

    let team2Goals = document.createElement("td");
    team2Goals.textContent = el.team2goals;

    row.append(competition, year, round, team1, team2, team1Goals, team2Goals);

    tableBody.appendChild(row);
  });
};

// Filtering Data
yearChange.addEventListener("change", (e) => {
  if(yearChange.value==""){
    apiFetchData();
  }else{
    fetchDataByYear();
    
    team1Change.addEventListener("change", (e) => {
        fetchDataByYearAndTeam1();
    })
    

    team2Change.addEventListener("change", (e) => {
        fetchDataByYearAndTeam2();
    })
    
  }
});


const fetchDataByYear = async () => {
  try {
    const apiResponse = await fetch(`${baseUrl}?year=${yearChange.value}`);
    const fetchedData = await apiResponse.json();

    data = fetchedData.data;
    displayData(data);
  } catch (error) {
    console.log(error.message);
  }
};





const fetchDataByYearAndTeam1 = async () => {
    try {
      const apiResponse = await fetch(`${baseUrl}?year=${yearChange.value}&team1=${team1Change.value}`);
      const fetchedData = await apiResponse.json();
  
      data = fetchedData.data;
      displayData(data);
    } catch (error) {
      console.log(error.message);
    }
};




const fetchDataByYearAndTeam2 = async () => {
    try {
      const apiResponse = await fetch(`${baseUrl}?year=${yearChange.value}&team2=${team2Change.value}`);
      const fetchedData = await apiResponse.json();
  
      data = fetchedData.data;
      displayData(data);
    } catch (error) {
      console.log(error.message);
    }
};

  

  