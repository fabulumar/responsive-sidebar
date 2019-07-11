$(function () {
    "use strict";

    $(".mobile-sidebar-toggler").on("click", function () {
        $(".sidebar").toggleClass("open");
    });

    $("#sidebar .sidebar-toggler").on("click", function () {
        $("body").toggleClass("sidebar-collapsed");
        $("#sidebar > .sidebar-content > .tab-pane > .nav > .nav-item > .collapse").addClass("show");
    });

    var count = 0;
    $("#sidebar .sidebar-toggler").click(function () {
        count++;
        //even odd click detect 
        var isEven = function (someNumber) {
            return (someNumber % 2 === 0) ? true : false;
        };
        // on odd clicks do this
        if (isEven(count) === false) {
            $('.sidebar-collapsed #sidebar [data-toggle="tooltip"]').tooltip({
                sanitize: true,
                boundary: 'window',
                offset: "0,30"
            });
        }
        // on even clicks do this
        else if (isEven(count) === true) {
            $('[data-toggle="tooltip"]').tooltip('dispose');
        }
    });
});