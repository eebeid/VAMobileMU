// VA Mobile Template Draft v1.0.0.3
// DO NOT EDIT THIS PAGE
// For questions contact wconklin@allencorporation.com

var debugMe = false; // Set to true for debugging. SET TO false BEFORE PACKAGING!!!!

function checkLessonsComplete() { // checks all lessons set up in the config to see if they are complete, returns number of completed lessons
var actionLessons = 0;

	for(var i =0; i<lesson.length; i++) {
	var lessonTemp = "lesson"+i;
		if (getValue(lessonTemp) == "complete") {
		actionLessons++;
		}
	}
	return actionLessons;
}

function determineCurrent() { 
	var filePath = document.location.href; // gets full http path [0]
	var fileFolderPath = filePath.substring(filePath.lastIndexOf("/")-8);// Gets folder and file path [1]
	var fileFolder = fileFolderPath.substring(0,8); // Gets folder name [2]
	var fileFile = fileFolderPath.substring(fileFolderPath.lastIndexOf("/")+1); // Gets file name [3]
		if (fileFolder.substring(7,6) > 0) { // checks to see if lesson is greater than 9 
	var fileLesson = fileFolder.substring(8,6); //gets double digit lesson number [4]
	} else {
	var fileLesson = fileFolder.substring(8,7); // gets single digit lesson number[4]
	}
	var filePage = fileFile.substring(fileFile.lastIndexOf(".")+0, 3); // gets page number [5]
	
	
	return [filePath, fileFolderPath, fileFolder, fileFile, fileLesson, filePage]; //returns all info in an array for use later	
}



$(document).on("pagebeforeshow", "#mainMenu", function() {
    $('#mainMenu').trigger('create');	// remobileizes the menu after creation
});

$( document ).delegate("#mainMenu", "pageinit", function() {
					drawMainMenu (); // draws main menu on page creation
					
					if (checkLessonsComplete() >= lesson.length-1) { // checks to see if all lessons are complete, if so remove desabled class on final exam
						$('#eoc').removeClass('ui-disabled'); 
						$('#eoc').attr('title',''); // remove diabled from title
						$('#eoc').attr('alt','');// remove diabled from alt
						$('#eoc').attr('href',eocLesson); // add location of final exam
					} 
				
			});	
			
$( document ).delegate("#defaultPage", "pageinit", function() {
	
		if (getValue('mobileVisited') == 1) { // checks to see if the mobile course has been visited before, if so, offers to return used to bookmarked location
			
			doBookmark();
		}			
			});	

$( document ).delegate("[data-role=page]", "pagehide", function(event, ui) { // Clears page from cache so menu checks update if user returns
        $(this).remove();
    });
			
$(document).on('pagebeforecreate', function (event, ui) { //Load functions to run after before page creates
	drawFooter (); //draws footer
	//drawHeader();	
   });

$(document).on('pageshow', function (event, ui) { //Load functions to run after page shows
	var pageArray = determineCurrent();
		if (parseInt(pageArray[5])) { // For now checks to see if page is a standard lesson page 
			setBookMark(pageArray[1]); // if so sets bookmark
		}
   });   
/*

function drawHeader() {  // Future feature, auto create header

	$("[data-role=header]").html('<a href="#" data-mini="true" data-direction="reverse" data-icon="arrow-l" data-role="button" data-theme="e" data-transition="slide" >Back</a><h1>'+lessonSubArray[0][0][1]+'</h1><a href="#" data-mini="true" data-direction="forward" data-icon="arrow-r" data-role="button" data-theme="e" data-transition="slide">Next</a>');	
	
} */

function drawFooter () { // function for drawing the footer
var debugButton = '';
			if (debugMe) { // Draws button in footer for resetting scorm TURN OFF BEFORE PACKAGING!!!!
				debugButton = '<li id="foot4"><a data-mini="true" data-direction="reverse" data-icon="info" data-theme="e" onclick="doReset();">Reset</a></li>';
			}
		
		$("[data-role=footer]").html('<div data-role="navbar"><ul><li id="foot1"><a href="'+path+'lesson00/00_001.htm" data-mini="true" data-direction="reverse" data-icon="home" data-theme="e">Menu</a></li><li id="foot2"><a href="'+path+'resources/help.htm" data-mini="true" data-direction="reverse" data-icon="myapp-question" data-theme="e">Help</a></li><li id="foot3"><a href="'+path+'resources/resources.htm" data-mini="true" data-direction="reverse" data-icon="info" data-theme="e">Resources</a></li>'+debugButton+'</ul></div>');
		$("[data-role=footer]").append('<h4 style="text-align:center">'+footerText+'</h4>');
		
		$('[data-role=footer]').trigger('create');
}

var eocLesson  = ''

function drawMainMenu () {
var icon = 'data-icon="check"';

	for (var i = 0; i < lesson.length; i++) {
		var lessonHold = "lesson0"+i;
		var lessonTemp = "lesson"+i;
		
			if (getValue(lessonTemp) == "complete") {
				var icon = 'data-icon="check"';
			} else {
				var icon = '';
			}

			if (lesson[i][1] == "eoc") {
		$("#drawMenu").append('<p><a href="#" title="Disabled" alt="Disabled" data-role="button" data-mini="true" '+icon+' data-iconpos="left" data-transition="slide" data-direction="forward" data-theme="b" id="eoc" class="ui-disabled">'+lesson[i][3]+'</a></p>') // 508 fix, when we disable this button, we have to change the alt text to reflect that.
		
		eocLesson = '../'+lessonHold+'/0'+i+'_001.htm';
		
		} else {
			if (i == 0) {		
				$("#drawMenu").append('<p><a href="../'+lessonHold+'/0'+i+'_002.htm" data-role="button" data-mini="true" '+icon+' data-iconpos="left" data-transition="slide" data-direction="forward" data-theme="b" >'+lesson[i][3]+'</a></p>') 
				} else {
				$("#drawMenu").append('<p><a href="../'+lessonHold+'/0'+i+'_001.htm" data-role="button" data-mini="true" '+icon+' data-iconpos="left" data-transition="slide" data-direction="forward" data-theme="b" >'+lesson[i][3]+'</a></p>') 
				}
		}
					
	}
	$("#drawMenu").append('<p align="center"><strong>To begin, please select the '+lesson[0][3]+' button.</strong></p>')
	
	
	$('#mainMenu').trigger('create');
}

$( document ).delegate("#eocInstructions", "pageinit", function() {// Draws the final exam on page load

		$("#eocMessage").html(msgEOC);
		setComplete();
			
});

function disclaimer(dType) {
	if(dType == 'int') {
		alert(disclaimerInt); 
	} else {
		alert(disclaimerExt);
	}
}

function setLessonComplete() { // sets current lesson complete
	var currentLessonTemp = determineCurrent();
	var lessonHolder = "lesson"+currentLessonTemp[4];
	setValue(lessonHolder, "complete");	
}

function mobileVisited(vType) { // sets the variable mobileVisited to suspend data
	if (vType == "true") {
		setValue('mobileVisited','1');
	}  
	
	if (vType == "false") {
		setValue('mobileVisited','0');
	}
}


$( document ).delegate("#beforeEOCPage", "pageinit", function() { // For now, we have to have a page at the end of the final lesson before the final exam lesson to determine if the user can proceed. This function checks to see if all lessons have been completed. If so, it enables the next button to proceed to the final exam.
			if (checkLessonsComplete() >= lesson.length-1) {
						$('#final_eoc').removeClass('ui-disabled');
						$('#eoc').removeClass('ui-disabled');
						$('#beforeEOCContent').html(msgCompleteAllLessons);
					}
			});