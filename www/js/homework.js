$( window ).load(function() {
	  $("#wPaint").wPaint("clear");
});
//================Send message================	
$(function() {
	$('body').on( 'click', '#Send_Homework_Teacher', function (e) {

		e.preventDefault();
	   	var homeworkMsgListIdlength= parseInt($("#List_Homework_Teacher li").length) + 1;
	   	var homeworkMessage=$(this).parents('#Homework_Send_Tab_Teacher').find("#Message_Homework_Teacher").val();

	   	if(homeworkMessage!='')
	   	{
			var li="<li id='Homework_Teacher"+homeworkMsgListIdlength+"' class='message-right homework-message'></li>";
			$( "#List_Homework_Teacher" ).append(li);
			loadTextMessage('#Homework_Teacher' + homeworkMsgListIdlength, "Teacher", presentDateTime(), homeworkMessage);
			$(this).parents('#Homework_Send_Tab_Teacher').find("#Message_Homework_Teacher").val("");
	   	}
	   	else
	   	{ 
	   		$( "#Message_Homework_Teacher" ).focus();
	   	}

	});

	$('body').on( 'click', '#Send_Homework_Student', function (e) {

		e.preventDefault();
	   	var homeworkMsgListIdlength= parseInt($("#List_Homework_Student li").length) + 1;
	   	var homeworkMessage=$(this).parents('#Homework_Send_Tab_Student').find("#Message_Homework_Student").val();

	   	if(homeworkMessage!='')
	   	{
			var li="<li id='Homework_Student"+homeworkMsgListIdlength+"' class='message-right homework-message'></li>";
			$( "#List_Homework_Student" ).append(li);
			loadTextMessage('#Homework_Student' + homeworkMsgListIdlength, "Student", presentDateTime(), homeworkMessage);
			$(this).parents('#Homework_Send_Tab_Student').find("#Message_Homework_Student").val("");
	   	}
	   	else
	   	{ 
	   		$( "#Message_Homework_Student" ).focus();
	   	}

	});


	$('body').on( 'click', '#Send_Message_Teacher', function (e) {

		e.preventDefault();
	   	var teacherMsgListIdlength= parseInt($("#List_Message_Teacher li").length) + 1;
	   	var teacherMessage=$(this).parents('#Message_Send_Tab_Teacher').find("#Message_Teacher").val();

	   	if(teacherMessage!='')
	   	{
			var li="<li id='Message_Teacher"+teacherMsgListIdlength+"' class='message-left'></li>";
			$( "#List_Message_Teacher" ).append(li);
			loadMessageLeft('#Message_Teacher' + teacherMsgListIdlength, presentDateTime(), teacherMessage, "1 min ago");
			$(this).parents('#Message_Send_Tab_Teacher').find("#Message_Teacher").val("");
	   	}
	   	else
	   	{ 
	   		$( "#Message_Teacher" ).focus();
	   	}

	});

	$('body').on( 'click', '#Send_Message_Student', function (e) {
		e.preventDefault();
	   	var teacherMsgListIdlength= parseInt($("#List_Message_Student li").length) + 1;
	   	var teacherMessage=$(this).parents('#Message_Send_Tab_Student').find("#Message_Student").val();

	   	if(teacherMessage!='')
	   	{
			var li="<li id='Message_Student"+teacherMsgListIdlength+"' class='message-right'></li>";
			$( "#List_Message_Student" ).append(li);
			loadMessageRight('#Message_Student' + teacherMsgListIdlength, presentDateTime(), teacherMessage, "1 min ago");
			$(this).parents('#Message_Send_Tab_Student').find("#Message_Teacher").val("");
	   	}
	   	else
	   	{ 
	   		$( "#Message_Teacher" ).focus();
	   	}

	});

//================Send message================		

//===============delete send homework message============
var hwMsgId=0;
$('#List_Homework_Teacher, #List_Message_Teacher, #List_Homework_Student, #List_Message_Student').on( 'click', '.deleteMessage', function () {
	hwMsgId = $(this).parents('li').attr('id');
});

$('body').on('click', '#homeworkDeleteMessage', function() {
	$('#'+hwMsgId).hide();
});
//===============end delete send homework message============  

//====================edit message====================
var editMessageId="";
var editMessageType="";
$('#List_Homework_Teacher').on( 'click', '.ClickToEditHomeworkMessage', function () {
	var editMessageType = $(this).attr('type');
	var message=$(this).parents('li').find("p").html();
	$('#homeworkMessageTextSelected').val(message);
	editMessageId=$(this).parents('li').attr('id');
	var targetDate=$(this).parents('li').find(".homeworkTargetDate").html();
	if(targetDate!='')
	{
		$('#homeworktargetdate').val(targetDate);
	}
});

$('#Homework_EditPopup_Teacher').on( 'click', '#homeworkEditMessage', function () {
	var editedMessage=$('#homeworkMessageTextSelected').val();
	var homeworktargetdate=$('#homeworktargetdate').val();
	var imageData = $('#' + editMessageId + ' .painted_image').attr('src');
	
	if (editMessageType == "text")
		loadTextMessage('#' + editMessageId, "Teacher", presentDateTime(), "", editedMessage, homeworktargetdate);
	else
		loadImageMessage('#' + editMessageId, "Teacher", presentDateTime(), imageData, homeworktargetdate);
});

//====================end edit message====================

//===================send image=================
var imgId=0;
var src='';
var imgDesc='';
//=====click to view selected image with textarea====================	
$('#homeworkUploadImage').on( 'click', '.uploadedImageSmall', function () {
	$( ".uploaad_img_big" ).html('');
	var imgSrc = $(this).attr('src');
	$('.uploaad_img_big').html('');
	var img="<img src='"+imgSrc+"' class='homeworkImgBig'>";
	$( ".uploaad_img_big" ).html(img);
	var desc=$(this).parents('.uploaad_img_sm').find(".uploadedImageTextSmall").html();
	$(".enterdesc").val(desc);
});

//=====click to add image  ====================	
$("#files").on("change", function()
    {
        
		var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
        if (/^image/.test( files[0].type)){ // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file
        reader.onloadend = function(){
		var img= "<span class='uploaad_img_sm'><img src='"+this.result+"' class='uploadedImageSmall'><span class='uploadedImageTextSmall'></span></span>";
		$( "#homeworkUploadImage" ).append(img);
		var bigImg="<img src='"+this.result+"' class='homeworkImgBig'>";
		$( ".uploaad_img_big" ).html('');
	    $( ".uploaad_img_big" ).html(bigImg);
	    $(".enterdesc").val('');
	    $(".enterdesc").focus();
	    imgId=imgId+1;
		src=this.result;
		addSelectedImages(imgId,src,imgDesc);//add image into array
			}
		}
    });	

var selected_homework_id;
//==========click to attach files =================
$("#attach").on("change", function() {
	if (this.files)
		AppendAttachment("#" + selected_homework_id + " .attach-list .row", this.files[0].name);
});

$("body").on("click", ".homework-message",function() {
	selected_homework_id = $(this).attr("id");
});

$("#homeworkSendSelectedAudio").click(function() {
	var audio_file = window.localStorage.getItem("audio_file");
	alert(audio_file);
	if (audio_file)
		AppendAttachment("#" + selected_homework_id + " .attach-list .row", audio_file);
});
	
//=====click to add text====================	
$('#HomeworkSelectImageScreen').on('blur','.enterdesc', function(event) {
		src=$(this).parents('#HomeworkSelectImageScreen').find(".homeworkImgBig").attr('src');
		imgDesc=$(this).val();
		updateSelectedImages(imgId,src,imgDesc);
		$(".enterdesc").html('');
		viewSelectedimgs();
	});	



var selectedImages=new Array();
selectedImages=[];
//============add image into array=============
function addSelectedImages(imgId,src,imgDesc)
	{
		selectedImages.push({
		    imgId:imgId,
			src: src,
			imgDesc: imgDesc
		});
	console.log(selectedImages);
	}
//============update image into array=============
function updateSelectedImages(imgId,src,imgDesc)
	{
		for(var i=0; i<selectedImages.length;i++)
		{
		
		if(src==selectedImages[i].src)
		{
		selectedImages[i].imgDesc=imgDesc;
		break;
		}
		
		}
		console.log(selectedImages);
	}
//============view selected images from array=============	
	
function viewSelectedimgs()
	{
	
	$("#homeworkUploadImage").html('');
	for(var i=0; i<selectedImages.length;i++)
	{
	var img= "<span class='uploaad_img_sm'><img src='"+selectedImages[i].src+"' class='uploadedImageSmall'><span class='uploadedImageTextSmall'>"+selectedImages[i].imgDesc+"</span></span>";
		$( "#homeworkUploadImage" ).append(img);
	}
	}	
//============send selected images from array=============	
$("body").on("click", "#homeworkSendSelectedImage", function()
    {
		for(var i=0; i<selectedImages.length;i++)
			{
			    var homeworkMsgListIdlength= parseInt($("#homeworkMsgList li").length) + 1;
				var li="<li id='"+homeworkMsgListIdlength+"' class='message-right'>";
				li+="<span>"+presentDateTime()+"</span>";
                li+="<a href='#HomeworkDetails'><img class='minilogo mdl-shadow--2dp' alt='' src='images/sub-user.jpg'></a>";
				li+="<div class='message mdl-shadow--2dp tme mdl-color--primary mdl-color-text--white'> ";
                li+="<p><img src='"+selectedImages[i].src+"'></p>";
                li+="<p>&nbsp;"+selectedImages[i].imgDesc+"</p>";
                li+="<span class='homeworkTargetDate'></span>";
                li+="</div>";
				li+="<a href='#homeworkDeleteMessagePopup' data-rel='popup' data-position-to='window' data-transition='pop' ><span class='closed_bttn deleteMessage'><i class='fa fa-trash-o cls_icon'></i></span></a>";
                li+="<a href='#homeworkEditMessagePopup' data-rel='popup' data-position-to='window' data-transition='pop' ><span class='edit_bttn ClickToEditHomeworkMessage'><i class='fa fa-pencil cls_icon'></i></span></a>";
              li+="</li>";
			$( "#homeworkMsgList" ).append(li);
			}	
      selectedImages=[];
	  imgId=0;
	  $("#homeworkUploadImage").html('');
      $(".enterdesc").val(''); 
    });	

//=======end send image======================

//==================board=========================
	var wp = $("#wPaint").wPaint({

	//menuOrientation: 'vertical',
		image: "data:image/png;base64,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",
		drawDown: function(e, mode){ $("#canvasDown").val(this.settings.mode + ": " + e.pageX + ',' + e.pageY); },
		drawMove: function(e, mode){ $("#canvasMove").val(this.settings.mode + ": " + e.pageX + ',' + e.pageY); },
		drawUp: function(e, mode){ $("#canvasUp").val(this.settings.mode + ": " + e.pageX + ',' + e.pageY); }
	
	}).data('_wPaint');

	$('.sendPaintedImage').click(function() {

		var homeworkMsgListIdlength= parseInt($("#List_Homework_Teacher li").length) + 1;
		var imageData = $("#wPaint").wPaint("image");
		var li="<li id='Homework"+homeworkMsgListIdlength+"' class='message-right homework-message'></li>";
		
		$( "#List_Homework_Teacher" ).append(li);
		loadImageMessage('#Homework' + homeworkMsgListIdlength, "Teacher", presentDateTime(), imageData);
		$("#wPaint").wPaint("clear");
		$("body").pagecontainer("change","#Homework");

	});
}); 

//================get present date time================
function presentDateTime() {
  var date=new Date();
  var presentDate = date.getDate();
  var presentMonth = date.getMonth() + 1;
  var presentYear = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var presentTime = presentDate + '-' + presentMonth + '-' + presentYear + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
 
  return presentTime;
}

