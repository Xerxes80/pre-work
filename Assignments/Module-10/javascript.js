
document.getElementById("button1").addEventListener("click", function(){
    
        document.getElementById("box").style.height = "400px";
        document.getElementById("box").style.width = "400px";
        document.getElementById("quote").style.paddingLeft="125px";
            
});

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor="blue";
});

document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity="0.5";
});

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.borderRadius="50%";
});

document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("quote").style.display="block";
});

document.getElementById("button6").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor="orange";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.opacity="1";
    document.getElementById("box").style.borderRadius="0%";
    document.getElementById("quote").style.display="none";
    document.getElementById("quote").style.paddingLeft="0px";
});