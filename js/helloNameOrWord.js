function hello(name) {
    if( name === "" || !name) {
      return 'Hello, World!';
    } else {
      let lowerCase = name.toLowerCase();
      let returnName =  lowerCase.charAt(0).toUpperCase() +  
      lowerCase.slice(1);
      return "Hello, " + returnName + "!";
    }
  }

hello('alice'); //'Hello, Alice!'
hello(); //'Hello, World!'