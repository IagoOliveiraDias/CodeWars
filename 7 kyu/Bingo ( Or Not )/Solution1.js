const bingo = a => [2,7,9,14,15].every(e => a.includes(e)) ? 'WIN' : 'LOSE';