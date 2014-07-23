// VA Mobile Template Draft v1.0.0.3
// For questions contact wconklin@allencorporation.com

$( document ).delegate("#videoPage1", "pageinit", function() {

			$("#video_1").bind("ended", function() {
				setLessonComplete();
			});
});

