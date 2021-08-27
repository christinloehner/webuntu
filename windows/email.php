<?php
// Array ( [email] => foo@bar.to [betreff] => nur ein test [text] => eine Nachricht [submit] => Absenden )
if (isset($_REQUEST) === true && trim($_REQUEST['submit']) == "Absenden") {
    $empfaenger = 'info@christin-loehner.de';
    $betreff = "[home] " . trim($_REQUEST['betreff']);
    $nachricht = "Email aus dem Emailformular von home.christin-loehner.de
---------------------------------------------------------
Betreff: " . trim($_REQUEST['betreff']) . "
Nachricht:
" . trim($_REQUEST['text']);
    $header = 'From: ' . trim($_REQUEST['email']) . '' . "\r\n" .
        'Reply-To: ' . trim($_REQUEST['email']) . '' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    mail($empfaenger, $betreff, $nachricht, $header);
    $sendclass = "hidden";
    $dialogclass = "shown";
    $__MESSAGE = "Vielen Dank! Die Nachricht wurde gesendet.";
}

$window_title		=	'Send us an email!';
$window_class		=	'emailwindow';
$window_icon		=	'emailicon';
$window_type		=	'application';
$window_content 	= 	'


<div class="email">
    <form id="emailform" name="email" action="#" method="post">
		<div class="Terminal__body bash">
			<div class="formline email_from"><span class="bold">Von:</span> <span class="value">
				<input type="text" name="email" placeholder="Bitte Emailadresse angeben" required /></span>
			</div>
			<div class="formline email_to"><span class="bold">An:</span> <span
				class="value">Christin und Michelle Löhner</span>
			</div>
			<div class="formline email_subject"><span class="bold">Betreff:</span> <span class="value">
				<input type="text" name="betreff" placeholder="Der Betreff deiner Nachricht" required /></span>
			</div>
			<div class="formline email_text"><textarea name="text" placeholder="Deine Nachricht..." required ></textarea></div>
			<div class="formline email_options"><span class="buttons"><input type="submit" name="submit" value="Absenden"/></span></div>
		</div>
	</form>
</div>


';
$window_content = preg_replace( "/\r|\n/", "", $window_content);
$window_content = preg_replace( "/\s\s+/", " ", $window_content);
?><script>
    var c_email = 0;
    $( document ).ready(function() {
        $("#<?php echo $window_icon; ?>").click(function() {
            c_email = openWindow('<?php echo $window_title; ?>', '<?php echo $window_class; ?>', '<?php echo $window_icon; ?>', '<?php echo $window_type; ?>', '<?php echo $window_content; ?>', positions, c_email);
            /*
            $( "#emailform" ).submit(function( event ) {
                c_email = 0;
                $('#<?php echo $window_class; ?>').fadeOut('fast');
                $('#<?php echo $window_class; ?>').remove();
                $('#<?php echo $window_icon; ?>').removeClass('active');
                event.preventDefault();
            });
            */
        });
    });
</script>