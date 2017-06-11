
$(document).ready(function(){
    $('#attendance').on( 'click', '.click', function () {
       $(this).removeClass("click");
	   $(this).addClass("present2");
	   $(this).html("P").css("background-color", "#028e30");
	   $(this).parents('li').find(".entry_time").text(presentTime()).addClass("in_time");
	   var atnCount=$('#atnCount').html();
	   var resultAtnCount=parseInt(atnCount)+1;
	   $('#atnCount').html(resultAtnCount);
    });
$('#attendance').on( 'click', '.present2', function () {
       $(this).removeClass("present2");
	   $(this).addClass("abscence2");
	   $(this).html("A").css("background-color", "red");
	   $(this).parents('li').find(".entry_time").text("");
	   var atnCount=$('#atnCount').html();
	   var resultAtnCount=parseInt(atnCount)-1;
	   if(resultAtnCount<0)
	   {
		$('#atnCount').html(atnCount);
	   }
	   else
	   {
		$('#atnCount').html(resultAtnCount);
	   }
    });
	$('#attendance').on( 'click', '.abscence2', function () {
	
       $(this).removeClass("abscence2");
	   $(this).addClass("late2");
	   $(this).html("L").css("background-color", "orange");
	   $(this).parents('li').find(".entry_time").text(presentTime());
	   var atnCount=$('#atnCount').html();
	   var resultAtnCount=parseInt(atnCount)+1;
	   $('#atnCount').html(resultAtnCount);
    });
	$('#attendance').on( 'click', '.late2', function () {
       $(this).removeClass("late2");
	   $(this).addClass("present2");
	   $(this).html("P").css("background-color", "#028e30");
	   $(this).parents('li').find(".entry_time").text(presentTime());
    });
	
	
});

function presentTime() {
  var date=new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var presentTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  return presentTime;
}

   $( window ).load(function() {
                                var output = '<ul data-role="listview" data-filter="true" class="dash_mv " data-inset="true" data-input="#attn-input">';
                                    $.getJSON('attendance.json', function(data) {
                                    $.each(data, function(key, val){
                                                if(val.todayAttendance == '') {
    output += ' <li class="mdl-shadow--2dp">';
    output += ' <a href="#Attendance_details" class="st_name">';
	output += ' <img class="studentlogo mdl-shadow--2dp" alt="" src="'+val.studentProfilePic+'"><p>'+val.studentName+'</p><span><i class="chat2_i">ID :'+val.studentId+'</i></span>';
	 output += ' <span class="entry_time"></span>';
	output += '</a>';
    output += ' <div class="click call_btt"><a href="#">C</a></div>';
    output += '  </li>';
                                                   }
                                         });
                                      output += '</ul>';
                                      $('#attendance').empty();
                                      $('#attendance').append(output).trigger("create");
                                    }); 
                                    
});


