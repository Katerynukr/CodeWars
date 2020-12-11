function removeEveryOther(arr){
    for (let i=0; i < arr.length; ++i) {
               if (i / 2 !== 0) {
                 arr.splice(i, 1); // Remove even numbers
               }
             }return arr;
     }

removeEveryOther(['Hello', 'Goodbye', 'Hello Again']); //['Hello', 'Hello Again']
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //[1, 3, 5, 7, 9]