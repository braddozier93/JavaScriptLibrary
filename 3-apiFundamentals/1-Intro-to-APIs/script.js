const baseURL = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

searchForm.addEventListener("submit", fetchSpace);
//you need to continue to revisit fetching and practice it
function fetchSpace(e) {
    e.preventDefault();
    //console.log(e);
    //anytime we have a fetch we will need the json data line 13
    fetch(baseURL)
        .then(data => data.json())
        .then(json => displayRockets(json))
        .catch(err => console.log(err));
}

function displayRockets(rockets) {
    console.log("Results:", rockets);
    let eachRocket = rockets.forEach(r => {
        console.log(r);
        let rocket = document.createElement('tr');
        let rocketName = document.createElement('td');
        let rocketCost = document.createElement('td');

        rocketName.innerText = r.name;
        rocketCost.innerText = r.cost_per_launch;

        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    })
}
