$( document ).ready(function() {
    var menu = new Menu();

    $("#cerealChoice").hide();
    $('#cerealChoice').text(menu.selectBreakfastItem());

    $("#toastChoice").hide();
    $('#toastChoice').text(menu.selectToast());

    $("#coldPuddingChoice").hide();
    $('#coldPuddingChoice').text(menu.selectColdPudding());

    $("#snackChoice").hide();
    $('#snackChoice').text(menu.selectSnack());

    $("#randomCereal").on('click', (function(){
        $("#randomCereal").hide();
        $("#cerealChoice").show();
    }));

    $("#randomToast").on('click', (function(){
        $("#randomToast").hide();
        $("#toastChoice").show();
    }));

    $("#randomColdPudding").on('click', (function(){
        $("#randomColdPudding").hide();
        $("#coldPuddingChoice").show();
    }));

    $("#randomSnack").on('click', (function(){
        $("#randomSnack").hide();
        $("#snackChoice").show();
    }));

    $('#resetPage').click(function() {
        location.reload();
    });
});