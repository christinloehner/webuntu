$( document ).ready(function() {
    function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        $('.second-hand').css({
            '-webkit-transform' : 'rotate(' + secondsDegrees + 'deg)',
            '-moz-transform'    : 'rotate(' + secondsDegrees + 'deg)',
            '-ms-transform'     : 'rotate(' + secondsDegrees + 'deg)',
            '-o-transform'      : 'rotate(' + secondsDegrees + 'deg)',
            'transform'         : 'rotate(' + secondsDegrees + 'deg)'
        });
        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
        $('.min-hand').css({
            '-webkit-transform' : 'rotate(' + minsDegrees + 'deg)',
            '-moz-transform'    : 'rotate(' + minsDegrees + 'deg)',
            '-ms-transform'     : 'rotate(' + minsDegrees + 'deg)',
            '-o-transform'      : 'rotate(' + minsDegrees + 'deg)',
            'transform'         : 'rotate(' + minsDegrees + 'deg)'
        });
        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
        $('.hour-hand').css({
            '-webkit-transform' : 'rotate(' + hourDegrees + 'deg)',
            '-moz-transform'    : 'rotate(' + hourDegrees + 'deg)',
            '-ms-transform'     : 'rotate(' + hourDegrees + 'deg)',
            '-o-transform'      : 'rotate(' + hourDegrees + 'deg)',
            'transform'         : 'rotate(' + hourDegrees + 'deg)'
        });
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var hrs = now.getHours();
        var minutes = now.getMinutes();
        var secs = now.getSeconds();
        var month = now.getMonth();
        var day = now.getDate();
        hrs = hrs < 10 ? `0${hrs}` : hrs;
        minutes = mins < 10 ? `0${minutes}` : minutes;
        secs = secs < 10 ? `0${secs}` : secs;
        var currenttime = day+". "+monthNames[month]+" "+hrs+":"+minutes+":"+secs;
        $("#dockclock").text(currenttime);
    }
    setInterval(setDate, 1000);
    setDate();
});
