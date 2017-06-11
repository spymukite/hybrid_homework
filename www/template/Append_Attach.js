function AppendAttachment(id, filename)
{
	var append_string = '';
	append_string += '<div class="attachment" align="center">';

	var lastIndex = filename.lastIndexOf(".");
	var extension = filename.substring(lastIndex);
	if (extension == ".pdf")
		append_string += '<img src="images/icon_pdf.png">';
	else if (extension == ".doc" || extension == ".docx")
		append_string += '<img src="images/icon_doc.png">';
	else if (extension == ".wav" || extension == ".mp3" || extension == ".amr" || extension == ".3gp")
		append_string += '<img src="images/icon_audio.png">';
	else if (extension == ".jpg" || extension == ".jpeg" || extension == ".png")
		append_string += '<img src="images/icon_image.png">';
	else
		append_string += '<img src="images/icon_unknown.png"><br>';

	append_string += "</div>";

	$(id).append(append_string);
}