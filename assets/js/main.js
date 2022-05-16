function setCountry(code){
    if(code || code==''){
        var text = jQuery('a[cunt_code="'+code+'"]').html();
        $(".country-dropdown dt a span").html(text);
    }
}
$(document).ready(function() {
    $(".country-dropdown img.flag").addClass("flagvisibility");

    $(".country-dropdown dt a").click(function() {
        $(".country-dropdown dd ul").toggle();
    });

    $(".country-dropdown dd ul li a").click(function() {
        //console.log($(this).html())
        var text = $(this).html();
        $(".country-dropdown dt a span").html(text);
        $(".country-dropdown dd ul").hide();
        $("#result").html("Selected value is: " + getSelectedValue("country-select"));
    });

    function getSelectedValue(id) {
        //console.log(id,$("#" + id).find("dt a span.value").html())
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("country-dropdown"))
            $(".country-dropdown dd ul").hide();
    });


    $("#flagSwitcher").click(function() {
        $(".country-dropdown img.flag").toggleClass("flagvisibility");
    });
});