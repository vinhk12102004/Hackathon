

function transfer(){	
	var tablink;
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		var currentTab = tabs[0];
   		var tablink = currentTab.url;
		$("#p1").text("The URL being tested is - "+tablink);

		var xhr=new XMLHttpRequest();
		params="url="+tablink;
        // alert(params);
		var markup = "url="+tablink+"&html="+document.documentElement.innerHTML;
		xhr.open("POST","http://localhost/Malicious-Web-Content-Detection-Using-Machine-Learning/Server.php",false);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


		xhr.send(markup);


		var responseText = xhr.responseText.trim();
                if (responseText === "SAFE") {
					$("#div1").text(responseText);
					$("#div1").addClass("safe");

                } else if(responseText === "WARNING") {
                    $("#div1").text(responseText);
					$("#div1").addClass("warning");
                }
				else{
					$("#div1").text("Unknow");
					$("#div1").addClass("unknow");
				}

		
		

		

		
		return xhr.responseText;
	});
}


$(document).ready(function(){
    $("button").click(function(){	
		var val = transfer();
    });
});

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	var currentTab = tabs[0];
   	var tablink = currentTab.url;
	$("#p1").text("The URL being tested is:"+tablink);

	
});



