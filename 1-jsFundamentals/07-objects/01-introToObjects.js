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
                episodes: 6,
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