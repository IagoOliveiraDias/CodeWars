function digital_root(n) {
    if (n < 10){
      return n; 
    }
      else{
        for (var sum = 0, n = String(n), i = 0; i < n.length; i++)
        sum += Number(n[i]);
    }
    return digital_root(sum);
        
}