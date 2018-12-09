$( document ).ready(function() {
    var menu = new Menu();

    $("#cerealOptions").hide();
    $("#cerealOptions").text(menu.displayCerealOptions());
    $("#toastOptions").hide();
    $("#toastOptions").text(menu.displayToastOptions());
    $("#coldPuddingOptions").hide();
    $("#coldPuddingOptions").text(menu.displayColdPuddingOptions());
    $("#snackOptions").hide();
    $("#snackOptions").text(menu.displaySnackOptions());

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

    $("#viewMenu").on('click', (function(){
        $("#viewMenu").hide();
        $("#randomCereal").hide();
        $("#randomToast").hide();
        $("#randomColdPudding").hide();
        $("#randomSnack").hide();
        $("#cerealChoice").hide();    
        $("#toastChoice").hide();    
        $("#coldPuddingChoice").hide();    
        $("#snackChoice").hide();
        $("#explanationHeading").hide();

        $("#cerealOptions").show();
        $("#toastOptions").show();
        $("#coldPuddingOptions").show();
        $("#snackOptions").show();

        $("#resetPage").text("Go Back");
    }));
});