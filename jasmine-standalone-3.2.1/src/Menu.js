function Menu() {
    this.breakfastOptions = [{name: "weetabix"}, {name: "corn flakes"}, {name: "rice krispies"}, {name: "bran flakes"}, {name: "muesli"}]
    // this.selectBreakfastItem = "corn flakes"
}

// Array.prototype.sample = function(){
//     return this[Math.floor(Math.random()*this.length)];
//   }

// Menu.prototype.selectBreakfastItem = function() {
//     var randomNumber = [1, 2, 3, 4, 5].sample()
//     console.log(randomNumber)
//     var breakfastChoice = this.breakfastOptions[randomNumber].name;
//     return breakfastChoice;
// }

Menu.prototype.selectBreakfastItem = function() {
    var numbersArray = [0, 1, 2, 3, 4]
    var randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    // console.log(numbersArray[Math.floor(Math.random() * numbersArray.length)])
    // console.log(this.breakfastOptions)
    // console.log(this.breakfastOptions[randomNumber].name)
    var breakfastChoice = this.breakfastOptions[randomNumber].name;
    return breakfastChoice;
}

