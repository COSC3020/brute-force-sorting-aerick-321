function ifsorted(array){
    for(let i = 0; i < array.length-1; i++){
        if (array[i] > array[i +1]){
            return false;
        }
    }
    return true;
}

function permutationSort(a, num) {
    num = 0;
    if (a.length<=1) {
        if (isSorted(a)) { 
            return 1;
        }
        return 1;
    }
    let count = 0;
    for(let i = num; i < a.length; i++){
        [a[i], a[num]] = [a[num], a[i]];
        count += permutationSort(a, num + 1);
        [a[i], a[num]] = [a[num], a[i]];
        
        if (isSorted(a)) {
            break;
        }
    }
    return count;
}
