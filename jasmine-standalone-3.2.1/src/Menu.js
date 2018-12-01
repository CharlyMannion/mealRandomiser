function Menu() {
    this.breakfastOptions = [{name: "weetabix"}, {name: "corn flakes"}, {name: "rice krispies"}, {name: "bran flakes"}, {name: "muesli"}]
}

Menu.prototype.selectBreakfastItem = function() {
    var numbersArray = [0, 1, 2, 3, 4]
    var randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    this.breakfastChoice = this.breakfastOptions[randomNumber].name;
    return this.breakfastChoice;
}

