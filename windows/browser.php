<?php
$window_title		=	'Webbrowser';
$window_class		=	'webbrowser';
$window_icon		=	'browsericon';
$window_type		=	'browser';
$window_content 	= 	'<div class="'.$window_class.'">
    <form id="addressbar" name="address" action="" method="post">
		<input type="text" id="url" name="url" placeholder="https://www.nginx.org" required /><input type="submit" name="submit" value="OK"/>
	</form>
    <iframe id="browserwindow" src=""></iframe>
</div>';

$window_content = preg_replace( "/\r|\n/", "", $window_content);
$window_content = preg_replace( "/\s\s+/", " ", $window_content);
?><script>
    var c_browser = 0;
    $( document ).ready(function() {
        $("#<?php echo $window_icon; ?>").click(function() {
            c_browser = openWindow('<?php echo $window_title; ?>', '<?php echo $window_class; ?>', '<?php echo $window_icon; ?>', '<?php echo $window_type; ?>', '<?php echo $window_content; ?>', positions, c_browser);
        });
    });
</script>
