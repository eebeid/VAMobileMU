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
		question : "Which of the following four statements does not satisfy the DeLuca criteria when assessing range of motion of a joint? Select the statement that does not apply.",
		items :[
					{ items : "Assess for pain which limits function during repetitive use or flare-ups." },
					{ items : "Assess for weakness against varying resistance." },
					{ items : "Assess for excessive fatigability only." },
					{ items : "Assess for incoordination." }
				],
		
		answer: "c", // answer: "a",
		
		feedback: [
					{
						correct: "Good job! You must assess for more than just excessive fatigability. You must assess for all of these factors: pain which limits function during repetitive use or flare-ups, weakness against varying resistance, excessive fatigability, and incoordination.",
						incorrect: "This answer is incorrect. You must assess for more than just excessive fatigability. You must assess for all of these factors: pain which limits function during repetitive use or flare-ups, weakness against varying resistance, excessive fatigability, and incoordination. To review this material, visit the Deluca Criteria page."
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[2] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? When reporting muscle injuries, the examiner is only required to identify the primary muscle group affected by the injury.",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "This answer is incorrect. You must identify each of the 23 muscle groups affected or traversed due to the injury. These muscle groups are not commonly used outside VA but they are very important for purposes of evaluating muscle disabilities for VA rating purposes. "
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[3] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? The CFR describes these four levels of muscle disabilities for evaluation purposes: slight disability of muscles, moderate disability of muscles, moderately severe disability of muscles, and severe disability of muscles.",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Good job! The statement is true. In 38 CFR 4.56, the four levels of muscle disabilities include slight, moderate, moderately severe, and severe.",
						incorrect: "This answer is incorrect. The statement is true. Group III intrinsic muscles of the shoulder girdle act with the extrinsic muscles of the shoulder girdle in the forward and backward swing of the arm."
					},
				 ]
	};