//editor
function compile() {

	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js");
	var code = document.getElementById("code").contentWindow.document;
	
	document.body.onload = function(){
	    code.open();
		code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
		code.close();
    };

	 document.body.onkeyup = function(){
	    code.open();
		code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
		code.close();
      };
    };

compile();

//switch
function openHTML() {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("htmlBtn").style.background = "#D40124";
    document.getElementById("cssBtn").style.background = "#ff004b";
    document.getElementById("jsBtn").style.background = "#ff004b";
}

function openCSS() {
    document.getElementById("html").style.display = "none";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "none";
    document.getElementById("htmlBtn").style.background = "#ff004b";
    document.getElementById("cssBtn").style.background = "#D40124";
    document.getElementById("htmlBtn").style.background = "#ff004b";
}

function openJS() {
    document.getElementById("html").style.display = "none";
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "block";
    document.getElementById("htmlBtn").style.background = "#ff004b";
    document.getElementById("cssBtn").style.background = "#ff004b";
    document.getElementById("jsBtn").style.background = "#D40124";
}