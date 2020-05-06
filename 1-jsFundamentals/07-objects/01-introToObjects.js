//            {}denote an object
// properties examples id and name...nest object in netflix object..js reads these as strings

let netFlix = {
    id: 1,
    name: "The Office",
    seriesInfo : {
        seasons: 9,
        seasonInfo: [
            {
                season: 1, 
                episodes:6,
                episodeInfo: [
                    {
                        episode: 1, 
                        episodeName: "Pilot"
                    },
                    {
                        episode: 2,
                        episodeName: "Diversity Day",
                    }
                ]
            },
            {
                season: 2, 
                episodes: 22, 
                episodeInfo: [
                    {
                        episode:1,
                        episodeName: "The Dundies"
                    }
                ]
            }
        ],
    },
};

console.log(netFlix.name);
//console.log("whole Object:", netFlix);
//console.log("Just Series Info:", netFlix.seriesInfo);
//console.log("Just Season Info: ", netFlix.seriesInfo.seasonInfo[0].episodeInfo[0]);

//CHALLENGE!!!!--print name of episode one season two
console.log("season two episode one: ", netFlix.seriesInfo.seasonInfo[1].episodeInfo[0].episodeName);





let spaceJam = {
    toonSquad: {
        human: "Michael Jordan",
        rabbit1: "Bugs Bunny",
        rabbit2: "Lola Bunny",
        duck: "Daffy Duck",
        tDevil: "Tasmanian Devil",
        bird: "Tweety",
        cat: "Sylvester",
        pig: "Porky Pig"
    },
    monstars: {
        0: "Bupkus",
        1: "Bang",
        2: "Nawt",
        3: "Pound",
        4: "Blanko"
    },
    nbaPlayers: {
        "phoenix Suns": "Charles Barkley",
        newJerseyNets: "Shawn Bradley",
        newYorkKnicks: "Patrick Ewing",
        charlotteHornets1: "Larry Johnson",
        charlotteHornets2: "Mugsy Bogues"
    }
};

//console.log(Object.keys(spaceJam));
//console.log(Object.keys(spaceJam.toonSquad));
//console.log(spaceJam.nbaPlayers.charlotteHornets1);
//console.log(spaceJam.monstars[0]);
//console.log(spaceJam.nbaPlayers["phoenix Suns"]);

console.log(Object.values(spaceJam.toonSquad));




let garden = {
    vegetable: "zucchini",
    flower: "sun flowers",
    fruit: "grape",
    water: true, 
    sun: true, 
    size: 10
};

let keys = Object.keys(garden);
console.log(keys);
console.log(typeof keys[0]);

let zucchini = garden["vegetable"];
console.log(zucchini);



//create properties outside of the object
let baking = {};
//bunch of code

baking.zucchini = "Better make some bread!";
console.log(baking);

baking["flour"] = "Batter up!";
console.log(baking);

//                 evaluates this first, which = zucchini
//same as baking.zucchini
console.log(baking[garden["vegetable"]]);






//REPL Homework- 4/30/2020
//Testing below:

let movie = {
    nameOfMovie: "The Goonies",
    runTime: 90,
    genre: "Adventure",
    characters : {
        characterList: [
            {
                name: "Mikey",
                age: 13,
                items:[
                    {
                        itemOne: "braces",
                        itemTwo: "inhaler"
                    }
                ]
            },
            {
                name: "Brandon",
                age: 16,
                items: [
                    {
                        itemOne: "bike",
                        itemTwo: "sweatpants"
                    }
                ]
            }
        ],
    },
};


console.log(movie.nameOfMovie);
console.log(movie.runTime);
console.log(movie.characters);
console.log(movie.characters.characterList[0].name);
console.log(movie.characters.characterList[1].items[0].itemTwo);

//REPL Homework above from 4/30/2020
//completed, but need more work on objects and combining them with other objects/arrays


/*                              Monday, May 4 Challenge
Pig Latin:
Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.
If able to do so, return the value into another variable and print that variable
What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/
​
// Pig -> IgPay  (testing one word, testing the consonant case)
// Latin -> Atinlay (testing one word, testing the vowel case)
// Pig Latin -> IgPay Atinlay  (tests a sentence with both consonants and vowels)
​
let firstTest = "Hello"; // expecting: "elloHay"
​
const vowels = ["a", "e", "i", "o", "u"];
​
// Hello my name is jeff;
​
const pigLatin = (toTranslate) => {
  console.log(toTranslate);
  let translated = "";
  let wordslist = toTranslate.split(" ");
  console.log(wordslist);
​
  wordslist.forEach((item) => {
    console.log("FOR EACH LOOP RUNNING:");
    console.log(item);
    // Procedure defined below
    let translatedWord;
    item = item.toLowerCase();
    console.log(item);
    if (vowels.includes(item[0])) {
      translatedWord = item + "ay";
      console.log(translatedWord);
    } else {
      for (let i = 0; i < item.length; i++) {
        if (vowels.includes(item[i])) {
          console.log(translatedWord);
          let chunk = item.slice(0, i);
          console.log(chunk);
          translatedWord = item.slice(i) + chunk + "ay";
          console.log(translatedWord);
          i = item.length;
        }
      }
    }
    translated += translatedWord + " ";
    console.log(translated);
  });
​
  console.log(translated);
  return translated;
};
​
pigLatin("I think functions are cool"); // -> atinlay