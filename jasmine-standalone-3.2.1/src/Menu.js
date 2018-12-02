function Menu() {
    this.breakfastOptions = [{name: "weetabix"}, {name: "corn flakes"}, {name: "rice krispies"}, {name: "bran flakes"}, {name: "muesli"}]
    // this.menuChoices = []
    this.toastOptions = [{name: "1 white, 1 brown"}, {name: "2 white"}, {name: "2 brown"}]
    this.coldPuddingOptions = [{name: "yogurt"}, {name: "ice cream"}]
    this.snackOptions = [{name: "dairy milk"}, {name: "drifter"}, {name: "lion bar"}, {name: "kit kat chunky"}, {name: "Belvita"}, {name: "Nature Valley"}, {name: "cookie"}]
}

Menu.prototype.selectBreakfastItem = function() {
    var numbersArray = [0, 1, 2, 3, 4]
    var randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    this.breakfastChoice = this.breakfastOptions[randomNumber].name;
    // this.menuChoices.push(this.breakfastChoice)
    return "breakfast cereal: " + this.breakfastChoice;
}

Menu.prototype.selectToast = function() {
    var numbersArray = [0, 1, 2]
    var randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    this.toastChoice = this.toastOptions[randomNumber].name;
    // this.menuChoices.push(this.breakfastChoice)
    return "toast: " + this.toastChoice;
}

Menu.prototype.selectColdPudding = function() {
    var numbersArray = [0, 1]
    var randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    this.coldPuddingChoice = this.coldPuddingOptions[randomNumber].name;
    // this.menuChoices.push(this.breakfastChoice)
    return "cold pudding: " + this.coldPuddingChoice;
}

Menu.prototype.selectSnack = function() {
    var numbersArray = [0, 1, 2, 3, 4, 5, 6]
    var randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    this.snackChoice = this.snackOptions[randomNumber].name;
    // this.menuChoices.push(this.breakfastChoice)
    return "snack: " + this.snackChoice;
}

