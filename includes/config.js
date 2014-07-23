// VA Mobile Template Draft v1.0.0.3
// For questions contact wconklin@allencorporation.com

var titleCourse = 'DMA Muscle Injuries Examination';
var viewMode = "test" // test or production
var pageMismatch = false; //true or false - Only set to false if page numbers between desktop and mobile match exactly. When set to true, mobile will only bookmark to first page in lesson.

var lesson = new Array();
/*lesson[0] =  new Array(3,"none","#","Welcome");
lesson[1] =  new Array(1,"none","#","Lesson One Sample");
lesson[2] =  new Array(1,"none","#","Lesson Two Sample");
lesson[3] =  new Array(1,"none","#","Lesson Three Sample");
lesson[4] =  new Array(3,"eoc","04_002.htm","End of Course");*/

lesson[0] =  new Array( 4,"none","#","Introduction");
lesson[1] =  new Array( 13,"none","#","The C&P Muscle Injuries Examination Course");
lesson[2] =  new Array( 12,"none","#","Before the Examination");
lesson[3] =  new Array( 15,"none","#","Conduct the Examination");
lesson[4] =  new Array( 12,"none","#","Document the Examination");
lesson[5] =  new Array( 4,"eoc","../lesson05/05_003.htm","Course Summary and Final Assessment");
/*
var lessonSub0 = new Array();
lessonSub0[0] = new Array("00_002.htm", "Welcome");
lessonSub0[1] = new Array("00_003.htm", "More About the Course");
lessonSub0[2] = new Array("00_004.htm", "Course Objectives");
lessonSub0[3] = new Array("00_005.htm", "Case Studies");

var lessonSub1 = new Array();
lessonSub1[0] = new Array("01_001.htm", "Learning Objective");
lessonSub1[1] = new Array("01_002.htm", "Purpose of the C&P Muscle Injuries Examination");
lessonSub1[2] = new Array("01_003.htm", "Scope of the C&P Muscle Injuries Examination");
lessonSub1[3] = new Array("01_004.htm", "Legal Aspects of the C&P Muscle Injuries Examination");
lessonSub1[4] = new Array("01_005.htm", "Legal Aspects: Musculoskeletal Injuries");
lessonSub1[5] = new Array("01_006.htm", "Evaluation of Muscle Disabilities");
lessonSub1[6] = new Array("01_007.htm", "Loss of Use");
lessonSub1[7] = new Array("01_008.htm", "23 Muscle Groups");
lessonSub1[8] = new Array("01_009.htm", "23 Muscle Groups Exercise");
lessonSub1[9] = new Array("01_0010.htm", "DeLuca Criteria");
lessonSub1[10] = new Array("01_0011.htm", "Mitchell Criteria");
lessonSub1[11] = new Array("01_0012.htm", "Knowledge Check");
lessonSub1[12] = new Array("01_0013.htm", "Lesson Summary");


var lessonSub2 = new Array();
lessonSub2[0] = new Array("02_001.htm", "Lesson Two Sample");

var lessonSub3 = new Array();
lessonSub3[0] = new Array("03_001.htm", "Lesson Three Sample");

var lessonSub4 = new Array();
lessonSub4[0] = new Array("04_001.htm", "Congratulations!");
lessonSub4[1] = new Array("04_002.htm", "Final Exam");
lessonSub4[2] = new Array("04_003.htm", "End of Course Activity Instructions");

*/
var footerText = "2014 - Department of Veterans Affairs";

var msgEOC='<p>You have completed the online learning module titled: &ldquo;'+titleCourse+'&rdquo;.</p><p> </p><p>To exit the course, please close the browser tab or window.</p>'; 

var disclaimerInt='You are now leaving the course titled: "'+titleCourse+'". The content manager of this online learning module does not exercise any editorial control over the information you may find at these locations. Such links are consistent with the stated purpose of this VA Internet/Intranet service.';

var disclaimerExt='You are now leaving the course titled: "'+titleCourse+'". The appearance of hyperlinks does not constitute endorsement by the Department of Veterans Affairs of this web site or the information, products or services contained therein. The content manager of this online learning module and VA do not exercise any editorial control over the information you may find at these locations. Such links are consistent with the stated purpose of this VA Internet/Intranet service.';

var msgCompleteAllLessons = '<p>All lessons have been marked complete. Please select the "Next" button to proceed to the final exam.';