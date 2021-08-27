<?php
$window_title		=	'Status';
$window_handle		=	'.icon_status';
$window_class		=	'statuswindow';
$window_icon		=	'statusicon';
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
    var c_status = 0;
    $( document ).ready(function() {
        $("<?php echo $window_handle; ?>").click(function() {
            c_status = openWindow('<?php echo $window_title; ?>', '<?php echo $window_class; ?>', '<?php echo $window_icon; ?>', '<?php echo $window_type; ?>', '<?php echo $window_content; ?>', positions, c_status);
        });
    });
</script>