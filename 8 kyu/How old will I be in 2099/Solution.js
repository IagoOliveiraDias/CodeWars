function  calculateAge(age1, age2) {
  if (age1 < age2){
      if ((age2-age1) == 1){
        return "You are 1 year old."  
      }
  return "You are "+(age2 - age1)+ " years old."
  }
  else if (age1 > age2){
      if ((age1 - age2) ==1){
        return "You will be born in 1 year."
    }
    return "You will be born in "+(age1 - age2)+ " years."
  }
  else (age1 == age2)
    return "You were born this very year!"
}
