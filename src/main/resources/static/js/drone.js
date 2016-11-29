/**
 * Created by draszy1 on 28.11.2016.
 */
$(function () {
    $("#retrieveDronesBtn").on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'drone/get',
            dataType: 'text',
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function( data, textStatus, jQxhr ){
                $.each(data, function(i, item){
                    $('#drone_list').append('<div class=\"list_item\">' + item.id + '</div>');
                    showOnMap(item);
                });
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    })
});