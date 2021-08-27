<?php
$window_title		=	'Impressum';
$window_handle		=	'.impressum';
$window_class		=	'impwindow';
$window_icon		=	'impicon';
$window_type		=	'text';
$window_content 	= 	'

<div class="texteditor">
	<strong>Impressum</strong>
	<p>
		<strong>Copyright &copy; 2021 by Christin Löhner &lt;webuntu@christin-loehner.de&gt;</strong>
	</p>
	<p>
		<strong>Christin Löhner</strong><br>
		78333 Stockach, Röntgenstr. 2<br>
		Telefon: 01590 170 4664<br>
		E‑Mail: <a href="mailto:info@christin-loehner.de">Christin Löhner</a>
	</p>
	<p>
		<strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong><br>
		Christin Löhner<br>
		78333 Stockach, Röntgenstr. 2<br>
		Telefon: 01590 170 4664<br>
		E‑Mail: <a href="mailto:info@christin-loehner.de">Christin Löhner</a>
	</p>
</div>

';
$window_content = preg_replace( "/\r|\n/", "", $window_content);
$window_content = preg_replace( "/\s\s+/", " ", $window_content);
?><script>
    var c_imp = 0;
    $( document ).ready(function() {
        $("<?php echo $window_handle; ?>").click(function() {
            c_imp = openWindow('<?php echo $window_title; ?>', '<?php echo $window_class; ?>', '<?php echo $window_icon; ?>', '<?php echo $window_type; ?>', '<?php echo $window_content; ?>', positions, c_imp);
        });
    });
</script>