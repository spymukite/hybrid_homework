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
    $.getJSON('studentsList.json', function(studentsList) {
			studentsListLength=(studentsList.length)-1;
			if(studentsListLength>=studentArrayVal)
			{
				studentId=studentsList[studentArrayVal].studentId;
				studentName=studentsList[studentArrayVal].studentName;
				$('#studentName').empty();
				$('#studentName').html(studentName);
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
			$('#studentName').html(studentsMarkList[studentArrayVal].studentName);
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