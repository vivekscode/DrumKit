for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (event){
        handleClick(this.innerHTML);
        handlePress(this.innerHTML);
    });
}
function handleClick(buttonelement){
    
    switch(buttonelement){
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickbass=new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
            break;
        default:
            console.log(buttonelement);
            
    }
}
function handlePress(key){
    var select=document.querySelector('.'+ key);
    select.classList.add('pressed');
    console.log("It has came to the handlepress")
    setTimeout(() => {
        select.classList.remove('pressed');
    }, 100);
}

document.addEventListener("keypress",function (event){
    handleClick(`${event.key}`);
    handlePress(`${event.key}`);
})