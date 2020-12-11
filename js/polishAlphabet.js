/*First solution*/
function correctPolishLetters(name){
    let changedName = "";
    for(let i =0; i < name.length; i++){
        let currentLetter = name[i];
        switch(currentLetter) {
            case "ą":
                changedName += "a";
                break;  
            case "ć":
                changedName += "c";
                break; 
            case "ę":
                changedName += "e";
                break; 
            case "ł":
                changedName += "l";
                break;  
             case "ń":
                changedName += "n";
                break; 
            case "ó":
                changedName += "o";
                break;    
            case "ś":
                changedName += "s";
                break;   
            case "ź":
                changedName += "z";
                break;               
            case "ż":
                changedName += "z";
                break;  
            default:
                changedName +=currentLetter;               
        } 
    }
        return changedName
}

correctPolishLetters("Jędrzej Błądziński"); //"Jedrzej Bladzinski"
correctPolishLetters("Lech Wałęsa"); //"Lech Walesa"


/*Seconds solution*/
var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");
}
correctPolishLetters("Maria Skłodowska-Curie"); //"Maria Sklodowska-Curie"