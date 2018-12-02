describe("Menu", function() {

    beforeEach(function() {
        menu = new Menu();
    })

    describe("items on the menu", function() {
        it("has breakfast items", function() {
            expect(menu.breakfastOptions).toEqual([{name: "weetabix"}, {name: "corn flakes"}, {name: "rice krispies"}, {name: "bran flakes"}, {name: "muesli"}])
        })
        it("has toast combinations", function() {
            expect(menu.toastOptions).toEqual([{name: "1 white, 1 brown"}, {name: "2 white"}, {name: "2 brown"}])
        })
    })

    describe("the function to choose breakfast", function() {
        it("selects a breakfast item", function() {
            menu.selectBreakfastItem();
            // spyOn(Math, "random").and.returnValue(1);
            expect(menu.breakfastChoice).toBeDefined();
        })
        // it("gets added to the menu choice", function() {
        //     breakfastChoiceSpy = jasmine.createSpyObj('breakfastChoice', ['corn flakes']) 
        //     menu.selectBreakfastItem();
        //     // let menu.selectBreakfastItem(); return 'corn flakes'
        //     // create a fake method that returns corn flakes so can test that menu.selectbreakfastitem pushes it in to menuChoices???
        //     expect(menu.menuChoices).toContain('corn flakes')
        // })
    })

    describe("the function to choose toast", function() {
        it("selects a toast combination", function() {
            menu.selectToast();
            expect(menu.toastChoice).toBeDefined();
        })
    })

})