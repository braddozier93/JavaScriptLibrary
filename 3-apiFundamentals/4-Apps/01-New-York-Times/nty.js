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
const section = document.querySelector('section')

nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;


