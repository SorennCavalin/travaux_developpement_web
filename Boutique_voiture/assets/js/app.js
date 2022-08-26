$(function () {
    // menu hamburger

    $('.menu-btn').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
    })
    $('.location').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('menu-location_active');
        $('.villes').toggleClass('ville_active');
    })




    // date pickers

    // on cree 2 datePickers de sélection de range
    var dateFormat = "mm/dd/yy";

    // datepicker permettant de selectionner le début de la periode
    var from = $( "#from" )
    .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        showAnim: 'fadeIn',
        numberOfMonths: 1,
        showButtonPanel: true
    })
    .on( "change", function() {
        // on configure le datepicker opposé en fonction du choix utilisateur
        to.datepicker( "option", "minDate", getDate( this ) );
    });

    // datepicker permettant de selectionner la fin de la periode
    var to = $( "#to" )
    .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        showAnim: 'fadeIn',
        numberOfMonths: 1,
        showButtonPanel: true
    })
    .on( "change", function() {
        // on configure le datepicker opposé en fonction du choix utilisateur
        from.datepicker( "option", "maxDate", getDate( this ) );
    });

    function getDate( element ) {
        var date;
        try {
        date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
        date = null;
        }

        return date;
    }

    // on permet aux click sur les icones de déclencher 
    // l'ouverture des pickers
    $(".picker-from .triggerIcon").on('click', function(e){
        from.datepicker("show");
    });

    $(".picker-to .triggerIcon").on('click', function(e){
        to.datepicker("show");
    })



    // carousels
    var tabHeader = ["./assets/img/background.jpg","https://cdn.pixabay.com/photo/2014/07/13/19/45/edsel-ranger-392745_960_720.jpg"]
    var bkgHeader = new MySlider($('.bkg-slider'), tabHeader)
    $('.bkg-slider').removeAttr('style')
    var tabHeader2 = ["./assets/img/vehicule2.png", "./assets/img/vehicule3.png","assets/img/vehicule1.png","assets/img/vehicule4.png"]
    var choice1 = new MySlider2($('.n1'), tabHeader2)
    var choice2 = new MySlider2($('.n2'), tabHeader2)
    var choice3 = new MySlider2($('.n3'), tabHeader2)
    var choice4 = new MySlider2($('.n4'), tabHeader2)
    var choice5 = new MySlider2($('.n5'), tabHeader2)
    $('.img-holder').removeAttr('style')
    choice1.stop()
    choice2.stop()
    choice3.stop()
    choice4.stop()
    choice5.stop()
    
    $('.bkg-slider img').first().nextAll().addClass('full-img')
})