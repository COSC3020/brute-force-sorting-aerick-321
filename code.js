function permutationSort(a) {
    let count = 1;
    for(var i = 0; i< a.length -1; i++){
        for(var j = 0; j < a.length-1; j++){
            if( a[j] > a [j+1]){
                swap(arr[j], arr[j + 1]);
                count = count +1;
            }
        }
    }
    return count;
}
