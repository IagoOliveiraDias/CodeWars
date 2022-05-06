function bingo(a) {
    let count = 0; 
      for (let i = 0; i < a.length; i++){
        if (a[i] == 2 || a[i] == 9 || a[i] == 14  || a[i] == 7 || a[i] == 15){
        count += 1;
        }
      }
        if (count >= 5){
        return "WIN"
      }
      return "LOSE";
    }