const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';//1-declare baseURL of the api. this is the required endpoint for the nyt data.
const key = 't8xXaTGc9LTGXkivYkk10yjb5GGAaTeb';//2-API key from NYT
let url;//3-we'll use it to make a dynamic search url

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';
//for pagination and display later
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;
//EVENT LISTENERS
//variable     listens for   'event', when event happens we will fir a function(the 2nd parameter)
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);
//FETCH RESULTS
//function fetchResults(e {
//  console.log(e)
//})
//ACCESSING A REST API
                     //1
/*function fetchResults(e) {
    console.log(e); //2
    //assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' +searchTerm.nodeValue;//3
    console.log(url); //4
}*/
function fetchResults(e){
    e.preventDefault();
    //assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL:", url);
    //form validation...add end dates and start dates as two conditional statements...befor the fetch and after the url
    //if input fields for dates aren't blank denoted by !== ''
    if(startDate.value !== '') {
        //console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };
    if(endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };
    //1
    //use fetch to make the request to the API
    fetch(url).then(function(result) {
            //console.log(result)//do i need this
        return result.json();//2
        }).then(function(json) {
            displayResults(json);//3 & //1
        });
}
//2
function displayResults(json) {
    //let articles = json.response.docs;

    while (section.firstChild) {
        section.removeChild(section.firstChild);//we run displayResults function each time the button gets pressed
    }//checking to see if the section element has any child elements. if sec.firs is true, then we call removechild on the section variale, which targets the section element in the html.
    //this will simply clear out any child elements that are in the section
    //the while loop will clear out any articles before new search results are added
    let articles = json.response.docs;//goes here or just above while function??

    if(articles.length === 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    } else 
        {nav.style.display = 'none';//hides the nav display if less than 10 items are in the arrayy
    }
     
    if(articles.length === 0) {

    } else {
        for(let i = 0; i < articles.length; i++) {//for loop will iterate for the length of the articles array
            let article = document.createElement('article');//create article variable that will create a node in DOM thst is an article element. article is an HTML element
            let heading = document.createElement('h2');//create a headin variablethat creates a node in the DOM that is an h2 element
            let link = document.createElement('a');//create a link variable that is going to use the a element. the anchor tag will allow us to use an 'href' link
            let img = document.createElement('img');//add an img variable that will create an image element
            let para = document.createElement('p');//declare a paragraph variable that will append a p tag to the DOM to be used for some of our JSON data
            let clearfix = document.createElement('div');//declaring a clearfix var that will later on append a div to the DOM. 
            
            let current = articles[i];//create a current variable that holds the data of the current article as we iterate
            console.log("Current:", current);//log the current data so that we can see the console

            link.href = current.web_url;//since link is an a element, we need to attach an href proprty to it.currentweburl grabs the hyperlink for the current article out of the json result. this will set the value for the link.href as we iterate
            link.textContent = current.headline.main;//the text we'll use in the link.textContent is set to the vavlue of current.headline.main, which is part of the json object fro the NYT API. 

            para.textContent = 'Keywords:';//add the textContent attribute to our para variable. each result will show this at the start of the p tag that is created by para

            for(let j = 0; j < current.keywords.length; j++) {//for loop inside of our for loop. this nested loop is to iterate over the current object, specifically the keywords array for that object. in json, keywords is a property of the entire object, and its an array. here, we iterte through the length of the array for the current result object
                let span = document.createElement('span');//as we iterate, we create a span for each keyword. a span will be an element tht will end when the item ends.so, the span of Pizza will start at the p and end at the a. if we were to use a p tag here, it would cover the entirety of the parent object
                span.textContent += current.keywords[j].value + ' ';//the textContent for each span will be the value found inside the keywords array inside the json object
                para.appendChild(span);//append each span to the para node
            }

            if(current.multimedia.length > 0) {//use conditional to check json for data there is a multimedia prop in the json. you should go look for it in the json. if it has anything in it, we'll do some stuff in the next steps
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;//concatenate a string with the url for the html src value. e will add the first item in the array: currntmulitmed[0.url]
                img.alt = current.headline.main;//we need an alt if something should happen that the image isnt avail. we set it to the value of the headline
            }

            clearfix.setAttribute('class','clearfix');//remember that we still have an out loop and printing the resuts. here, we're using the setAttribute method to target our clearfix class. It's a class in the css file.

            article.appendChild(heading);//call appendChild() on the article element..this will create a child node of the element.we pass heading to the appendchild method, this means there will be an h2 element created inside each article element
            heading.appendChild(link);//call appendChild on the heading method again..will append the link as a child element in the DOM inside of each h2 
            article.appendChild(img);//we append the image to the article element for one of our items
            article.appendChild(para);//add para as a child to article
            article.appendChild(clearfix);//add clearfix as a child to article
            section.appendChild(article);//append the article to the section element..pass article to that. the article is a child of section, and the h2 is a grandchild of section
        }
    }
};
//for above code with fetch:
//1--make a request for info, similar to a GET request with HTTP...URL i sgiven to fetch as a parameter, which sends a request to the URL
//2--meanwhile, it creates a promise containing a result object. this is our response. we use promises
//...when we have asynchronous, long running operations. fetch gts the network resource, which might take time
//...it will convert the response into a json object by returning the result.json function
//3--the json object used in another promise(set off by a seconh .then) to send the info received to another function
//3...for now, we'll use console.log(json) to see the json data

//display1 (above)--1-we took out console log and replaced with displayResults(json)
//  2--we moved the console.log to a displayResults function
//  3--when the promise retuens json, we fire a function displayResults that will work to manage that data
//we'll start pulling the json apart and preparing to display it in the displayResults function
function nextPage(e) {
    pageNumber++;//first increase the value of the pageNumber variable
    fetchResults(e);//rerun the fetchResults function
    console.log("Page number:", pageNumber);//print the pageNumber variable so that we can see the increment
};
function previousPage(e) {
    if(pageNumber > 0) {//we ahve to account for the user being on the first page(page 0), as a pageNumber of -1 would cause an error
        pageNumber--;//if the page number is over 0, we decrement the page number by 1/if the 
    } else {
        return;//value is 0, however, we return nothing and get out of the function, thus ensuring that the value won't drop below 
    }
    fetchResults(e);//if the value wasn't 0 and we've documented the page number, we run fetchResults again
    console.log("Page:", pageNumber);
};
/*
function nextPage(){
    console.log("Next button clicked");
}//5

function previousPage(){
    console.log("Next button clicked");
}//5*/
//analysis of above code
//1--(e) is event handling function that receives an event object
//1--the object is a "thing" that holds a bunch of properties(variables) and methods(functions)
//1--the handle, the (e), is similar to a variable that allows you to interact with an object
//2--log the event object so that you can look at it in the console for learnin purposes
//3--creating a versatile query string. the url variable is loaded with other variables and url requirements.
//3--we have the base for our API, our key, the page number that corresponds to the results array, and our specific value
//3--revisit ?, &, &q= in a URL string. WHAT ARE THEY??
//4--log the string so that we can see it. 
//5--add in a few basic functions to define nextPage nad previousPage and log them. 
//5--IF YOU LEAVE OUT THIS STEP, YOUR APP WILL GET AN ERRPR
