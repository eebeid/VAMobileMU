// VA Mobile Template v1.0.0.3
// For questions contact wconklin@allencorporation.com


var assessment_type = "practice"	// assessment_type = "practice" "eol" "eoc"
var allow_retake = true;	// this will allow the user to retake the assessment if they do not pass
var required_score =  0	// this number represents the required score as a percentage (80%)
var questions_to_pull = 5	// total number of question to use from total bank
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
		question : "True or false? For all C&P Muscle Injury examinations, whether for original service connection or increase, you should be prepared to work through a complete chronological history of the claimed condition, including the onset, course, treatment, and response.",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Good job! The statement is false. A complete chronological history of the claimed condition is only necessary for initial C&P muscle examination. An increase or review examination should cover the interval from the last C&P examination.",
						incorrect: "This answer is incorrect. The statement is false. A complete chronological history of the claimed condition is only necessary for initial C&P Muscle Injuries examination. An increase or review examination should cover the interval from the last C&P examination."
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[2] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? Since the C&P Muscle Injuries examination is for adjudicative purposes, no diagnostic testing or X-rays are necessary.",
		items :[
					{ items : "True" },
					{ items : "False" }			
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Right! The statement is false. Clinical and diagnostic tests may be necessary to confirm a diagnosis or to assess the severity of a condition if they were not done previously. If not already done, X-rays of affected areas may be needed to show the location and extent of shrapnel or other metallic fragments associated with projectile wounds.",
						incorrect: "This answer is incorrect. The statement is false. Clinical and diagnostic tests may be necessary to confirm a diagnosis or to assess the severity of a condition if they were not done previously. If not already done, X-rays of affected areas may be needed to show the location and extent of shrapnel or other metallic fragments associated with projectile wounds. "
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[3] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? In order to describe the functional impact of a muscle injury, you should keep in mind that disabilities resulting from muscle injuries can result in functional loss affecting range of motion, strength, speed, coordination, and endurance. ",
		items :[
					{ items : "True" },
					{ items : "False" }			
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Correct! The answer is true. To properly describe the functional impact of a muscle injury, you should keep in mind that disabilities resulting from muscle injuries can result in functional loss affecting range of motion, strength, speed, coordination, and endurance.",
						incorrect: "This answer is incorrect. The statement is true. To properly describe the functional impact of a muscle injury, you should keep in mind that disabilities resulting from muscle injuries can result in functional loss affecting range of motion, strength, speed, coordination, and endurance."
					},
				 ]
	};
	
		question[4] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "Topics to avoid during an examination include all but one of the following four choices. Select the answer that does not apply.",
		items :[
					{ items : "Likely outcome or benefits resulting from the examination" },
					{ items : "Your opinion regarding relationship of the disability to service" },
					{ items : "Whether or not a disability should be service connected" },
					{ items : "Scheduling any tests needed to complete the examination" }
				],
		
		answer: "d", // answer: "a",
		
		feedback: [
					{
						correct: "Correct! When answering questions about a claim, you should avoid speculation or opinion.",
						incorrect: "This answer is incorrect. When answering questions about a claim, you should avoid speculation or opinion. "
					},
				 ]
	};
			question[5] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "Which of the following three assessments is not one of the three basic components of the physical C&P Muscle Injuries examination?",
		items :[
					{ items : "Auscultation" },
					{ items : "Palpation" },
					{ items : "Determination of physical limitation caused by the muscle injury or disability" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Correct! Auscultation is not one of the three basic components of the physical C&P Muscle Injuries examination.",
						incorrect: "This answer is incorrect."
					},
				 ]
	};