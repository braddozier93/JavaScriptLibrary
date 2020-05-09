var starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
 .then (function(response) {
    return response.json();
 })
 .then(function(json) {
    //console.log(json)
    let people = json.results;

    for(p of people) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }

 });
//--FURTHER PRACTICE--
//play with as different endpoint. try using planets, ships, etc.. 
//try to follow the same pattern