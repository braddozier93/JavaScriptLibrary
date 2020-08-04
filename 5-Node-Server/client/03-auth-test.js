function fetchAllFromAuthRoute() {
    const fetch_url = 'http://localhost:3000/authtest/getall'
    const accessToken = localStorage.getItem('SessionToken')//since we stored our token in localStorage, we can access it by using the getItem method to get it back from localStorage and put it in a variable. note that we could also use our getSessionToken() method for this task

    const response = fetch(fetch_url, {
        method: 'GET', //by default, fetch runs a GET request. we can use the method property to send other requests. in this case, we're still sending a GET
        headers: {
            'Content-Type': 'application/json',//the contenttype header tells the server what kind of data is being sent in our PreFlight request, if any
            'Authorization': accessToken //the 'auth' header provides some sort of encrypted data allowing access to the server, in this case our token
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
};
/*******************************
 * FETCH/POST to auth/create
 **********************************/
function postToAuthRouteCreate() {
    const fetch_url = 'http://localhost:3000/authtest/create'
    const accessToken = localStorage.getItem('SessionToken')

    let authTestDataInput = document.getElementById('authTestData').value;

    let authInputData = {authtestdata: {item: authTestDataInput}};

    const response = fetch(fetch_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    });
};
/************************************
 * GET ITEM BY USER
 **********************************/
function getOneByUser() {
    let postIdNumber = document.getElementById("getNumber").value;

    const fetch_url = `http://localhost:3000/authtest/${postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
    .then(response => {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
        var myItem = document.getElementById('getItemValue');
        myItem.innerHTML = response.authtestdata;
    })
};
/***************************
 * PUT to authtest/update/:id
 ******************************/

 function updateItem() {
     let postIdNumber = document.getElementById("updateNumber").value;
     let authTestDataInput = document.getElementById('updateValue').value;

     const fetch_url = `http://localhost:3000/authtest/update/${postIdNumber}`
     const accessToken = localStorage.getItem('SessionToken')

     let authInputData = {authtestdata: {item: authTestDataInput}};
     const response = fetch(fetch_url, {
         method: 'PUT',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': accessToken
         },
         body: JSON.stringify(authInputData)
     })
     .then(response => {
         return response.json();
     })
     .then(data => {
         console.log(data)
         var myItem = document.getElementById('newItemValue')
         myItem.innerHTML = data.authtestdata;
         fetchAllFromAuthRoute();
     });
 };
 /********************************
  * show current data
  **********************************/
 function showCurrentData(e) {//e is the default variable name for an event listener. here, the e represents the input field 'updateNumber', which was passed as a parameter using 'this' on the HTML page
     const fetch_url = `http://localhost:3000/authtest/${e.value}`//we pass the value of the input field supplied by the user directly into the URL with a template literal. because e is already defined as the input field, we don't need to use a function to get another reference to it
     const accessToken = localStorage.getItem('SessionToken')

     fetch(fetch_url, {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': accessToken
         }
     })
     .then(response => {
         return response.json();
     })
     .then(function (response) {
         console.log(response);
         var myItem = document.getElementById('updateValue');//we call the DOM element we want to modify and set it to a variable to be accessed later
         if (!response) return;//if no item in the databse matches the 'id' we've supplied, the response comes back undefined. 
         else myItem.value = response.authtestdata;//we could use 'innerhtml' to set the value, but that method doesn't work with <input> elements. instead, we use 'value' to insert our data into the field
     })
 }//this function will not run until a key is lifted after being pressed.

 /************************************
  * Deleting an item
  ************************************/
 function deleteItem() {
     let postIdNumber = document.getElementById("deleteNumber").value;

     const fetch_url = `http://localhost:3000/authtest/delete/${postIdNumber}`//again we get the 'id' number submitted by the user and pass it into the url via a template literal     const accessToken = localStorage.getItem('SessionToken')
     const accessToken = localStorage.getItem('SessionToken')

     const response = fetch(fetch_url, {
         method: 'DELETE',//our HTTP verb is DELETE, so we use the Delete method
         headers: {
             'Content-Type': 'application/json',
             'Authorization': accessToken
         }
     })
     .then(response => {//we print the response to the console and also run the 'fetchAllFromAuthRoute' function again, which will print all remainig items for our user to teh console.
         console.log(response);
         fetchAllFromAuthRoute()
     })
 };
/**************************************
 * deleteItemById()
 ***************************************/
function deleteItemById(paramNum) {//the 'id' of the <li> is passed into this function as a parameter, which is then added to the url via the template literal
    const fetch_url = `http://localhost:3000/authtest/delete/${paramNum}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
    .then(response => {
        console.log(response);//print the response to the console to verify the delete worked
        fetchAllFromAuthRoute();//run the 'getall' function again to print the remaining items in the database to the console.
    })
}



 /***************************
  * DELETING WITH A CUSTOM EVENT
  ***********************************/
 function fetchFromOneDisplayData() {
    const url = 'http://localhost:3000/authtest/getall'
    const accessToken = localStorage.getItem('SessionToken')

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(
        function (error) {
            console.log('Error:', error)
     })
    .then(
        function (response) {
            let text = '';
            var myList = document.querySelector('ul#fourteen');//making a reference to a DOM element. we're aiming for a <ul> element with an 'id' of 'fourteen'--the # signals the program to look for an ID rather than a CLASS
            while (myList.firstChild) {//this is the same way we cleared out the <section> elements in teh NYT and YOUTUBE API mini apps
                myList.removeChild(myList.firstChild)
            }
            console.log(response);
            for (r of response) {//use a 'for of' loop to iterate through the values of each 'key:value' object pair
                var listItem = document.createElement('li');//given that we're working with a <ul> element, each loop will create a different <li>
                var textData = r.id + ' ' + r.authtestdata;//we create a string with the 'id' and 'authtestdata' properties, then put that string into the <li> element
                listItem.innerHTML = textData;
                listItem.setAttribute('id', r.id);//we add teh 'id' property of each object as an id for each <li>. this will allow us to call them individually later.
                myList.appendChild(listItem);//the <li> child element is added to the end of the <ul> element
                myList.addEventListener('click', removeItem);//we add our custom listener to run whenever an <li> is clicked
            }
        }) 
 };
 /*****************************
  * removeItem() --we need to create this function or our app will break
  * this function will delete an item from the <ul> element. it will also have the ability
  * to send a DELETE request, but we're going to hold off on that part for a second. 
  ******************************/
 function removeItem(e) {
     console.log(e);//print e to the console to check which item we're clicking on
     var target = e.target;//'target' is a nested object within e. this places that object inside its own variable
     if (target.tagName !== 'LI') return;//if the item we're clicking on isn't an <li> element, the empty 'return' statement exits the conditional
     else target.parentNode.removeChild(target);//we remove the <li> child from the <ul> parent

     let x = target.getAttribute("id")//earlier we set an 'id' for the <li>. now we get it back so we can pass it to the DELETE request
     deleteItemById(x); //this will become our DELETE request. in order for us to test what we have so far, we'll just print x to the console
     console.log("The id number for this item is " + x);
 }