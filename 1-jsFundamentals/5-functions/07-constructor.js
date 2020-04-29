let myTv = {
    screenSize: 27,
    screenType: "plasma",
    refreshRate: 140,
    manufacturer: "Sony"
};

let yourTV = {
    screenSize: 60,
    screenType: "lcd",
    refreshRate: 60,
    manufacturer: "Samsung"
};
//constructor function
function TV (screenSize, screenType, refreshRate, manufacturer) {
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;

    this.getDescription = () =>
        `A ${this.screenSize}" ${this.refreshRate}hz ${this.screenType} ${this.manufacturer} Television.`;
}

myTv.refreshRate

let firstTv = new TV(80, "led", 80, "LG");

console.log(firstTv.screenType);
console.log(firstTv.screenSize);

//constructor function is a data generator

console.log(firstTv.getDescription());

