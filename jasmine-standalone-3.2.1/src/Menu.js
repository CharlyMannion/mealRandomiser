function Menu() {
    this.breakfastOptions = [{name: "weetabix"}, {name: "corn flakes"}, {name: "rice krispies"}, {name: "bran flakes"}, {name: "muesli"}]
}

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

Menu.prototype.selectBreakfastItem = function() {
    var randomNumber = [1, 2, 3, 4, 5].sample()
    console.log(randomNumber)
    var breakfastChoice = this.breakfastOptions[randomNumber].name;
    return breakfastChoice;
}