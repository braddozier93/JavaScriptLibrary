const baseURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json';//1-declare baseURL of the api. this is the required endpoint for the nyt data.
const key = 't8xXaTGc9LTGXkivYkk10yjb5GGAaTeb';//2-API key from NYT
let url;//3-we'll use it to make a dynamic search url

//SEARCH FORM-referencing all of our DOM elements

const searchTerm = document.querySelector('.search');//
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
//for pagination and display later--setting nav in css to syle a display of none
let pageNumber = 0;//setting the page number to 0
console.log('PageNumber:', pageNumber);
let displayNav = false;//setting displayNav to false,won;t display prev next ten until we have results
//EVENT LISTENERS
//variable     listens for   'event', when event happens we will fir a function(the 2nd parameter)
searchForm.addEventListener('submit', fetchResults);//attaching a function to execute everytime that happens
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);//add click event to previousBtn
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
function fetchResults(e){//create a function called fetch results with a parameter of e. sets stage to get results from our fetch
    // console.log(e)
    e.preventDefault();//stops the default of the event. stops a refresh from happening everytime you fetch info
    //assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    //or use string interpolation
    console.log("URL:", url);
    //form validation...add end dates and start dates as two conditional statements...befor the fetch and after the url
    //if input fields for dates aren't blank denoted by !== ''
    if(startDate.value !== '') {//adding conditional statement for start date. if no result..if in class of startDate with property value is empty
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;//using concatenation url is equal to url plus value that was entered for start date
    };
    if(endDate.value !== '') {//adding conditional statement to see if the value of endDat
        console.log(endDate.value)
        url += '&end_date=' + endDate.value;
    };
    //1
    //use fetch function with a parameter of url to make the request to the API
    fetch(url)//returns as a promise
        .then(function(result) {//.then is promise resolver to resolve success case of fetch..it creates another function for it to execute. result is the placeholder
            console.log(result);
        return result.json();//2transfforming result into json
        }).then(function(json) {
            displayResults(json);//3 & //1
        });
}
//2
    //let articles = json.response.docs;
//for above code with fetch:
//1--make a request for info, similar to a GET request with HTTP...URL i sgiven to fetch as a parameter, which sends a request to the URL
//2--meanwhile, it creates a promise containing a result object. this is our response. we use promises
//...when we have asynchronous, long running operations. fetch gts the network resource, which might take time
//...it will convert the response into a json object by returning the result.json function
//3--the json object used in another promise(set off by a seconh .then) to send the info received to another function
//3...for now, we'll use console.log(json) to see the json data

//display1 (above)--1-we took out console log and replaced with displayResults(json)
//  2--we moved the console.log to a displayResults function
//  3--67....when the promise retuens json, we fire a function displayResults that will work to manage that data
//we'll start pulling the json apart and preparing to display it in the displayResults function. sending jsonified results to a function that is responsible for dealing with that data(displayResults)
function displayResults(json) {//create function the parameter can be named whatever as long as all jsons below are the same
    while (section.firstChild) {//loop checking to see if there is an element within section
        section.removeChild(section.firstChild);//we run displayResults function each time the button gets pressed
    }//checking to see if the section element has any child elements. if sec.firs is true, then we call removechild on the section variale, which targets the section element in the html.
    //this will simply clear out any child elements that are in the section
    //the while loop will clear out any articles before new search results are added
    let articles = json.response.docs;//variable digging into json object to dig out response.doc
     
    if(articles.length === 0) {//if length of the articles array is equal to zero, did we get results, if not or 0, log no results
        console.log('No results');
    } else {
        for(let i = 0; i < articles.length; i++) {//for loop will iterate for the length of the articles array
            let article = document.createElement('article');//create article variable that will create a node in DOM thst is an article element. article is an HTML element
            let heading = document.createElement('h2');//create a headin variable that creates a node in the DOM that is an h2 element
            let link = document.createElement('a');//create a link variable that is going to use the a element. the anchor tag will allow us to use an 'href' link
            let img = document.createElement('img');//add an img variable that will create an image element
            let para = document.createElement('p');//declare a paragraph variable that will append a p tag to the DOM to be used for some of our JSON data
            let clearfix = document.createElement('div');//declaring a clearfix var that will later on append a div to the DOM. 
            //creating places in html to show results
            let current = articles[i];//create a current variable that holds the data of the current article as we iterate. articles is an array. how do you dig into an array? [] , the var i is the local scope variable in that execution block that is equal to the current iteration's article
            console.log("Current:", current);//log the current data so that we can see the console

            link.href = current.web_url;//since link is an a element, we need to attach an href proprty to it.currentweburl grabs the hyperlink for the current article out of the json result. this will set the value for the link.href as we iterate
            console.log(link);
            link.textContent = current.headline.main;//the text we'll use in the link.textContent is set to the vavlue of current.headline.main, which is part of the json object fro the NYT API. 
                                                //current is data from our current article iteration
            para.textContent = 'Keywords:';//add the textContent attribute to our para variable. each result will show this at the start of the p tag that is created by para
//group 3                               array
            for(let j = 0; j < current.keywords.length; j++) {//for loop inside of our for loop. this nested loop is to iterate over the current object, specifically the keywords array for that object. in json, keywords is a property of the entire object, and its an array. here, we iterte through the length of the array for the current result object
                let span = document.createElement('span');//as we iterate, we create a span for each keyword. a span will be an element tht will end when the item ends.so, the span of Pizza will start at the p and end at the a. if we were to use a p tag here, it would cover the entirety of the parent object
                span.textContent += current.keywords[j].value + ' ';//the textContent for each span will be the value found inside the keywords array inside the json object
                para.appendChild(span);//append each span to the para node/ puts a span element iside of the p tag
            }

            if(current.multimedia.length > 0) {//use conditional to check json for data there is a multimedia prop in the json. you should go look for it in the json. if it has anything in it, we'll do some stuff in the next steps
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;//concatenate a string with the url for the html src value. e will add the first item in the array: currntmulitmed[0.url], if there is a photo,we're jsut grabbing the first one
                img.alt = current.headline.main;//we need an alt if something should happen that the image isnt avail. we set it to the value of the headline, if src is broken
            }

            clearfix.setAttribute('class','clearfix');//remember that we still have an out loop and printing the resuts. here, we're using the setAttribute method to target our clearfix class. It's a class in the css file.
                                                //keeping the images from leaking over into other results css thing
            article.appendChild(heading);//call appendChild() on the article element..this will create a child node of the element.we pass heading to the appendchild method, this means there will be an h2 element created inside each article element
            heading.appendChild(link);//call appendChild on the heading method again..will append the link as a child element in the DOM inside of each h2 
            article.appendChild(img);//we append the image to the article element for one of our items
            article.appendChild(para);//add para as a child to article
            article.appendChild(clearfix);//add clearfix as a child to article
            section.appendChild(article);//append the article to the section element..pass article to that. the article is a child of section, and the h2 is a grandchild of section
        }                               //has to come last
    }

    if(articles.length === 10) {//nty api only returns 10 at a time
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    } else 
        {nav.style.display = 'none';//hides the nav display if less than 10 items are in the arrayy
    }
};
function nextPage(e) {//e is just a placeholder for that event. every time that click event nextPage happens
    pageNumber++;//first increase the value of the pageNumber variable
    fetchResults(e);//rerun the fetchResults function from the next page. whatever pageNumber we're on
    console.log("Page number:", pageNumber);//print the pageNumber variable so that we can see the increment
};
function previousPage(e) {
    if(pageNumber > 0) {//we ahve to account for the user being on the first page(page 0), as a pageNumber of -1 would cause an error
        pageNumber--;//if the page number is over 0, we decrement the page number by 1/if th/ cant go to page number -1
    } else {
        return;//value is 0, however, we return nothing and get out of the function, thus ensuring that the value won't drop below 
    }
    fetchResults(e);//if the value wasn't 0 and we've documented the page number, we run fetchResults again. to prevent default. it's why we are storing it in previousPage(e)
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
