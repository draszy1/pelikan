$(function () {

    //this must be like that, as list items are added dynamically
    $("#drone_list").on("click", ".list_item", function(e) {
        e.preventDefault();
        alert( $(this).text() );
    });
});