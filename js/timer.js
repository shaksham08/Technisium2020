var deadline = new Date("Mar 14, 2020 00:08:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "D " +
        hours + "H " + minutes + "M " + seconds + "S ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EVENT IS LIVE";
    }
}, 1000);