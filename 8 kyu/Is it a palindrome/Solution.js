function isPalindrome(x) {
    let lower = x.toLowerCase();
    let back = lower.split("").reverse().join("")
    
      if (lower === back){
        return true
      }
      else
        return false
  }