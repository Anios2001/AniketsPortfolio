let charIndex = 0;
let container;
let textToType;
let typeTime=100;
function startTyping(inputContainer, textToTypeP,time){
    container= inputContainer;
    textToType= textToTypeP;
    
    typeTime= time;
    container.textContent="";
    charIndex=0;
    type();
    
}
function type() {
    if (charIndex < textToType.length) {
        
        container.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, typeTime); // Adjust typing speed here (milliseconds)
    }
    
}

