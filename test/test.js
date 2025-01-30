function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  let wedgesCut = 0;
  while(wedgesCut < wedgesNeeded && i < limes.length){
    switch(limes[i]){
      case 'small':
        wedgesCut+=6;
        break;
      case 'medium':
        wedgesCut+=8;
        break;
      case 'large':
        wedgesCut+=10;
        break;
    }
    i++;
  }
  return i;
}

console.log(25, ['small', 'small', 'large', 'medium', 'small']);
  