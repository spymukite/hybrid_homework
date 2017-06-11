function loadTextMessage(id, type, time, message, editedMessage, homeworkTargetDate)
{
	var append_string = '';
	if (type == "Student")
	{
		append_string += '<a href="#HomeStudentChat">';
	}
	append_string += '<span>' + time + '</span>';
	if (type == "Teacher")
	{
		append_string += '<a href="#HomeworkDetails">';
		append_string += '<img class="minilogo mdl-shadow--2dp" alt="" src="images/user.jpg">';
		append_string += '</a>';
	}
	append_string += '<div class="message mdl-shadow--2dp tme mdl-color--primary mdl-color-text--white">';
	if (editedMessage)
		append_string += '<p>' + editedMessage + '</p>';
	else
		append_string += '<p>' + message + '</p>';

	if (homeworkTargetDate)
		append_string += '<span class="homeworkTargetDate">' + homeworkTargetDate + '</span>';
	else
		append_string += '<span class="homeworkTargetDate"></span>';
	append_string += '<div class="attach-list"><div class="row" style="margin-bottom: 20px !important;">';
	append_string += '</div></div>';
	append_string += '</div>';


	if (type == "Teacher")
		append_string += '<a href="#Homework_DeletePopup_Teacher" data-rel="popup" data-position-to="window" data-transition="pop" >';
	else
		append_string += '<a href="#Homework_DeletePopup_Student" data-rel="popup" data-position-to="window" data-transition="pop" >';
	append_string += '<span class="closed_bttn deleteMessage">';
	append_string += '<i class="fa fa-trash-o cls_icon"></i>';
	append_string += '</span>';
	append_string += '</a>';

	if (type == "Teacher")
	{
		append_string += '<a href="#Homework_EditPopup_Teacher" data-rel="popup" data-position-to="window" data-transition="pop" >';
		append_string += '<span class="edit_bttn ClickToEditHomeworkMessage" type="text">';
		append_string += '<i class="fa fa-pencil cls_icon"></i>';
		append_string += '</span>';
		append_string += '</a>';
	}

	if (type == "Student")
	{
		append_string += '</a>';
	}

	$(id).html(append_string);
}
