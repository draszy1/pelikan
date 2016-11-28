/**
 * Created by draszy1 on 28.11.2016.
 */
$(function () {

    $("#requestAirspaceBtn").on('click', function (e) {
        e.preventDefault();
        $.post("airspace/request", null, function (data) {
            //show popup that requested
        })
    })
});
