function loadDeleteDialog(id) {
	var append_string = '';
	append_string += '<div data-role="header" data-theme="a" class="pop_header">';
	append_string += '<h1 class="pop_h1">Delete Page?</h1>';
	append_string += '</div>';
	append_string += '<div role="main" class="ui-content">';
	append_string += '<h3 class="ui-title pop_h3">Are you sure?</h3>';
	append_string += '<p class="pop_p">You will not be able to recover this msg! </p>';
	append_string += '<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b cancel" data-rel="back">No,cancel it!</a>';
	append_string += '<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b delete" data-rel="back" data-transition="flow" id="homeworkDeleteMessage">Yes,delete it!</a>';
	append_string += '</div>';

	$(id).append(append_string);
}
