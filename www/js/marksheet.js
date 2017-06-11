
$( window ).load(function() {

	var output = '<ul>';
    $.getJSON('marksstudentlist.json', function(data) {
            $.each(data, function(key, val){
                output += '<li><a href="st_marks.html">';
                output += '<div class="message mdl-shadow--2dp mdl-color--primary mdl-color-text--white school_list">';
                output += '<img src="'+val.studentProfilePic+'" alt="" class="studentlogo mdl-shadow--2dp">';
                output += '<p>'+val.studentName+'</p>';
                output += '<span><i class="chat2_i">ID : '+val.studentId+'</i></span>';
                output += '<a href="mark_papper.html" class="no-accent-color mdl-button mdl-js-button mdl-button--icon call_btts" data-upgraded=",MaterialButton"><i class="material-icons paaper_corr2">&#xE873;</i></a>';
                output += ' </div></a>';
                output += '</li>';
            });
		output += '</ul>';
		$('#marksstudentlist').empty();
		$('#marksstudentlist').append(output).trigger("create");
	}); 
                                    
});
$(function() {
$('#waterfallW-exp').keyup(function(){
	var searchField = $('#waterfallW-exp').val();
    var regex = new RegExp(searchField, "i");
    var output = '<ul>';
    $.getJSON('marksstudentlist.json', function(data) {
		$.each(data, function(key, val){
			if(val.studentName.search(regex) != -1) {
				output += '<li><a href="st_marks.html">';
				output += '<div class="message mdl-shadow--2dp mdl-color--primary mdl-color-text--white school_list">';
				output += '<img src="'+val.studentProfilePic+'" alt="" class="studentlogo mdl-shadow--2dp">';
				output += '<p>'+val.studentName+'</p>';
                output += '<span><i class="chat2_i">ID : '+val.studentId+'</i></span>';
                output += '<a href="mark_papper.html" class="no-accent-color mdl-button mdl-js-button mdl-button--icon call_btts" data-upgraded=",MaterialButton"><i class="material-icons paaper_corr2">&#xE873;</i></a>';
                output += ' </div></a>';
				output += '</li>';
        }
      });
	 
      output += '</ul>';
       $('#marksstudentlist').empty();
	   $('#marksstudentlist').append(output).trigger("create");
    });
}); 
$('#keyZero').click(function()
	{
	   var txtlen=$('#studentMark').html().length; 
	   if(txtlen<=2)
		{
			$('#studentMark').append('0');
		}
		
	});
$('#keyOne').click(function()
	{
	   var txtlen=$('#studentMark').html().length; 
	   if(txtlen<=2)
		{
			$('#studentMark').append('1');
		}
	});
$('#keyTwo').click(function()
	{
	   var txtlen=$('#studentMark').html().length; 
	   if(txtlen<=2)
	   {
			$('#studentMark').append('2');
	   }
	});
	
$('#keyThree').click(function()
	{
	   var txtlen=$('#studentMark').html().length; 
	   if(txtlen<=2)
	   {
			$('#studentMark').append('3');
	   }
	});
$('#keyFour').click(function()
	{
		var txtlen=$('#studentMark').html().length; 
		if(txtlen<=2)
		{
			$('#studentMark').append('4');
		}
	});
$('#keyFive').click(function()
	{
	   var txtlen=$('#studentMark').html().length; 
	   if(txtlen<=2)
	   {
			$('#studentMark').append('5');
	   }
	});
$('#keySix').click(function()
	{
	   var txtlen=$('#studentMark').html().length; 
	   if(txtlen<=2)
	   {
			$('#studentMark').append('6');
	   }
	});
$('#keySeven').click(function()
	{
	   var txtlen=$('#studentMark').html().length; 
	   if(txtlen<=2)
	   {
			$('#studentMark').append('7');
	   }
	});
$('#keyEight').click(function()
	{
	   var txtlen=$('#studentMark').html().length; 
	   if(txtlen<=2)
	   {
			$('#studentMark').append('8');
	   }
	});
$('#keyNine').click(function()
	{
	   var txtlen=$('#studentMark').html().length; 
	   if(txtlen<=2)
	   {
			$('#studentMark').append('9');
	   }
	});
$('#keyClear').click(function()
	{
		$('#studentMark').html('');
	});
  
//==============variables declaration===============
var studentArrayVal=0;
var studentsListLength=0;
var studentId='';
var studentName='';
var studentMark='';	
var studentsMarkList=new Array();
studentsMarkList=[];

//============== End of variables declaration===============
//===================Start Mark======================
$('.mark').click(function(){
if(testarrayList(studentId)== 0) 
			{
			getStudentName(studentArrayVal);
			}
			else
			{
			getStudentDetail(studentArrayVal);
			}
		
		
		$('.keyboard').css('display','block');
		if(studentArrayVal==0)
		{
		$('#keyPrev').css('display','none');
		}
		else
		{
		$('#keyPrev').css('display','block');
		}
}); 
function getStudentName(studentArrayVal)
	{
    $.getJSON('marksstudentlist.json', function(studentsList) {
			studentsListLength=(studentsList.length)-1;
			if(studentsListLength>=studentArrayVal)
			{
				studentId=studentsList[studentArrayVal].studentId;
				studentName=studentsList[studentArrayVal].studentName;
				$('#MarksheetEnterStudentName').empty();
				$('#MarksheetEnterStudentName').html(studentName);
				$('#studentMark').html('');
			}
			
      });
	
}
//=========================End basic detail shown===========
$('.keyNext').click(function()
	{    
		
		 studentMark=$('#studentMark').html();
		   
		    $('#keyPrev').css('display','block');
		    studentArrayVal=studentArrayVal+1;
			showSubmitBtn(studentsListLength,studentArrayVal);
			if(testarrayList(studentId)== 0) 
			{
				addStudentMark(studentId,studentName,studentMark,studentArrayVal);
			}
			else 
			{
				getStudentDetail(studentArrayVal);
				var preStudentArrayVal=parseInt(studentArrayVal)-1;
				if(studentMark!=studentsMarkList[preStudentArrayVal].studentMark)
				{
				studentsMarkList[preStudentArrayVal].studentMark=studentMark;
				}
			}
			
			
		
	});
function addStudentMark(studentId,studentName,studentMark,studentArrayVal)
	{
		studentsMarkList.push({
			studentId:studentId,
			studentName: studentName,
			studentMark: studentMark
		});
	if(testarrayList(studentId)== 0) 
			{
			getStudentName(studentArrayVal);
			
			}
			else{
			getStudentDetail(studentArrayVal);
			}
	}
function testarrayList(studentId)
{
var result = $.grep(studentsMarkList, function(e){ return e.studentId == studentId; });
return result.length;
}
//======end of add student mark===================	
	
$('#keyPrev').click(function()
	{
		studentArrayVal=parseInt(studentArrayVal)-1;
		showSubmitBtn(studentsListLength,studentArrayVal);
		if(studentArrayVal<=0)
		{
		$('#keyPrev').css('display','none');
		studentArrayVal=0;
		}
		studentMark=$('#studentMark').html();
		if(testarrayList(studentId)== 0) 
			{
				addStudentMark(studentId,studentName,studentMark,studentArrayVal);
			}
			else 
			{
				getStudentDetail(studentArrayVal);
				if(studentMark!=studentsMarkList[studentArrayVal+1].studentMark)
					{
						studentsMarkList[studentArrayVal+1].studentMark=studentMark;
					}
			}
		
	});
function getStudentDetail(studentArrayVal)
	{
	if(studentsMarkList.length>studentArrayVal)
		{ 
			$('#MarksheetEnterStudentName').html(studentsMarkList[studentArrayVal].studentName);
			$('#studentMark').html(studentsMarkList[studentArrayVal].studentMark);
			studentId=studentsMarkList[studentArrayVal].studentId;
			studentName=studentsMarkList[studentArrayVal].studentName;
			studentsMarkList[studentArrayVal].studentMark=$('#studentMark').html();
	    }
	 else
		{
			getStudentName(studentArrayVal)
		}
	}
function showSubmitBtn(studentsListLength,studentArrayVal)
{
if(studentsListLength==studentArrayVal)
		 {
		   $('#keyNext').css('display','none');
		 }
		 else
		 {
		   $('#keyNext').css('display','block');
		 }
}
//=============end of previous button===============
$('#keySubmit').click(function()
	{
		studentArrayVal=0;
		studentsListLength=0;
	});
 });