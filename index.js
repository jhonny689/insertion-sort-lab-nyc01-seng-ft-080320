function findMinAndRemove(array){
  // console.log('findMinAndRemove 1:',array);
  let min = array[0],
      minIndex = 0;
  for(let i = 1; i < array.length; i++){
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex,1);
  // console.log('findMinAndRemove 2:',array);
  return min;
}

function selectionSort(array){
  // console.log('Unsorted Array at first',array);
  const sorted = [];
  const len = array.length;
  for(let i = 0; i < len; i++){
    sorted[i] = findMinAndRemove(array);
    // console.log('Sorted array:',sorted);
  }
  return sorted;
}
