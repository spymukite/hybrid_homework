function loadEditDialog(id) {
    var append_string = '';
    append_string += '<div data-role="header" data-theme="a" class="pop_header">';
    append_string += '<h1 class="pop_h1">Edit Page?</h1>';
    append_string += '</div>';
    append_string += '<div role="main" class="ui-content">';
    append_string += '<h3 class="ui-title pop_h3">Are you sure?</h3>';
    append_string += '<p class="pop_p">';
    append_string += '<textarea data-mini="true" cols="40" rows="8"  style="border:1px solid #FFF;" name="textarea-14" id="homeworkMessageTextSelected"></textarea>';
    append_string += '</p>';
    append_string += '<p class="pop_p">';
    append_string += '<input data-role="date" class="date_input" style="border:1px solid #FFF;" type="text" id="homeworktargetdate">';
    append_string += '</p>';
    append_string += '<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b cancel" data-rel="back">No,cancel it!</a>';
    append_string += '<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b delete" data-rel="back" data-transition="flow" id="homeworkEditMessage">Yes, submit!</a>';
    append_string += '</div>';

    $(id).append(append_string);
}