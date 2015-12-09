// JavaScript Document
document.getElementById("show_instructions").style.display="none";

document.getElementById("instructions").onclick = function(){ "use strict";
	document.getElementById("instructions").style.backgroundColor="red";
	document.getElementById("show_instructions").style.display="block";
	
	document.getElementById("background").style.opacity="0.5";
	document.getElementById("buttons").style.opacity="0.5";
};

document.getElementById("start").onclick = function(){ "use strict";
	document.getElementById("start").style.backgroundColor="red";
};

document.getElementById("close_panel").onclick = function(){ "use strict";
	document.getElementById("show_instructions").style.display="none";
	
	document.getElementById("background").style.opacity="1";
	document.getElementById("buttons").style.opacity="1";
	
	document.getElementById("instructions").style.backgroundColor="#ffc";
};

document.getElementById("start").onclick = function(){ "use strict";
	location.replace("defenders.html");
};


/*******DEFENDERS JS******/

