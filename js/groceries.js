$(document).ready(function () {
    $("form").submit(function (event) {
        var userinput = $("#input").val();
        var items = [];
        items.push(userinput.split(",") );
        items.sort();

        items.forEach(function (item) {
            $("#List").append("<li>"+ item + "</li>") //console.log(item);
            //document.getElementById("#List").innerHTML+="<li>"+ item + "</li>";
        });
        event.preventDefault();

    });
});
