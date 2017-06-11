 $( window ).load(function() {
		 var output = '<ul data-role="listview" data-filter="true" class="dash_mv " data-inset="true" data-input="#rich-autocomplete-input">';
		    $.getJSON('studentsList.json', function(data) {
		    $.each(data, function(key, val){
				
				  output += ' <li class="mdl-shadow--2dp">';
     output += '<a href="#Student_details" class="st_name">';
	 output += '<img class="studentlogo mdl-shadow--2dp" alt="" src="'+val.studentProfilePic+'">';
	 output += '<p>'+val.studentName+'</p><span><i class="chat2_i">ID : '+val.studentId+'</i></span>';
    
     output += '</a>';
    output += ' <span class="call_sc"><a href="tel:'+val.contactNo+'"><i class="material-icons stud_call ">&#xE0B0;</i></a></span>';
    output += ' </li>';
				
				
				
				 // output += '<li><a href="st_profile.html?studentId='+val.studentId+'">';
				 // output += '<div class="message mdl-shadow--2dp mdl-color--primary mdl-color-text--white school_list">';
				 // output += '<img src="'+val.studentProfilePic+'" alt="" class="studentlogo mdl-shadow--2dp"> ';
                 // output += '<p class="stud_call">'+val.studentName+'</p>';
                 // output += '<span><i class="chat2_i">ID : '+val.studentId+'</i></span>';
                 // output += '</div></a>';
				 // output += '<a class="no-accent-color mdl-button mdl-js-button mdl-button--icon call_btt" //href="tel:'+val.contactNo+'"><i class="material-icons stud_call ">&#xE0B0;</i></a>';
                 // output += '</li>';
		         });
		      output += '</ul>';
		      $('#studentList').empty();
		      $('#studentList').append(output).trigger("create");
		    }); 
		    
});
