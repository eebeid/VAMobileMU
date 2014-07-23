// VA Mobile Template v1.0.0.3
// For questions contact wconklin@allencorporation.com


var assessment_type = "practice"	// assessment_type = "practice" "eol" "eoc"
var allow_retake = true;	// this will allow the user to retake the assessment if they do not pass
var required_score =  0	// this number represents the required score as a percentage (80%)
var questions_to_pull = 4	// total number of question to use from total bank
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
		question : "Military history: Yes or no? Sergeant Marcus has been on active duty since 1981.",
		items :[
					{ items : "Yes" },
					{ items : "No" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Correct! Sergeant Marcus transitioned from active duty to reserve status in 1985. He was called back to serve in Desert Storm in 1991. He was again reactivated in 2007 and deployed to Iraq for a year and then to Afghanistan most recently.",
						incorrect: "That answer is incorrect. Sergeant Marcus transitioned from active duty to reserve status in 1985. He was called back to serve in Desert Storm in 1991. He was again reactivated in 2007 and deployed to Iraq for a year and then to Afghanistan most recently."
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[2] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "Injury details: Which of the following was the cause of Sergeant Marcus's right upper arm injury?",
		items :[
					{ items : "Bullet wound from a fire fight" },
					{ items : "Shrapnel from an explosion" },
					{ items : "Hit by a vehicle while running for cover" },
					{ items : "Stabbed with a glass shard by an enemy combatant" }					
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Correct! The claimant was injured during an IED explosion and was impacted by shrapnel in the arm.",
						incorrect: "That answer is incorrect. The claimant was injured during an IED explosion and was impacted by shrapnel in the arm."
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[3] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "Physical symptoms of injury: Yes or no? Sergeant Marcus is not experiencing any pain though there is still shrapnel left in his arm.",
		items :[
					{ items : "Yes" },
					{ items : "No" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Correct! Though his condition has improved since his discharge, Sergeant Marcus does experience pain and weakness in his right arm.",
						incorrect: "That answer is incorrect. Though his condition has improved since his discharge, Sergeant Marcus does experience pain and weakness in his right arm."
					},
				 ]
	};
	
		question[4] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "Functional Impact: Yes or no? While the Sergeant's injuries do not prevent him from completing his duties at work, he is still experiencing some functional loss due to pain. ",
		items :[
					{ items : "Yes" },
					{ items : "No" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Correct! Sergeant Marcus reported that he is able to complete his tasks at work, but complained that he is unable to lift heavy objects like a full garbage can. ",
						incorrect: "That answer is incorrect. Sergeant Marcus reported that he is able to complete his tasks at work, but complained that he is unable to lift heavy objects like a full garbage can. "
					},
				 ]
	};