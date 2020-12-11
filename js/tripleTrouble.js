function tripleTrouble(one, two, three){
    let result = "";
    for(let i = 0; i< one.length; i++){
        result = result + one[i] + two[i] + three[i];
    }

return result;
   }
tripleTrouble("this","test","lock"); //"ttlheoiscstk"
tripleTrouble("aa","bb","cc"); //"abcabc"