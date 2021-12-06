//$(document).ready(function () { 
//    $(".datetimepicker1").datepicker({
//        beforeShow: function (input, inst) {
//            setTimeout(function () {
//                inst.dpDiv.css({
//                    top: $(".datetimepicker1").offset().top + 35,
//                    left: $(".datetimepicker1").offset().left
//                });
//            }, 0);
//        }
//    }); 


//    $("input").focus(function () {
//        $('html, body').animate({ scrollTop: $(this).offset().top - 25 }, 10);
//    });
//});

$(document).ready(function () {
    // Set Datepicker
    $(".datetimepicker1").datepicker({
        beforeShow: function (input, inst) {
            setTimeout(function () {
                inst.dpDiv.css({
                    top: $(".datetimepicker1").offset().top + 35,
                    left: $(".datetimepicker1").offset().left
                });
            }, 0);
        }
    });

    $("input").focus(function () {
        $('html, body').animate({ scrollTop: $(this).offset().top - 25 }, 10);
    });

});