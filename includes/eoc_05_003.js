// VA Mobile Template v1.0.0.3
// For questions contact wconklin@allencorporation.com


var assessment_type = "eoc"	// assessment_type = "practice" "eol" "eoc"
var allow_retake = true;	// this will allow the user to retake the assessment if they do not pass
var required_score =  80	// this number represents the required score as a percentage (80%)
var questions_to_pull = 10	// total number of question to use from total bank
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
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	


// Multiple Choice (Radio Buttons)
	question[2] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? When reporting muscle injuries, the examiner is only required to identify the primary muscle group affected by the injury. ",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
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
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
	// Multiple Choice (Radio Buttons)
	question[4] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? According to 38 CFR 4.73, the intrinsic muscles of the shoulder girdle in Group III that include the clavicular pectoralis major I and the deltoid act with Group II extrinsic muscles of the shoulder including the costosternal pectoralis major II and the latissimus dorsi and teres major in the forward and backward swing of the arm.",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
		// Multiple Choice (Radio Buttons)
	question[5] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? In order for a claimant to meet the special monthly compensation (SMC) requirements for loss of use of a hand or foot, the examiner must consider the need for amputation of the hand or foot.",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
	// Multiple Choice (Radio Buttons)
	
	question[6] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>Which information should you review in preparation for the C&P examination? Select the correct answer from the following four choices.</p>",
		items :[	
					{ items : "C-file and any available medical records" },
					{ items : "Examination Request form" },
					{ items : "Examination documentation protocol" },
					{ items : "All of the above" }
				],
		
		answer: "d", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	}; 
	
	question[7] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? An examination request for an original claim filed within a year of discharge will usually request the use of a general medical documentation protocol. ",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
	question[8] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? For all C&P Muscle Injuries examinations, whether for original service connection or increase, you should be prepared to work through a complete chronological history of the claimed condition, including the onset, course, treatment, and response.",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
	question[9] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? Since the C&P Muscle Injuries examination is for adjudicative purposes, no diagnostic testing or X-rays are necessary.",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
	question[10] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? When you order diagnostic tests for a C&P examination, it is not always necessary to address the results in your examination report. ",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
	question[11] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? The C&P Muscle Injuries examination divides the muscles of the body into 23 groups. In your reporting, you must identify all muscle groups affected or traversed due to the injury. ",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
	question[12] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "True or false? Each facility may have different policies governing the release of disability examination reports and documents.",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
// Multiple Choice (Radio Buttons)
	question[13] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>You should use all but one of the following five considerations when you document the functional impact of a claimant’s condition. Select the consideration that does not apply. </p>",
		items :[	
					{ items : "A.	Provide as much information as possible on the effects of a claimed condition on daily activities." },
					{ items : "Give as much information as possible on the effects of a claimed condition on occupational activities, provided the claimant is employed." },
					{ items : "Provide as much information as possible on the effects of a claimed condition on occupational activities, whether or not the claimant is employed." },
					{ items : "Only consider the impact of the claimed condition." },
					{ items : "Emphasize any limitation of activity imposed by the claimed condition." }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	}; 	
	
	// Multiple Choice (Radio Buttons)
	question[14] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>True or false? The demand is greater for C&P Muscle Injuries examinations during military conflicts.</p>",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
	
// Multiple Choice (Radio Buttons)
	question[15] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>True or false? The visible behavior and facial expressions of the claimant on pressure or manipulation should not be considered during a C&P Muscle Injuries examination.</p>",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};	
	
	// Multiple Choice (Radio Buttons)
	question[16] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>True or false? In order to describe the functional impact of a muscle injury, you should keep in mind that disabilities resulting from muscle injuries can result in functional loss affecting range of motion, strength, speed, coordination, and endurance. </p>",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
	// Multiple Choice (Radio Buttons)
	question[17] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p> True or false? According to the CFR, evaluating a moderately severe disability of muscles includes performing tests of strength and endurance compared with the sound side in order to demonstrate positive evidence of impairment.</p>",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
// Multiple Choice (Radio Buttons)
	question[18] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>True or false? Palpations showing loss of deep fascia or muscle substance, or soft flabby muscles in the wound area are consistent with severe disability of muscles.</p>",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};	
	
	
	// Multiple Choice (Radio Buttons)
	question[19] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>True or false? A confirmed muscle injury that results in limitation of motion of a joint does not require the use of additional documentation protocols.</p>",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
	// Multiple Choice (Radio Buttons)
	question[20] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>Topics to avoid during an examination include all but one of the following four choices. Select the answer that does not apply.</p>",
		items :[	
					{ items : "Likely outcome or benefits resulting from the examination" },
					{ items : "Your opinion regarding relationship of the disability to service" },
					{ items : "Whether or not a disability should be service connected" },
					{ items : "Scheduling any tests needed to complete the examination" }
				],
		
		answer: "d", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	}; 
	
	
	// Multiple Choice (Radio Buttons)
	question[21] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>Which of the following three assessments is not one of the three basic components of the physical C&P Muscle Injuries examination? Select the assessment that does not apply.</p>",
		items :[	
					{ items : "Auscultation" },
					{ items : "Palpation" },
					{ items : "Determination of physical limitation caused by the muscle injury or disability" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	}; 
	
// Multiple Choice (Radio Buttons)
	question[22] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>True or false? Including color photographs when you document significant residuals of injuries, infections, or surgeries from a C&P Muscle Injuries examination is optional, but photographs can be helpful.</p>",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
	
// Multiple Choice (Radio Buttons)
	question[23] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>True or false? While assessing reflexes during a Muscle Injuries examination, you should assess the reflexes of any affected joints and opposite joints for a comparison.</p>",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
// Multiple Choice (Radio Buttons)
	question[24] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>True or false? Your description of the functional impact of a condition should include work functions and tasks that the claimant can and cannot carry out, as related to each of the disabilities being addressed.</p>",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "a", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};
	
// Multiple Choice (Radio Buttons)
	question[25] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>Which of the following should not be performed if a medical opinion is requested or medically indicated for a claim?</p>",
		items :[	
					{ items : "Identify the specific evidence you reviewed and considered in forming your opinion." },
					{ items : "State your opinion in VBA-recommended language." },
					{ items : "Provide a comprehensive rationale based on the case-specific data for the Veteran or Servicemember." },
					{ items : "Clearly indicate in your opinion other factors or possible conditions that you noticed during the examination." }
				],
		
		answer: "d", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	}; 	
	
// Multiple Choice (Radio Buttons)
	question[26] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>True or false? Statements by the Veteran or Servicemember about his or her condition should not be considered when assessing the functional impact of a diagnosed condition.</p>",
		items :[
					{ items : "True" },
					{ items : "False" }
				],
		
		answer: "b", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	};	
	
	// Multiple Choice (Radio Buttons)
	question[27] = {
		type: "multiple_choice",	// type: "multiple_choice", "multiple_select", "matching", "free_text"
		question : "<p>When describing the severity of a muscle group injury, you should consider all but one of the following four kinds of data. Select the data that you don’t consider.</p>",
		items :[	
					{ items : "The type of injury" },
					{ items : "The complete history in the service treatment records" },
					{ items : "The rating amount assigned to each level of severity" },
					{ items : "Objective findings noted in the post-service evidence" }
				],
		
		answer: "c", // answer: "a",
		
		feedback: [
					{
						correct: "Yes, that is correct.",
						incorrect: "You answered incorrectly."
					},
				 ]
	}; 