$( document ).ready(function() {
    var focus = 5;
    var x = 165;
    var y = 105;
    var c_info = 0;
    var c_links = 0;
    var c_cams = 0;
    var c_status = 0;
    var c_imp = 0;


    $( ".impressum" ).click(function() {
        var windowtitle = 'Impressum';
        var windowid = 'impwindow';
        var iconid = 'impicon';
        console.log($(windowid).length)
        if (c_imp <= 0) {
            c_imp = 1;
            x = x + 23;
            y = y + 17;
            if (x >= 460) { x = 185; }
            if (y >= 460) { y = 125; }
            var newwindow = '<div id="'+windowid+'" style="top:'+y+'px;left:'+x+'px;" class="window draggable"><div class="titlebar"><div class="controls"><button class="controlbutton exit">&#10005;</button><button class="controlbutton minimize">&#9472;</button><button class="controlbutton maximize">&#9723;</button></div><p class="title">'+windowtitle+'</p></div><div class="body text"><div class="texteditor"><strong>Impressum</strong><p><strong>Christin Löhner</strong><br> 78333 Stockach, Röntgenstr. 2<br> Telefon: 01590 170 4664<br> E‑Mail: <a href="mailto:info@christin-loehner.de">Christin Löhner</a></p><p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong><br> Christin Löhner<br> 78333 Stockach, Röntgenstr. 2<br> Telefon: 01590 170 4664<br> E‑Mail: <a href="mailto:info@christin-loehner.de">Christin Löhner</a></p></div></div></div></div>';
            $('#desktop').append($(newwindow).draggable());
            $('#'+iconid).addClass('active');
        } else {
            $('#'+windowid).toggle('fast');
            $('#'+iconid).toggleClass('minimized');
        }
    });


    $( ".icon_info" ).click(function() {
        var windowtitle = 'Info';
        var windowid = 'infowindow';
        var iconid = 'infoicon';
        console.log($(windowid).length)
        if (c_info <= 0) {
            c_info = 1;
            x = x + 23;
            y = y + 17;
            if (x >= 460) { x = 185; }
            if (y >= 460) { y = 125; }
            var newwindow = '<div id="'+windowid+'" style="top:'+y+'px;left:'+x+'px;" class="window draggable"><div class="titlebar"><div class="controls"><button class="controlbutton exit">&#10005;</button><button class="controlbutton minimize">&#9472;</button><button class="controlbutton maximize">&#9723;</button></div><p class="title">'+windowtitle+'</p></div><div class="body bash"><div class="terminal"><strong>Willkommen bei den Löhners!</strong><div class="terminalprompt"><span class="user">löhner@zuhause:</span><span class="location">~</span><span class="dollar">$</span><span class="welcome"></span></div></div></div></div>';
            $('#desktop').append($(newwindow).draggable());
            $('#'+iconid).addClass('active');
        } else {
            $('#'+windowid).toggle('fast');
            $('#'+iconid).toggleClass('minimized');
        }
    });


    $( ".icon_links" ).click(function() {
        var windowtitle = 'Links und Projekte';
        var windowid = 'linkswindow';
        var iconid = 'linksicon';
        if (c_links <= 0) {
            c_links = 1;
            x = x + 23;
            y = y + 17;
            if (x >= 460) { x = 185; }
            if (y >= 460) { y = 125; }
            var newwindow = '<div id="'+windowid+'" style="top:'+y+'px;left:'+x+'px;" class="window draggable"><div class="titlebar"><div class="controls"><button class="controlbutton exit">&#10005;</button><button class="controlbutton minimize">&#9472;</button><button class="controlbutton maximize">&#9723;</button></div><p class="title">'+windowtitle+'</p></div><div class="body bash"><div class="terminal"><strong>Willkommen bei den Löhners!</strong><div class="terminalprompt"><span class="user">löhner@zuhause:</span><span class="location">~</span><span class="dollar">$</span><span class="welcome"></span></div></div></div></div>';
            $('#desktop').append($(newwindow).draggable());
            $('#'+iconid).addClass('active');
        } else {
            $('#'+windowid).toggle('fast');
            $('#'+iconid).toggleClass('minimized');
        }
    });


    $( ".icon_cams" ).click(function() {
        var windowtitle = 'Webcams';
        var windowid = 'camswindow';
        var iconid = 'camsicon';
        if (c_cams <= 0) {
            c_cams = 1;
            x = x + 23;
            y = y + 17;
            if (x >= 460) { x = 185; }
            if (y >= 460) { y = 125; }
            var newwindow = '<div id="'+windowid+'" style="top:'+y+'px;left:'+x+'px;" class="window draggable"><div class="titlebar"><div class="controls"><button class="controlbutton exit">&#10005;</button><button class="controlbutton minimize">&#9472;</button><button class="controlbutton maximize">&#9723;</button></div><p class="title">'+windowtitle+'</p></div><div class="body bash"><div class="terminal"><strong>Willkommen bei den Löhners!</strong><div class="terminalprompt"><span class="user">löhner@zuhause:</span><span class="location">~</span><span class="dollar">$</span><span class="welcome"></span></div></div></div></div>';
            $('#desktop').append($(newwindow).draggable());
            $('#'+iconid).addClass('active');
        } else {
            $('#'+windowid).toggle('fast');
            $('#'+iconid).toggleClass('minimized');
        }
    });


    $( ".icon_status" ).click(function() {
        var windowtitle = 'Status';
        var windowid = 'statuswindow';
        var iconid = 'statusicon';
        if (c_status <= 0) {
            c_status = 1;
            x = x + 23;
            y = y + 17;
            if (x >= 460) { x = 185; }
            if (y >= 460) { y = 125; }
            var newwindow = '<div id="'+windowid+'" style="top:'+y+'px;left:'+x+'px;" class="window draggable"><div class="titlebar"><div class="controls"><button class="controlbutton exit">&#10005;</button><button class="controlbutton minimize">&#9472;</button><button class="controlbutton maximize">&#9723;</button></div><p class="title">'+windowtitle+'</p></div><div class="body bash"><div class="terminal"><strong>Willkommen bei den Löhners!</strong><div class="terminalprompt"><span class="user">löhner@zuhause:</span><span class="location">~</span><span class="dollar">$</span><span class="welcome"></span></div></div></div></div>';
            $('#desktop').append($(newwindow).draggable());
            $('#'+iconid).addClass('active');
        } else {
            $('#'+windowid).toggle('fast');
            $('#'+iconid).toggleClass('minimized');
        }
    });











///////////////////////////////////////////////////////////////////////////////

    $( ".icon_email" ).click(function() {
        window.location.href = "email.php";
    });
    $( ".icon_points" ).click(function() {
        window.location.href = "/";
    });
    $( ".icon_home" ).click(function() {
        window.location.href = "/";
    });
    $( "#dockclock" ).click(function() {
        if($("#dockclockwindow").is(":visible")) {
            $('#dockclockwindow').fadeOut('fast');
        } else {
            $('#dockclockwindow').fadeIn('fast');
        }
    });
    var mouse_is_inside = false;
    $('#dockclockwindow').hover(function(){
        mouse_is_inside=true;
    }, function(){
        mouse_is_inside=false;
    });
    $("body").mouseup(function(){
        if(!mouse_is_inside) $('#dockclockwindow').fadeOut('fast');
    });

    $('body').on('click', '.window', function() {
        focus = focus + 1;
        $(this).css('zIndex', focus);
    });
    $('body').on('click', '.minimize', function() {
        var myid = $(this).parent().parent().parent().attr('id');
        if (myid == 'infowindow') { var iconid = 'infoicon'; }
        if (myid == 'linkswindow') { var iconid = 'linksicon'; }
        if (myid == 'camswindow') { var iconid = 'camsicon'; }
        if (myid == 'statuswindow') { var iconid = 'statusicon'; }
        if (myid == 'impwindow') { var iconid = 'impicon'; }
        $('#'+myid).fadeOut('slow');
        $("#minimized").removeClass('hidden');
        $("#minimized").addClass('shown');
        $('#'+iconid).toggleClass('minimized');
    });
    $( "#minimized" ).click(function() {
        var myid = $(this).parent().parent().parent().attr('id');
        $('#'+myid).fadeIn('slow');
        $("#minimized").removeClass('shown');
        $("#minimized").addClass('hidden');
    });
    $('body').on('click', '.maximize', function() {
        var myid = $(this).parent().parent().parent().attr('id');
        $('#'+myid).toggleClass('maximized');
    });
    $('body').on('click', '.exit', function() {
        var myid = $(this).parent().parent().parent().attr('id');
        if (myid == 'infowindow') { c_info = 0; var iconid = 'infoicon'; }
        if (myid == 'linkswindow') { c_links = 0; var iconid = 'linksicon'; }
        if (myid == 'camswindow') { c_cams = 0; var iconid = 'camsicon'; }
        if (myid == 'statuswindow') { c_status = 0; var iconid = 'statusicon'; }
        if (myid == 'impwindow') { c_imp = 0; var iconid = 'impicon'; }
        $('#'+myid).fadeOut('slow');
        $('#'+myid).remove();
        $('#'+iconid).removeClass('active');
    });
    $('body').on('dblclick', '.titlebar', function() {
        $(this).parent().parent().parent().css("top", "");
        $(this).parent().parent().parent().css("left", "");
        $(this).parent().parent().parent().toggleClass('maximized');
    });
});

