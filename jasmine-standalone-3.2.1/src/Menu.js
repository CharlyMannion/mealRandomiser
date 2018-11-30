function Menu() {
    this.breakfastOptions = [{name: "weetabix"}, {name: "corn flakes"}, {name: "rice krispies"}, {name: "bran flakes"}, {name: "muesli"}]
}

Menu.prototype.selectBreakfastItem = function() {
    var breakfastChoice = this.breakfastOptions[1].name;
    return breakfastChoice;
}