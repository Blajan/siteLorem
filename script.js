
var safa1 = document.getElementById("scrol1");
var safa2 = document.getElementById("scrol2");
var safa3 = document.getElementById("scrol3");
var safa4 = document.getElementById("scrol4");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop < 530) {  
        safa1.style.backgroundColor = "white";
        safa1.style.color = "rgb(0, 140, 255)";
        safa2.style.backgroundColor = "rgb(0, 140, 255)"; 
        safa2.style.color = "white"; 
    } 
    else if (document.documentElement.scrollTop >= 530 && document.documentElement.scrollTop < 1200) {
        safa1.style.backgroundColor = "rgb(0, 140, 255)";
        safa1.style.color = "white";
        safa2.style.backgroundColor = "white";
        safa2.style.color = "rgb(0, 140, 255)";
        safa3.style.backgroundColor = "rgb(0, 140, 255)";
        safa3.style.color = "white"                                          
    } 
    else if (document.documentElement.scrollTop >= 1200 && document.documentElement.scrollTop < 1900) {
        safa2.style.backgroundColor = "rgb(0, 140, 255)"; 
        safa2.style.color = "white";        
        safa3.style.backgroundColor = "white";
        safa3.style.color = "rgb(0, 140, 255)";
        safa4.style.backgroundColor = "rgb(0, 140, 255)";
        safa4.style.color = "white";                                        
    } 
    else if (document.documentElement.scrollTop >= 1900) {
        safa3.style.backgroundColor = "rgb(0, 140, 255)"; 
        safa3.style.color = "white";      
        safa4.style.backgroundColor = "white";
        safa4.style.color = "rgb(0, 140, 255)";                                          
    } 
} 
