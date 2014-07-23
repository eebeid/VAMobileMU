// VA Mobile Template Draft v1.0.0.3
// DO NOT EDIT THIS PAGE
// Offline API, tracks progress via cookies. Replace with api_scorm.js before sending to TMS
// For questions contact wconklin@allencorporation.com

function MillisecondsToCMIDuration(n) {
//Convert duration from milliseconds to 0000:00:00.00 format
	var hms = "";
	var dtm = new Date();	dtm.setTime(n);
	var h = "000" + Math.floor(n / 3600000);
	var m = "0" + dtm.getMinutes();
	var s = "0" + dtm.getSeconds();
	var cs = "0" + Math.round(dtm.getMilliseconds() / 10);
	hms = h.substr(h.length-4)+":"+m.substr(m.length-2)+":";
	hms += s.substr(s.length-2)+"."+cs.substr(cs.length-2);
	return hms
}

function ExitCourse(){
	//SCOSetStatusCompleted();
	window.close();
}

function getValue(strElement) {
var cookieName = titleCourse.replace(/\s+/g, '')+strElement;
var i,x,y,ARRcookies=document.cookie.split(";");

for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==cookieName)
    {
    return unescape(y);
    }
  }
}


function setValue(strElement, strValue) {
	var cookieName = titleCourse.replace(/\s+/g, '')+strElement;
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + 30);
    
    var strVal=escape(strValue) + "; expires="+exdate.toUTCString();
    document.cookie=cookieName + "=" + strVal + "; path=/";

}


function doBookmark(){
	// Because of the difference in mobile pages vs the desktop course, we BM to first page of the lesson
	var strBookmark = getValue('lessonBM');
	if (pageMismatch) {
		strBookmark = strBookmark.substring(strBookmark.lastIndexOf("_")+1,0);
		strBookmark += "001.htm";
		setBookMark(strBookmark);
	}

	if ( strBookmark != "" && strBookmark != "undefined"){

		var bookmarkReturn = confirm('Do you want to go back to the last page you were on earlier?','Bookmark');	 
		if (bookmarkReturn == true){
		
			window.location.href = strBookmark;
		
		}else{
			setBookMark("lesson00/00_001.htm");
			window.location.href = "lesson00/00_001.htm";
		}
	}	
}

function SCOSetValue(a,b) {

}

function setComplete() {

}

function setBookMark(cPage)
{
	setValue("lessonBM", cPage)
}