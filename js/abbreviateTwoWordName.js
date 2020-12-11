/*Solution one*/
function abbrevName(name){
    let string = name;
    let array = string.split(' ');
    console.log(array);
    let output = '';
    for(let i = 0; i < array.length; i++){
        if(i === 0){
            output += array[i][0];
        } else {
        output += "." + array[i][0];
        }
    }
    return output.toUpperCase();
    }

abbrevName("Evan Cole"); //"E.C"
abbrevName("P Favuzzi"); //"P.F"

/*Solution two*/
function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }
abbrevName("David Mendieta"); //"D.M"