import React, {useState, useEffect} from 'react'; //calling prebuilt react package that uses useState as a local var within that
import NytResults from './NytResults'; //importing code from NytResults.js
const baseURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json'; //setting base URL to nyt api
const key = 't8xXaTGc9LTGXkivYkk10yjb5GGAaTeb';//personal key from last use of nyt api

const NytApp = () => {//main component parent
    const [search, setSearch] = useState('');//does useState run once before we change the variable
    const [startDate, setStartDate] = useState('');//setting state variable of startDate that we will use later
    const [endDate, setEndDate] = useState('');//useState will update the setEndDate var when new data is entered for endDate
    const [pageNumber, setPageNumber] = useState(0);//setting state variable,set is means of changing that value, initial value is 0
    const [results, setResults] = useState([]);//results are empty array  until we change setResulsts

    const fetchResults = () => {//function setting up and calling the url below using nyt api and our search variables
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;//main api where we get our data from page nujber and searcfh are empty til we change them
        url = startDate ? url + `&begin_date=${startDate}` : url;//if start date, use start date. if not, just use url
        url = endDate ? url + `&end_date=${endDate}` : url;//if end date, use end date with url.. if not just use url
        console.log(url);

        fetch(url)//fetching the url for the fetchResults function..fetch is specific to the browser
            .then(res => res.json())//get results from url, but have to convert them to json
            .then(data => {setResults(data.response.docs); console.log(data)})//using jsonified 'data' and dot notation to get information to use for setResults
            .catch(err => console.log(err));//use catch if no results from fetch
    };

    const handleSubmit = (event) => {//create function to handle the submit button. parameter of event/or submit
        event.preventDefault();//defaulting the form to submit. stops refreshing results
        setPageNumber(0);//setting state variable to 0 on each submit
        fetchResults();//calling the fetch function
    };

    const changePageNumber = (event, direction) => {//pagination function with two parameters (event, direction)
        event.preventDefault()//stops the refreshing of the page
        if (direction === 'down') {//if we go down a page number...down is tied to our previous button in results.js
            if (pageNumber > 0) {//checking condition of page number. if on page 1 or higher 
                setPageNumber(pageNumber - 1);//if "if" is true, we go down a page number in changePageNumber
                fetchResults();//gets results by recalling the fetchResults() function again
            }
        }
        if (direction === 'up') {//if we go up a page number/ set pageNumber up a page...up is tied to our next button in results.js
            setPageNumber(pageNumber + 1);//doesn't have to check condition because we can always go up
            fetchResults();//gts results by recalling the fetchResults() function again
        }
    };


    return(//sets up what the user sees on the app in the web browswer--JSX
        <div className="main">{/*sets up main div*/}
            <div className="mainDiv">{/*div within main*/}
                <form onSubmit={(e) => handleSubmit(e)}>{/*creating a form with an event 'handleSubmit'...onSubmit method within form...taking the event e and call handleEvent while passing e in that*/}
                    <span>Enter single search term (required): </span>{/*text to display for the input tag below*/}
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />{/*input box with event onChange..anonymous function to setSearch...onChange attribute with anonymous arrow function, call setSearch to the event of us typing, grab the value of the input field(target), and use this to setSearch */}
                    <br />
                    <span>Enter a start date: </span>{/*text to display for the input tag below*/}
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStartDate(e.target.value)} />{/*another input ...pattern numbers set up how calender looks to use for setting date...with onChange...will trigger the anonymous function to set new setStartDate*/}
                    <br />
                    <span>Enter an end date: </span>{/*text to display for the input tag below*/}
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value)} />{/*another input with onChange...will trigger the anonymous function to set new setEndDate using setEndDate callback function*/}
                    <br />
                    <button className="submit">Submit search</button>{/*creating sumbit button and labeling it */}
                </form>
                {
                    results.length > 0 ? <NytResults results={results} changePage={changePageNumber} /> : null
                }{/*if we recieve more than 0 results, we call NytResults results and changePage here, changePage uses changePageNumber as a reference to display page number you're on...doesn't actually call it until we do in NytResults with it's parameters */}
            </div>
        </div>
    )
};


export default NytApp; //exporting for use is sidebar.js