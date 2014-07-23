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
		question : "True or false? When you order diagnostic tests for a C&P examination, it is not always necessary to address the results in your examination report.",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Well done! It's vital that you conduct and document a thorough and comprehensive examination to avoid having your report deemed insufficient or returned due to a need for clarification. This includes completing all documentation protocols, addressing all questions listed in the Examination Request, giving an opinion with comprehensive rationale when requested, addressing all administered test results, and substantiating all diagnoses.",
						incorrect: "This answer is incorrect. It's vital that you conduct and document a thorough and comprehensive examination to avoid having your report deemed insufficient or returned due to a need for clarification. This includes completing all documentation protocols, addressing all questions listed in the Examination Request, giving an opinion with comprehensive rationale when requested, addressing all administered test results, and substantiating all diagnoses."
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[2] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? The C&P Muscle Injuries examination divides the muscles of the body into 23 groups. In your reporting, you must identify all muscle groups affected or traversed due to the injury. ",
		items :[
					{ items : "True" },
					{ items : "False" }			
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Excellent! When reporting a muscle condition, you must report every muscle group whose function is affected when an injury or disability exists.",
						incorrect: "This answer is incorrect. When reporting a muscle condition, you must report every muscle group whose function is affected when an injury or disability exists."
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[3] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? Each facility may have different policies governing the release of disability examination reports and documents.",
		items :[
					{ items : "True" },
					{ items : "False" }			
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "You are correct! Each facility's policies may differ in the method of delivery, certification, and handling contents, so make sure you know exactly which methods are required at your facility.",
						incorrect: "That response is incorrect. Each facility's policies may differ in the method of delivery, certification, and handling contents, so make sure you know exactly which methods are required at your facility."
					},
				 ]
	};
	
		question[4] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "You should use all but one of the following five considerations when you document the functional impact of a claimant's condition. Select the consideration that does not apply.",
		items :[
					{ items : "Provide as much information as possible on the effects of a claimed condition on daily activities." },
					{ items : "Give as much information as possible on the effects of a claimed condition on occupational activities, provided the claimant is employed." },
					{ items : "Provide as much information as possible on the effects of a claimed condition on occupational activities, whether or not the claimant is employed." },
					{ items : "Only consider the impact of the claimed condition." },					
					{ items : "Emphasize any limitation of activity imposed by the claimed condition." }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "That's right! You should provide as much information as possible on the effects of the claimed condition on occupational activities whether or not the claimant is employed. You should also provide information on the effects of a condition on daily activities, emphasizing any limitation of activity imposed by the claimed condition.",
						incorrect: "That answer is incorrect. You should provide as much information as possible on the effects of the claimed condition on occupational activities whether or not the claimant is employed. You should also provide information on the effects of a condition on daily activities, emphasizing any limitation of activity imposed by the claimed condition. "
					},
				 ]
	};
			question[5] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "When describing the severity of a muscle group injury, you should consider all but one of the following four kinds of data. Select the data that you don't consider. ",
		items :[
					{ items : "The type of injury" },
					{ items : "The complete history in the service treatment records" },
					{ items : "The rating amount assigned to each level of severity" },
					{ items : "Objective findings noted in the post-service evidence" }
				],
		
		answer: "c", // answer: "a",
		
		feedback: [
					{
						correct: "That's right! The rating amount assigned to each level of severity should not be considered when describing the severity of a muscle group injury.",
						incorrect: "That answer is incorrect. This data should be considered when describing the severity of a muscle group injury. "
					},
				 ]
	};