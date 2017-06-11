	var wp = $("#wPaint").wPaint({
		//menuOrientation: 'vertical',
			image: "data:image/png;base64,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",
			drawDown: function(e, mode){ $("#canvasDown").val(this.settings.mode + ": " + e.pageX + ',' + e.pageY); },
			drawMove: function(e, mode){ $("#canvasMove").val(this.settings.mode + ": " + e.pageX + ',' + e.pageY); },
			drawUp: function(e, mode){ $("#canvasUp").val(this.settings.mode + ": " + e.pageX + ',' + e.pageY); }
		
		}).data('_wPaint');
		
		
		function saveImage()
		{
			var idlength= parseInt($("#msgList li").length) + 1;
			var imageData = $("#wPaint").wPaint("image");
			var li= "<li class='message-right' id='"+idlength+"'><span>"+presentTime()+"</span><a href='hw_viewers.html'><img src='img/sub-user.jpg' alt='' class='minilogo mdl-shadow--2dp'> </a><div class='message'><a class='fancybox' href='"+imageData+"' ><img class='message mdl-shadow--2dp mdl-color--primary mdl-color-text--white drawimg' src='"+imageData+"' ></a></div></span><a  href='#popup1'><span class='closed_bttn closed_bttn2 deleteMessage'><i class='material-icons cls_icon'>&#xE872;</i></span></a></li>";
			$( ".sendMessage" ).append(li);
			$( ".kaar-modal" ).hide();
		}

		function clearCanvas()
		{
		   $("#wPaint").wPaint("clear");
		   $( ".kaar-modal" ).show();
		}
		//============message submit time calculation===============
function presentTime() {
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
function closeWin()
{
 window.parent.close();      
}	
//====================================================================================================================


 //$("#uploadFile").on("click", function()
   // {
		//window.location.href= 'test.html';

   // });
   var imgId=0;
var src='';
var imgDesc='';
$('#selectedimages').on( 'click', '.selectimg', function () {
	$( "#viewSelectedimages" ).html('');
	var imgSrc = $(this).attr('src');
	var desc=$(this).parents('.imgdetail').find(".imgdesc").html();
	var img="<div class='selectedimg'><img src='"+imgSrc+"' ><br><textarea class='enterdesc' rows='3' cols='44' placeholder='Add Caption'>"+desc+"</textarea></div>";
	 $( "#viewSelectedimages" ).html(img);
    });
$("#uploadFile").on("change", function()
    {
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file
            reader.onloadend = function(){
		var img= "<div class='imgdetail'><img src="+this.result+" class='selectimg'><br><div class='imgdesc'></div></div>";
		$( "#selectedimages" ).append(img);
		
		var bigimg="<div class='selectedimg'><img src='"+this.result+"' ><br><textarea class='enterdesc' rows='3' cols='44' placeholder='Add Caption'></textarea></div>";
	 $( "#viewSelectedimages" ).html(bigimg);
	 $(".enterdesc").focus();
	 imgId=imgId+1;
		src=this.result;
		addSelectedImages(imgId,src,imgDesc);
		 }
        }
		 $('#messagepage').css('display','none');
		 $('#selectedPhotoPage').css('display','block');
		 
    });	
	
	$(".inputImg").on("change", function()
    {
		var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file
            reader.onloadend = function(){
		var img= "<div class='imgdetail'><img src="+this.result+" class='selectimg'><br><div class='imgdesc'></div></div>";
		$( "#selectedimages" ).append(img);
		
		var bigimg="<div class='selectedimg'><img src='"+this.result+"' ><br><textarea class='enterdesc' rows='3' cols='44' placeholder='Add Caption'></textarea></div>";
	 $( "#viewSelectedimages" ).html(bigimg);
	 $(".enterdesc").focus();
	 imgId=imgId+1;
		src=this.result;
		addSelectedImages(imgId,src,imgDesc);
		 }
        }
		
    });

$('#viewSelectedimages').on('blur','.enterdesc', function(event) {
	$(".imgdesc").html($(this).val());
		src=$(this).parents('.selectedimg').find("img").attr('src');
		imgDesc=$(this).val();
		updateSelectedImages(imgId,src,imgDesc);
		$("#selectedimages").html('');
		viewSelectedimgs();
	});	
var selectedImages=new Array();
selectedImages=[];
function addSelectedImages(imgId,src,imgDesc)
	{
		selectedImages.push({
		    imgId:imgId,
			src: src,
			imgDesc: imgDesc
		});
	
	}
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
		
	}
function viewSelectedimgs()
	{
	
	$("#selectedimages").html('');
	for(var i=0; i<selectedImages.length;i++)
	{
	var img= "<div class='imgdetail'><img src="+selectedImages[i].src+" class='selectimg'><br><div class='imgdesc'>"+selectedImages[i].imgDesc+"</div></div>";
		$( "#selectedimages" ).append(img);
	}
	}	
$(".backpage").on("click", function()
    {
      
	pageshow();	 
    });	

$(".sendimg").on("click", function()
    {
		for(var i=0; i<selectedImages.length;i++)
			{
			    var idlength= parseInt($("#msgList li").length) + 1;
				var li= "<li class='message-right' id='"+idlength+"'><span>"+presentTime()+"</span><a href='hw_viewers.html'><img src='img/sub-user.jpg' alt='' class='minilogo mdl-shadow--2dp'> </a><div class='message'><a class='fancybox' href='"+selectedImages[i].src+"' ><img class='message mdl-shadow--2dp mdl-color--primary mdl-color-text--white drawimg '  src='"+selectedImages[i].src+"' ><br><span>"+selectedImages[i].imgDesc+"</span></a></div><a  href='#popup1'><span class='closed_bttn closed_bttn3 deleteMessage'><i class='material-icons cls_icon'>&#xE872;</i></span></a></span></li>";
				$( ".sendMessage" ).append(li);	
			}	
pageshow();			
    });	
	function pageshow()
	{
	selectedImages=[];
	  imgId=0;
	  $("#selectedimages").html('');
	  $('#messagepage').css('display','block');
	  $('#selectedPhotoPage').css('display','none');
	}
