<?php $__WINTITLE = "Sende Email..."; ?><?php
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
?><?php include('inc/header.php'); ?>
<style>.Terminal__body {
        background: rgb(255 255 255 / 90%);
        opacity: 1;
        padding: 5px;
    }

    .formline {
        border-bottom: 1px solid lightgrey;
        height: 30px;
        vertical-align: middle;
        line-height: 30px;
        clear: both;
    }

    .email_text {
        height: calc(100% - 125px);
    }

    .email_text textarea {
        width: 100%;
        height: 100%;
    }

    span.bold {
        float: left;
        display: block;
        width: 10%;
    }

    span.value {
        width: 88%;
        display: block;
        float: right;
        border-left: 1px solid lightgrey;
        padding-left: 5px;
    }

    .value input[type="text"] {
        height: 100%;
        width: 100%;
    }

    .buttons input[type="submit"] {
        float: right;
        width: 130px;
        height: 100%;
    }</style><?php include('inc/dialogbox.php'); ?><?php include('inc/terminal-header.php'); ?>
<form name="email" action="#" method="post">
	<div class="Terminal__body bash">
		<div class="formline email_from"><span class="bold">Von:</span> <span class="value"><input type="text"
																								   name="email"
																								   placeholder="Bitte Emailadresse angeben"/></span>
		</div>
		<div class="formline email_to"><span class="bold">An:</span> <span
					class="value">Christin und Michelle Löhner</span></div>
		<div class="formline email_subject"><span class="bold">Betreff:</span> <span class="value"><input type="text"
																										  name="betreff"
																										  placeholder="Der Betreff deiner Nachricht"/></span>
		</div>
		<div class="formline email_text"><textarea name="text" placeholder="Deine Nachricht..."></textarea></div>
		<div class="formline email_options"><span class="buttons"><input type="submit" name="submit" value="Absenden"/></span>
		</div>
	</div>
</form><?php include('inc/footer.php'); ?>
