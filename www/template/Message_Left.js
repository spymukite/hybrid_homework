function loadMessageLeft(index, time, message, ago) {
	var append_string = '';
	append_string += '<span class="msg_left">' + time + '</span>';
	append_string += '<div class="message mdl-shadow--2dp tme mdl-color--primary mdl-color-text--white"> ';
	append_string += '<p>' + message + '</p>';
	append_string += '<span>' + ago + '</span>';
	append_string += '</div>';
	append_string += '<a href="#Message_DeletePopup_Teacher" data-rel="popup" data-position-to="window" data-transition="pop" ><span class="closed_bttn_right deleteMessage"><i class="fa fa-trash-o cls_icon"></i></span></a>';

	$(index).append(append_string);
}