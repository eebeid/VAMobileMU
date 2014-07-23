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
		question : "Which information should you review in preparation for the C&P examination? Select the correct answer from the following four choices.",
		items :[
					{ items : "C-file and any available medical records" },
					{ items : "Examination Request form" },
					{ items : "Examination documentation protocol" },
					{ items : "All of the above" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "That's right! It is important to prepare for a C&P examination by reviewing the Veteran's or Servicemember's Examination Request form, C-file, medical records, and appropriate documentation protocol. Each has valuable information including: the purpose of the examination, specific questions you will need to answer based on the examination, the scope of the examination, and the history of the patient's service, condition, and treatment. ",
						incorrect: "This answer is incorrect. It is important to prepare for a C&P examination by reviewing the Veteran's or Servicemember's Examination Request form, C-file, medical records, and appropriate documentation protocol. Each has valuable information including: the purpose of the examination, specific questions you will need to answer based on the examination, the scope of the examination, and the history of the patient's service, condition, and treatment."
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[2] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "A confirmed muscle injury that results in limitation of motion of a joint does not require the use of additional documentation protocols.",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "You are correct! This statement is false. A muscle injury that causes limitation of motion of a joint, or other findings in the physical examination not listed on a Muscle Injuries documentation protocol will require you to follow additional documentation protocols.",
						incorrect: "That response is incorrect. This statement is false. A muscle injury that causes limitation of motion of a joint, or other findings in the physical examination not listed on a Muscle Injuries documentation protocol will require you to follow additional documentation protocols."
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[3] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? An examination request for an original claim filed within a year of discharge will usually request the use of a general medical documentation protocol.",
		items :[
					{ items : "Active Duty " },
					{ items : "Discharged" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "That's correct. The statement is true. When a claim is filed within a year of discharge for an original priority examination, the examination request will only request the general medical protocol be used though the examiner will also need to use the protocol for the listed injury when conducting the examination.",
						incorrect: "This answer is incorrect. The statement is true. When a claim is filed within a year of discharge for an original priority examination, the examination request will only request the general medical protocol be used though the examiner will also need to use the protocol for the listed injury when conducting the examination. "
					},
				 ]
	};