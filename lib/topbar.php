<div id="topbar">
    <div id="topleft">Aktivitäten</div>
    <div id="topmiddle">
        <span id="dockclock">
			<?php echo date("d. M H:i:s"); ?>
		</span>
		<div id="dockclockwindow">
			<div class="clock">
				<div class="outer-clock-face">
					<div class="marking marking-one"></div>
					<div class="marking marking-two"></div>
					<div class="marking marking-three"></div>
					<div class="marking marking-four"></div>
					<div class="inner-clock-face">
						<div class="hand hour-hand"></div>
						<div class="hand min-hand"></div>
						<div class="hand second-hand"></div>
					</div>
				</div>
			</div>
			<div id="color-calendar"></div>
			<script src="assets/calendar.js"></script>
		</div>
    </div>
    <div id="topright">
        <i class="fas fa-bell"></i>
        <i class="fas fa-battery-three-quarters"></i>
        <i class="fas fa-volume-up"></i>
        <i class="fas fa-at"></i>
        <a id="options"><i class="fas fa-angle-down"></i></a>
    </div>
</div>
