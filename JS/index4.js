$(document).ready(function () {
    $("#but1").click(function () {

        for (let i = 0; i < 10000; i++) {
            $("#div1").hide(1000);
            $("#div2").hide(1000);
            $("#div3").hide(1000);
            $("#div4").hide(1000);
            $("#div5").hide(1000);

            $("#div1").show(1000);
            $("#div2").show(1000);
            $("#div3").show(1000);
            $("#div4").show(1000);
            $("#div5").show(1000);
        }

    });
});