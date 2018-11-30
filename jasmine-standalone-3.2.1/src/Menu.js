function Menu() {
    this.breakfastOptions = [{name: "weetabix"}, {name: "corn flakes"}, {name: "rice krispies"}, {name: "bran flakes"}, {name: "muesli"}]
}

Menu.prototype.selectBreakfastItem = function() {
    var randomNumber = 1
    // [1.. 5].rand
    var breakfastChoice = this.breakfastOptions[randomNumber].name;
    return breakfastChoice;
}