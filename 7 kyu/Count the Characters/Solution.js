function countChar(string, char) {
    let sum = 0; 
      
      for (let i = 0; i < string.length; i++){
          if ((string[i] == char.toLowerCase()) || (string[i] == char.toUpperCase())){
            sum += 1;
      }
        }
      return sum 
    }
    