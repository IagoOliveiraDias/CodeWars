function removeChar(str){

    let newWord =''; 
      
      for (let i=1 ; i < str.length-1; i++){
          newWord += str[i];
      }
      return newWord
    };
    
// or 
// function removeChar (str){
// return str.slice(1,-1);
// }
    