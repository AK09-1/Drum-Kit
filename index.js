var numberofitems = document.querySelectorAll(".drum").length;
for(var i=0; i<numberofitems;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var btnname=this.innerHTML;
        makesound(btnname);
        btnani(btnname);
    });
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    btnani(event.key);
});
function makesound(key)
{
    switch (key) {
        case "w":
            
            var music = new Audio("sounds/tom-0.mp3");
            music.play();
            
            break;
        case "a":
            
            var music = new Audio("sounds/tom-1.mp3");
            music.play();
            
            break;  
        case "s":
            
            var music = new Audio("sounds/tom-2.mp3");
            music.play();
            
            break;
        case "d":
            
            var music = new Audio("sounds/tom-3.mp3");
            music.play();
            
            break;    
        case "j":
            
            var music = new Audio("sounds/tom-4.mp3");
            music.play();
            
            break;   
        case "k":
            
            var music = new Audio("sounds/tom-5.mp3");
            music.play();
            
            break;        
        case "l":
            
            var music = new Audio("sounds/tom-6.mp3");
            music.play();
            
            break;       
    
        default:console.log();
            break;
    }
}
function btnani(key)
{
    var active = document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);

}