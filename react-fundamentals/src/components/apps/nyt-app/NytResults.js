import React from 'react';//import react from react library

const NytResults = (props) => {//state var using props as parameter so that we can use the results from our app.js

    return (
        <div>
            <div>
            {props.results.map(result => {//go into every index of array and map those results...going through our props...props is array with results and changePageNumber
                console.log(props);
                return (
                    <div key={result._id}>{/*attribute of key inside the array being mapped over with _id being getting result id from the api*/}
                        <h2>{result.headline.main}</h2>{/*grabbing headline and main key from our results parameter*/}
                        {result.multimedia.length > 1 ? <img alt="article" src={`http://nytimes.com/${result.multimedia[1].url}`}
                        /> : ''}{/**if we get multimedia with return, we display it here , grabbing multimedia from results and we only display the first one?*/}
                        <p>{/**results snippet also from api results we grabbed and are mapping over */}
                            {result.snippet}
                            <br />
                            {result.keywords.length > 0 ? ' Keywords: ' : ''}{/**if we get keywords with return, 'keywords:' is displayed */}
                        </p>
                        <ul>
                            {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}{/**if we get keywords with the return, we map keywords and for eacch one, we grab the value key and value of the keyword and we display them here in an li tag*/}
                        </ul>
                        <a href={result.web_url}><button>Read It</button></a>{/**the web-url link result will be displayed here as a link */}
                    </div>
                )
            })}
            <div>
                <button onClick={(e) => props.changePage(e, 'down')}>Previous 10</button>{/**creating and giving each button an onClick event...grab onClicks event will trigger changePageNumber event function to go to prev or next(needs parameters of (event, direction) */}
                <button onClick={(e) => props.changePage(e, 'up')}>Next 10</button>
            </div>
        </div>
    </div>
    );
};

export default NytResults; //exporting jfor use in sidebar.js