function spinWords(string){
  let splited = string.split(" ");
    
    for (let i = 0; i < splited.length; i++){
      if (splited[i].length > 4){
        splited[i] = splited[i].split("").reverse().join("")
      }
  }
    return splited.join(" ");
    }