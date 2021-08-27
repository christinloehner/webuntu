<?php
$window_title		=	'Links und Projekte';
$window_class		=	'linkswindow';
$window_icon		=	'linksicon';
$window_type		=	'bash';
$window_content 	= 	'


<div class="terminal">
    <strong>Willkommen bei den Löhners!</strong>
    <div class="terminalprompt">
        <span class="user">löhner@zuhause:</span>
        <span class="location">~</span>
        <span class="dollar">$</span>
        <span class="welcome"></span>
    </div>
</div>


';
$window_content = preg_replace( "/\r|\n/", "", $window_content);
$window_content = preg_replace( "/\s\s+/", " ", $window_content);
?><script>
    var c_links = 0;
    $( document ).ready(function() {
        $("#<?php echo $window_icon; ?>").click(function() {
            c_links = openWindow('<?php echo $window_title; ?>', '<?php echo $window_class; ?>', '<?php echo $window_icon; ?>', '<?php echo $window_type; ?>', '<?php echo $window_content; ?>', positions, c_links);
        });
    });
</script>