describe("Menu", function() {

    beforeEach(function() {
        menu = new Menu();
    })

    describe("items on the menu", function() {
        it("has breakfast items", function() {
            expect(menu.breakfastOptions).toEqual(["weetabix", "corn flakes", "rice krispies", "bran flakes", "muesli"])
        })
    })

    describe("the function to choose breakfast", function() {
        it("selects a breakfast item", function() {
            expect(menu.selectBreakfastItem(1)).toEqual("corn flakes")
        })
    })
})