function Menu() {
    this.breakfastOptions = [{name: "weetabix"}, {name: "corn flakes"}, {name: "rice krispies"}, {name: "bran flakes"}, {name: "muesli"}]
    this.menuChoices = []
}

Menu.prototype.selectBreakfastItem = function() {
    var numbersArray = [0, 1, 2, 3, 4]
    var randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    this.breakfastChoice = this.breakfastOptions[randomNumber].name;
    this.menuChoices.push(this.breakfastChoice)
    return this.breakfastChoice;
}

