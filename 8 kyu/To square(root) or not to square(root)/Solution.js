function squareOrSquareRoot(array) {
    let newarray = [];
      for (let i = 0; i < array.length; i++){
      let number = array[i];
        
        if ((Math.sqrt(number)) == Math.floor(Math.sqrt(number))){
          newarray.push(Math.sqrt(number))
        }
        else 
          newarray.push(number*number)
      }
      
      return newarray;  
    }
    