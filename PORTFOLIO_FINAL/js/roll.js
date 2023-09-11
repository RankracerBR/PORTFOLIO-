$(document).ready(function() {
    $("#Projetos a").click(function(e) {
        e.preventDefault(); 
        var targetOffset = $("#Projetos_").offset().top;
        $("html, body").animate({
            scrollTop: targetOffset
        }, 1000);
    });
});