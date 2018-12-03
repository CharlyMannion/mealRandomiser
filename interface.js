$( document ).ready(function() {
    var menu = new Menu();

    $("#cerealChoice").hide();
    $('#cerealChoice').text(menu.selectBreakfastItem());

    $("#randomCereal").on('click', (function(){
        $("#randomCereal").hide();
        $("#cerealChoice").show();
    }));
});