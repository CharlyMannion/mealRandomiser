describe("Menu", function() {

    beforeEach(function() {
        menu = new Menu();
    })

    describe("items on the menu", function() {
        it("has breakfast items", function() {
            expect(menu.breakfastOptions).toEqual([{name: "weetabix"}, {name: "corn flakes"}, {name: "rice krispies"}, {name: "bran flakes"}, {name: "muesli"}])
        })
    })

    describe("the function to choose breakfast", function() {
        it("selects a breakfast item", function() {
            menu.selectBreakfastItem();
            // spyOn(Math, "random").and.returnValue(1);
            expect(menu.breakfastChoice).toBeDefined();
        })
    })
})