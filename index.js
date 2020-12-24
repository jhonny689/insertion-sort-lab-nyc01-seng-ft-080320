function findMinAndRemove(array){
  console.log(array);
  let min = array[0],
      minIndex = 0;
  for(let i = 1; i < array.length; i++){
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex,1);
  console.log(array);
  return min;
}

function selectionSort(array){
  const sorted = [];
  for(let i = 0; i < array.length; i++){
    sorted[i] = findMinAndRemove(array);
  }
  console.log(array);
  console.log(sorted);
  return sorted;
}
