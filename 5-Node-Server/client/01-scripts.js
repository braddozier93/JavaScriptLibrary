function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(function (response) {
            console.log("Fetch response:", response)
            return response.text();
        })
        .then(function (text) {
            console.log(text);
        });
    };

/********************************
 * 2 POST long hand: /one
 *********************************/
function postToOne(){
    var url = "http://localhost:3000/test/one";

    fetch(url, {
        method: 'POST',
        headers: new Headers({              //1--fetch the url. the route in the server handles a POST request, so our method is POST
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){
            return response.text()          //2--pass the response into a Promise that returns the response as plain text(we'll use more JSON later)
        }
    ).catch(
        function(error){
            console.error('Error:', error)      //3-- we handle an error, if an error comes back
        }
    ).then(
        function (response){
            console.log('Success:', response);  //4--we simply print the plain text response to the console. this section is where we can do some DOM setup
        }
    )
};
/*******************************
 * POST /one : Arrow function
 ********************************/
function postToOneArrow(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, {//reaching out to an endpoint with a POST request. we add the appropriate headers
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.text())//we're asking for a plain text response
    .catch(error => console.error('Error:', error))//we handle an error, if there is one
    .then(response => console.log('Success:', response));//in the end, we simply print the data to the console
};

//POST DATA
function postData() {
    //1 set up an object, like we would in postman. we have a preset string as teh value of the item property
    let content = {testdata: {item: 'This was saved!'}};
    //2 we target som specific id's in the DOM, these elements will hold the value of the response that comes back after the post is stored. 
    let testDataAfterFetch = document.getElementById('test-data');
    let createdAtAfterFetch = document.getElementById('created-at');

    fetch('http://localhost:3000/test/seven', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)//3 we pass in our pre-defined objet into the fetch call within the body property. notice tht the method property is now POST instead of GET
    })
    .then(response => response.json())
    .then(function (text) {
        console.log(text);
            //4 our response comes back and is printed to the console. it is also displayed to the user along with the timestamp. 
            //4 we access the separate values by calling text.testdata. In the DOM, the innerHTML property allows us to take plain text that we get back and display it in the targeted element
        testDataAfterFetch.innerHTML = text.testdata.testdata;
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;
    });
};

/********************************
 * 4 GET FROM /ONE - Display Data
 *****************************/
function fetchFromOneDisplayData(){

    //1 set up our url in one variable and target the data-one id in the DOM in another
    let url = 'http://localhost:3000/test/one';
    let dataView = document.getElementById('display-one');
    //2 create a fetch with headers and the request method of GET. there are also chained promises that handle the data when it returns or handle an error if one comes back
    fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){
            return response.json()
        }
    ).catch(
        function(error){
            console.error('Error:', error)
        }
    ).then(
        function(results){
            let myList = document.querySelector('#getjson');//3 inside the final .then, we are going to work towards showing the retruned data in the DOM. we start by targeting teh getjson id in the DOM and attaching teh value to the myList variable

            for (r of results){//4 we set up a for loop
                console.log('Response:', r.testdata);//5 write a console log statement to show how we can access the values that come back in the object inside the response
                var listItem = document.createElement('li');//6 create var listItem, the createElement() method will create that type of element in the DOM. in this case, we create a list item li, everytime we iterate
                listItem.innerHTML = r.testdata;//7each time we iterate, we store the value of r.testdata in the newly created li
                myList.appendChild(listItem);//8 we call appendChild on myList, which means that each time we iterate we put the li into the unordered list
            }
        }
    )

};