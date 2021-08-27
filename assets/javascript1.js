var focus = 5;
var positions = [165, 105];

function openWindow (title, id, icon, cssclass, content, positions, counter) {
    if (counter <= 0) {
        counter = 1;
        positions[0] = positions[0] + 23;
        positions[1] = positions[1] + 17;
        if (positions[0] >= 460) { positions[0] = 185; }
        if (positions[1] >= 460) { positions[1] = 125; }
        var newwindow = '<div id="'+id+'" style="top:'+positions[1]+'px;left:'+positions[0]+'px;" class="window draggable"><div class="titlebar"><div class="controls"><button class="controlbutton exit">&#10005;</button><button class="controlbutton minimize">&#9472;</button><button class="controlbutton maximize">&#9723;</button></div><p class="title">'+title+'</p></div><div class="body '+cssclass+'">'+content+'</div></div></div>';
        $('#desktop').append($(newwindow).draggable());
        $('#'+icon).addClass('active');
    } else {
        $('#'+id).toggle('slow');
        $('#'+icon).toggleClass('minimized');
    }
    return [ counter, positions[0], positions[1] ];
}

$( document ).ready(function() {

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
            $('#dockclockwindow').fadeOut('slow');
        } else {
            $('#dockclockwindow').fadeIn('slow');
        }
    });
    var mouse_is_inside = false;
    $('#dockclockwindow').hover(function(){
        mouse_is_inside=true;
    }, function(){
        mouse_is_inside=false;
    });
    $("body").mouseup(function(){
        if(!mouse_is_inside) $('#dockclockwindow').fadeOut('slow');
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
    $(document).on("contextmenu", ".dash_icons", function(event) {
        event.preventDefault();
    });
    $(document).on("contextmenu", "#topbar", function(event) {
        event.preventDefault();
    });
    $(document).on("contextmenu", "#desktop", function(event) {
        event.preventDefault();
        if($("#context").is(":visible")) {
            $('#context').hide();
        } else {
            $("#context").css({left:event.pageX, top:event.pageY});
            $('#context').show();
        }
        event.preventDefault();
    });
    var mouse_is_inside_context = false;
    $('#context').hover(function(){
        mouse_is_inside_context=true;
    }, function(){
        mouse_is_inside_context=false;
    });
    $("body").mouseup(function(){
        if(!mouse_is_inside_context) $('#context').hide();
    });
    $(document).on("mouseup", "html", function(event) {
        event.preventDefault();
    });
    $(document).on("mouseup", "body", function(event) {
        event.preventDefault();
    });
    $(document).on("mouseup", "#desktop", function(event) {
        event.preventDefault();
    });
    $(document).on("contextmenu", ".window", function(event) {
        event.preventDefault();
    });
});