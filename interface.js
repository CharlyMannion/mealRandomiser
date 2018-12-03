$( document ).ready(function() {
    var menu = new Menu();

    $("#choice").hide();
    $('#choice').text(menu.selectBreakfastItem());

    $("#randomCereal").on('click', (function(){
        $("#randomCereal").hide();
        $("#choice").show();
    }));
});