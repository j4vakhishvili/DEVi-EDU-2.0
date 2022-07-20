function openMenu() {
    document.getElementById("menu").style.top = "0";
}
  
function closeMenu() {
    document.getElementById("menu").style.top = "-100%";
}

function openlessonsSection() {
    document.getElementById("lessonsSection").style.display = "flex";
    document.getElementById("btnLesson").style.display = "none";
    document.getElementById("btnLessons").style.display = "flex";
}
  
function closelessonsSection() {
    document.getElementById("lessonsSection").style.display = "none";
    document.getElementById("btnLesson").style.display = "flex";
    document.getElementById("btnLessons").style.display = "none";
}

function opengakvetilebisSeqcia() {
    document.getElementById("gakvetilebisSeqcia").style.display = "flex";
    document.getElementById("btnGakvetili").style.display = "none";
    document.getElementById("btnGakvetilebi").style.display = "flex";
}
  
function closegakvetilebisSeqcia() {
    document.getElementById("gakvetilebisSeqcia").style.display = "none";
    document.getElementById("btnGakvetili").style.display = "flex";
    document.getElementById("btnGakvetilebi").style.display = "none";
}

function opMenu(){
    document.getElementById("navigation").style.opacity = "1";
}