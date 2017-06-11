var media;
var mediaTimer;
var isRecording = false;
$(document).ready(function() {
	$('#play-button').mousedown(function() {
		$(this).attr("src", "images/play_button_on.png");
	});

	$('#play-button').mouseup(function() {
		isRecording = true;
		$(this).attr("src", "images/play_button.png");
		var date = new Date();
		var filename = date.getTime() + ".mp3";
		media = new Media(date.getTime() + ".mp3");

		window.localStorage.setItem("audio_file", filename); // Store file name for attach purpose later.

		media.startRecord();

		mediaTimer = setInterval(function() {
			if (isRecording == true)
			{
				$('#slider').val(parseInt($('#slider').val()) + 1);
				$('#slider').slider('refresh');
			}
		}, 1000);
	});

	$('#stop-button').mousedown(function() {
		$(this).attr("src", "images/stop_button_on.png");
	});

	$('#stop-button').mouseup(function() {
		isRecording = false;
		$(this).attr("src", "images/stop_button.png");
		media.stopRecord();
		$('#slider').val(0);
		$('#slider').slider('refresh');
		clearTimeout(mediaTimer);
	});
});