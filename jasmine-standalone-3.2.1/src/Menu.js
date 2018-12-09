function Menu() {
    this.breakfastOptions = [{name: "weetabix"}, {name: "corn flakes"}, {name: "rice krispies"}, {name: "bran flakes"}, {name: "muesli"}]
    // this.menuChoices = []
    this.toastOptions = [{name: "1 white & 1 brown"}, {name: "2 white"}, {name: "2 brown"}]
    this.coldPuddingOptions = [{name: "yogurt"}, {name: "ice cream"}]
    this.snackOptions = [{name: "dairy milk"}, {name: "drifter"}, {name: "lion bar"}, {name: "kit kat chunky"}, {name: "Belvita"}, {name: "Nature Valley"}, {name: "cookie"}]
}

Menu.prototype.selectBreakfastItem = function() {
    var choiceDescription = "breakfast cereal: "
    var numbersArray = Array.from({length: this.breakfastOptions.length}, (x,i) => i);
    var randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    this.breakfastChoice = this.breakfastOptions[randomNumber].name;
    // this.menuChoices.push(this.breakfastChoice)
    var choiceOutput = choiceDescription + this.breakfastChoice
    return choiceOutput;
}

Menu.prototype.selectToast = function() {
    var choiceDescription = "toast: "
    var numbersArray = Array.from({length: this.toastOptions.length}, (x,i) => i);
    var randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    this.toastChoice = this.toastOptions[randomNumber].name;
    // this.menuChoices.push(this.breakfastChoice)
    var choiceOutput = choiceDescription + this.toastChoice
    return choiceOutput;
}

Menu.prototype.selectColdPudding = function() {
    var choiceDescription = "cold pudding: "
    var numbersArray = Array.from({length: this.coldPuddingOptions.length}, (x,i) => i);    
    var randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    this.coldPuddingChoice = this.coldPuddingOptions[randomNumber].name;
    // this.menuChoices.push(this.breakfastChoice)
    var choiceOutput = choiceDescription + this.coldPuddingChoice
    return choiceOutput;
}

Menu.prototype.selectSnack = function() {
    var choiceDescription = "snack: "
    var numbersArray = Array.from({length: this.coldPuddingOptions.length}, (x,i) => i);    
    var randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]    
    this.snackChoice = this.snackOptions[randomNumber].name;
    // this.menuChoices.push(this.breakfastChoice)
    var choiceOutput = choiceDescription + this.snackChoice
    return choiceOutput;
}

Menu.prototype.displayCerealOptions = function() {
    var stringCereals = ""
    this.breakfastOptions.forEach(function(element) {
        stringCereals += (element.name + "; ")
      });
    return "Cereal Options: " + stringCereals.slice(0, -2)
}

Menu.prototype.displayToastOptions = function() {
    var stringCereals = ""
    this.toastOptions.forEach(function(element) {
        stringCereals += (element.name + "; ")
      });
    return "Toast Options: " + stringCereals.slice(0, -2)
}

Menu.prototype.displayColdPuddingOptions = function() {
    var stringCereals = ""
    this.coldPuddingOptions.forEach(function(element) {
        stringCereals += (element.name + "; ")
      });
    return "Cold Pudding Options: " + stringCereals.slice(0, -2)
}
