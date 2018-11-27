describe("Menu", function() {

    beforeEach(function() {
        menu = new Menu();
    })

    it("has breakfast items", function() {
        expect(menu.breakfastOptions).toEqual(["weetabix", "corn flakes", "rice krispies", "bran flakes", "muesli"])
    })
})