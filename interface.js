$( document ).ready(function() {
    var menu = new Menu();

    $("#choice").hide();
    $('#choice').text(menu.selectBreakfastItem());
    
    $("button").click(function(){
        $("#randomCereal").hide();
        $("#choice").show();
    });
});