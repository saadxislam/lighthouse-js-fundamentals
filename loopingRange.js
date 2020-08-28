function range (start, end, step) {
  let arRange = [];
  if (start === undefined || end  === undefined || start > end || step <=0){
    return [];
  }
  for (i = start; i <= end; i= i+step){
   arRange.push(i);
  }
  return arRange;
  }
console.log(range(0, 10, 2))