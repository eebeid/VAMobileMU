// VA Mobile Template Draft v1.0.0.3
// For questions contact wconklin@allencorporation.com

var alphabet= new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

var examAttempted = 0;

//find eoc page

function searchLessonArray (str, strArray) {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j][1].match(str)) return j;
    }
    return -1;
}

var pageInfo = determineCurrent();
var suspendFinalLesson = "lesson"+pageInfo[4];
var suspendStringExam = pageInfo[3]+"_selections";
var suspendLessonScore = 'assessment'+pageInfo[4]+'score';
var suspendLesson = 'assessment'+pageInfo[4];
var suspendDate = pageInfo[4]+"_datetime";
var sD = new Date();

function drawExam() { // draws questions and distractors, called aftre page loads
	$(".examC").html("<div class='ui-body ui-body-b'><p id=\"assessmentType\">"+pageHeading+"</p></div><br /><br />");  // Draws the page heading text

		for(var a=1; a< question.length; a++) {			
			$(".examC").append("<div class='ui-body ui-body-b'><fieldset class='question_"+a+"' data-role=\"controlgroup\" data-mini=\"true\"></fieldset></div><br />");//Set up fieldset for question
			$(".question_"+a).append("<legend class=\"Q"+a+"\" data-mini=\"true\">"+a+") "+question[a].question+"</legend>");//add question to page
			
			for (var b=0; b< question[a].items.length; b++) {//Add distractors to fieldset
				$(".question_"+a).append("<input type=\"radio\" name='radio_Q"+a+"' id='radio_Q"+a+"_D"+b+"' value='"+b+"' /><label for='radio_Q"+a+"_D"+b+"'>"+alphabet[b]+") &nbsp;&nbsp;"+question[a].items[b].items+"</label>");
			}
			
			if (viewMode == "test") {
			$(".question_"+a).append("<ul data-mini=\"true\" data-role='listview' data-inset='true'><li data-theme=\"e\" data-role='list-divider' class=\"ak_"+a+"\">Answer: "+question[a].answer.toUpperCase()+"</li></ul>"); 
			}	
			
			
		}
	$(".examC").append("<button type='submit' name='submitted' value='submit' data-theme='b' id='submitBtn' onclick='processExam();'>Submit</button>");


	$('#examPage').trigger('create');// Enables mobileification of form since it is created after the DOM loads
}

function processExam() {
	
	$.mobile.silentScroll(0);
	examAttempted++;	
	var answerArray = [" "];
	var fB = 0; //feedback, 0 incorrect, 1 correct
	var cA = 0; //correct answer
	var uS = 0; //user score
	var nI = 0; //number incorrect
	var tQ = questions_to_pull+1; // total number of questions
	var qS = ""; //question string
	
	if (!getValue(suspendStringExam) || getValue(suspendStringExam) == '') {
	
		for(var e=0; e<= tQ; e++) {
		if (e==0) {
		answerArray = [" "];
		}
	
	
		if ($('input[name=radio_Q'+e+']:checked').val() != null) {
			answerArray.push($('input[name=radio_Q'+e+']:checked').val());
		}
	}

	} else { 
	var suspendAnswers = getValue(suspendStringExam);	
	var splitA = suspendAnswers.split("|");
	var splitB = "";
		for (var f=0; f< splitA.length; f++) {
			splitB = splitA[f];
			splitB = splitB.substr(splitB.length -1);
			answerArray.push(alphabet.indexOf(splitB.toUpperCase()));
			}
	}
	
	
	
	if (answerArray.length == tQ) {

		$(".examC").html("");
		
			for(var c=1; c< tQ; c++) {	
			fB = 0;
				var find_index = alphabet.indexOf(question[c].answer.toUpperCase());			
				$(".examC").append("<ul data-mini=\"true\" data-role='listview' data-inset='true' class='question_"+c+"' ></ul>");
				$(".question_"+c).append("<li data-theme=\"a\" data-mini=\"true\" data-role='list-divider' id=\"Q"+c+"\">"+c+") "+question[c].question+"</li>");	
				
				qS += c;	// write the question number for the string data	
				
				for (var d=0; d< question[c].items.length; d++) {//Add distractors to fieldset
						if (answerArray[c] == d) {
							if (answerArray[c] == find_index) {
								$(".question_"+c).append("<li data-mini=\"true\" data-theme=\"c\"><img src='"+path+"images/green_check.png' class='ui-li-icon' width='20' height='20'/>"+alphabet[d]+") &nbsp;&nbsp;"+question[c].items[d].items+"</li>");
								fB++;
								cA++; //increment correct answers
								} else {
								$(".question_"+c).append("<li data-mini=\"true\" data-theme=\"c\"><img src='"+path+"images/red_x.png' class='ui-li-icon' width='20' height='20'/>"+alphabet[d]+") &nbsp;&nbsp;"+question[c].items[d].items+"</li>");
								}
							
							if (c==tQ-1) {	// writes the answer to stringdata				
							qS += ":"+alphabet[answerArray[c]].toLowerCase(); 
							} else {
							qS += ":"+alphabet[answerArray[c]].toLowerCase()+"|"; 
							}
							
							
						} else {
						$(".question_"+c).append("<li data-mini=\"true\" data-theme=\"c\"><img src='"+path+"images/blank_check.png' class='ui-li-icon' width='20' height='20'/>"+alphabet[d]+") &nbsp;&nbsp;"+question[c].items[d].items+"</li>");

						}	
				}
				 if (fB ==1) {
				$(".question_"+c).append("<li data-theme=\"e\" data-role='list-divider' id=\"rem_"+c+"\">"+question[c].feedback[0].correct+"</li>"); }
				else {
				$(".question_"+c).append("<li data-theme=\"e\" data-role='list-divider' id=\"rem_"+c+"\">"+question[c].feedback[0].incorrect+"</li>");
				}
			}

		nI = (tQ-1) - cA;
		uS = Math.floor((cA/(tQ-1))*100);
		sD = new Date();
		
		if (uS >= required_score) {
		
		$(".question_1").before("<div class='ui-body ui-body-b summaryHeading'><p id=\"assessmentType\">"+msgPass+"</p></div>"); 
		$('.summaryNext').removeClass('ui-disabled');
		} else {
		$(".question_1").before("<div class='ui-body ui-body-b summaryHeading'><p id=\"assessmentType\">"+msgFail+"</p></div>"); 
		}

		if (assessment_type == "eoc") {
		$(".summaryHeading").after("<div class='ui-grid-a resultsSummary'></div>");		
		$(".resultsSummary").append("<div class='ui-block-a'><div class='ui-bar ui-bar-e' style='text-align:right'>Last Test Attempt On: </div></div>");
		$(".resultsSummary").append("<div class='ui-block-b'><div class='ui-bar ui-bar-e'>"+sD+"</div></div>");
		$(".resultsSummary").append("<div class='ui-block-a'><div class='ui-bar ui-bar-e' style='text-align:right'>Your Score: </div></div>");
		$(".resultsSummary").append("<div class='ui-block-b'><div class='ui-bar ui-bar-e'>"+uS+"%</div></div>");
		$(".resultsSummary").append("<div class='ui-block-a'><div id='col1' class='ui-bar ui-bar-e' style='text-align:right'>Total Number of Questions: </div></div>");
		$(".resultsSummary").append("<div class='ui-block-b'><div id='col2' class='ui-bar ui-bar-e'>"+(tQ-1)+"</div></div>");
		$(".resultsSummary").append("<div class='ui-block-a'><div class='ui-bar ui-bar-e' style='text-align:right'>Number Correct: </div></div>");
		$(".resultsSummary").append("<div class='ui-block-b'><div class='ui-bar ui-bar-e'>"+cA+"</div></div>");
		$(".resultsSummary").append("<div class='ui-block-a'><div class='ui-bar ui-bar-e' style='text-align:right'>Number Incorrect: </div></div>");
		$(".resultsSummary").append("<div class='ui-block-b'><div class='ui-bar ui-bar-e'>"+nI+"</div></div>");
		//var highestCol = Math.max($('#col1').height(),$('#col2').height());
		$('.ui-bar-e').height(40);

		}
		$(".examC").append("<button type='reset' name='reset' value='reset' data-theme='b' id='resetBtn' onclick='resetExam();'>Reset</button>");
		$('#examPage').trigger('create');	
		

		if (!getValue(suspendStringExam) || getValue(suspendStringExam) == '') {
		

			setValue(suspendStringExam, qS); 
			setValue(suspendLessonScore, uS);			
			setValue(suspendDate, sD);
			
			if (assessment_type == "eoc") {
			SCOSetValue('cmi.core.score.raw',uS);

			}
			
			if (uS >= required_score) {
			
			if (assessment_type == "eoc") {
				setValue(suspendLesson, 'complete');	
				setValue(suspendFinalLesson, 'complete');				
				setComplete();
				}
			}
		}

		
		} else {
		alert(msgSelectionRequired);
		}
}


function resetExam() {

	examAttempted = 0;
	setValue(suspendStringExam,'');
	setValue(suspendLessonScore, '');

	
	setValue(suspendDate, '');
	
	if (assessment_type == "eoc") {
	setValue(suspendLesson, '');
	setValue(suspendFinalLesson, '');
	SCOSetValue('cmi.core.score.raw','');
	}
	drawExam();	
	$.mobile.silentScroll(0);
	$('.summaryNext').addClass('ui-disabled');
	
}


$( document ).delegate("#examPage", "pageinit", function() {// Draws the final exam on page load

	if (!getValue(suspendStringExam) || getValue(suspendStringExam) == '') {

		if (examAttempted == 0) {
		//alert(suspendStringExam);
			drawExam();  
		} 
	} else { processExam(); }
	
			
});