// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {
    $(".btn-pepperonni").click(function() {
        $(".pep").toggle();
        $(this).toggleClass("active");
        
    })

    $(".btn-mushrooms").click(function() {
        $(".mushroom").toggle();
        $(this).toggleClass("active");
    })

    $(".btn-green-peppers").click(function() {
        $(".green-pepper").toggle();
        $(this).toggleClass("active");
    })

    $( ".crust" ).removeClass( "crust-gluten-free" )
    $( ".sauce" ).removeClass( "sauce-white" )

    $(".btn-sauce").click(function() {
        $(".sauce").toggleClass("sauce-white");
        $(this).toggleClass("active");
        $(this).remove("panel price");
    })

    $(".btn-crust").click(function() {
        $(".crust").toggleClass("crust-gluten-free");
        $(this).toggleClass("active");
    })
});

