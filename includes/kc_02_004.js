// VA Mobile Template v1.0.0.3
// For questions contact wconklin@allencorporation.com


var assessment_type = "practice"	// assessment_type = "practice" "eol" "eoc"
var allow_retake = true;	// this will allow the user to retake the assessment if they do not pass
var required_score =  0	// this number represents the required score as a percentage (80%)
var questions_to_pull = 3	// total number of question to use from total bank
var msgSelectionRequired = "Please select or enter an answer for each question before continuing."


	if (assessment_type == "practice"){
		var pageHeading = "<p id=\"instructionsExam\"><strong>Instructions:</strong> Read the following questions and select the best answer(s) for each, then submit your responses to see how you scored.</p>"
		var msgPass = "After reviewing your results, please select Next to continue."
		var msgFail = "You may <a href='#' onclick='resetExam();return false;'><strong>retake the assessment</strong></a> after reviewing your results."				
		}
	
	if (assessment_type == "eol"){
		var pageHeading = "<p id=\"instructionsExam\"><strong>Instructions:</strong> Read the following questions, select the best answer(s) then select the Submit button. Once you have answered all "+questions_to_pull+" questions a summary report will display with your score.</p>"				
		var msgPass = "After reviewing your results, please select Next to continue."
		var msgFail = "You may <a href='#' onclick='resetExam();return false;'><strong>retake the assessment</strong></a> after reviewing your results."				
	}
		
	if (assessment_type == "eoc"){
		var pageHeading = "<p id=\"instructionsExam\"><strong>Instructions:</strong> Read the following questions, select the best answer(s) then select the Submit button. Once you have answered all "+questions_to_pull+" questions a summary report will display with your score.</p>"				
		var msgPass = "Congratulations! After reviewing your results, please select Next to view the End of Course Instructions."
		var msgFail = "<strong>Important: </strong>The minimum passing score was not achieved. You may <a onclick='resetExam();return false;'><strong>retake the exam</strong></a> after reviewing your results."				
	}


var question = new Array();
		
question[1] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "Which documentation protocol(s) would you plan on using based on the Examination Request?",
		items :[
					{ items : "General Medical DBQ" },
					{ items : "Muscle Injuries DBQ" },
					{ items : "Both General Medical DBQ and Muscle Injuries DBQ" }
				],
		
		answer: "c", // answer: "a",
		
		feedback: [
					{
						correct: "That's right! The Examination Request lists the General Medical DBQ as the appropriate documentation protocol. Since Staff Sergeant Marcus is filing for disability benefits for a muscle injury, the examiner will use a Muscle Injuries DBQ as well.",
						incorrect: "This answer is incorrect. The Examination Request lists the General Medical DBQ as the appropriate documentation protocol. Since Staff Sergeant Marcus is filing for disability benefits for a muscle injury, the examiner will use a Muscle Injuries DBQ as well."
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[2] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? The Examination Request requires the examiner to provide a medical opinion.",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Correct! The statement is false, as the Examination Request does not require a medical opinion.",
						incorrect: "This answer is incorrect. The statement is false, as the Examination Request does not require a medical opinion."
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[3] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "What is the claimant's military status? Select the correct answer from the two options that follow.",
		items :[
					{ items : "Active Duty " },
					{ items : "Discharged" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "That's right! Staff Sergeant Marcus was a reservist who was previously called back to active duty; however, he's been discharged.",
						incorrect: "This answer is incorrect. Staff Sergeant Marcus was a reservist called back to active duty; however, he's been discharged."
					},
				 ]
	};